#!/usr/bin/env node

import yargs from 'yargs';
import { styleText } from 'util';
import https from 'https';

import watch from '../utils/watch.mjs';
import getRepo from '../utils/getRepo.mjs';
import getSHA from '../utils/getSHA.mjs';

import runQuery from '../utils/runQuery.mjs';
import evaluatePullRequest from '../utils/evaluatePullRequest.mjs';
import evaluateChecks from '../utils/evaluateChecks.mjs';
import parseRemoteUrl from '../utils/parseRemoteUrl.mjs';
import pullRequestStatus from '../utils/models/pullRequestStatus.mjs';
import getMessage from '../utils/getMessage.mjs';
import evaluateCommitStatus from '../utils/evaluateCommitStatus.mjs';
import commitStatus from '../utils/models/commitStatus.mjs';
import filterPullRequest from '../utils/filterPullRequest.mjs';
import resolveIndentifier from '../utils/resolveIndentifier.mjs';
import getPRWithRequiredChecks from '../utils/getPRWithRequiredChecks.mjs';

const {
	GITHUB_TOKEN,
	GH_TOKEN,
	NODE_ENV,
} = process.env;

const ORIGIN = Object('origin');

const defaultRepo = getRepo(process.cwd());
const REPO = defaultRepo && Object(defaultRepo);

const args = yargs(process.argv.slice(2))
	.usage('Usage: can-merge -p <pr> [-r <repo>]')
	.help()
	.strict()
	.options({
		commit: {
			alias: 'c',
			default: false,
			demandOption: false,
			describe: 'check commit status',
			type: 'boolean',
		},
		pr: {
			alias: 'p',
			demandOption: false,
			describe: 'pull request',
			type: 'string',
		},
		remote: {
			default: ORIGIN,
			demandOption: false,
			describe: 'remote name',
			type: 'string',
		},
		repo: {
			alias: 'r',
			default: REPO,
			demandOption: !REPO,
			describe: 'repository',
			type: 'string',
		},
		retryDelay: {
			default: 5e3,
			describe: 'delay before polling the api',
			type: 'number',
		},
		sha: {
			alias: 's',
			default: 'HEAD',
			describe: 'commit SHA, or any git commit-ish',
			type: 'string',
		},
		token: {
			demandOption: !(GH_TOKEN || GITHUB_TOKEN),
			describe: 'github access token',
			type: 'string',
		},
		watch: {
			alias: 'w',
			describe: 'watch pending checks',
			type: 'boolean',
		},
	})
	.check((argv) => {
		if (argv.repo !== REPO && argv.remote !== ORIGIN) {
			throw styleText('red', '`--repo` and `--remote` are mutually exclusive');
		}
		return true;
	})
	.middleware((argv) => {
		if (argv.sha === 'HEAD') {
			return {
				...argv,
				sha: getSHA(process.cwd(), true),
			};
		}
		if (argv.sha) {
			return {
				...argv,
				sha: resolveIndentifier(argv.sha, true),
			};
		}
		return argv;
	})
	.middleware((argv) => {
		if (argv.repo === REPO && argv.remote) {
			// repo is default, remote is provided
			return {
				...argv,
				...argv.remote && { repo: getRepo(process.cwd(), argv.remote) },
			};
		}
		return argv;
	})
	.check((argv) => {
		if (!argv.repo) {
			if (argv.remote !== ORIGIN) {
				throw styleText('red', `Could not find remote git repo with remote name \`${argv.remote}\``);
			}
			throw styleText('red', 'Could not infer any git repository from directory.\nAre you sure you are in a git repository? Otherwise, please specify `--repo=`');
		}
		if (argv.watch && !argv.sha && !argv.pr) {
			throw styleText('red', 'Could not infer a PR or a SHA. Please specify a pull request to watch with `--pr`, or a commit with `--sha`');
		}

		return true;
	})
	.parse();

const token = args.token || GITHUB_TOKEN || GH_TOKEN;

function displayChecks(checks) {
	checks.forEach((p) => {
		if (p.isRequired) {
			console.info(styleText('red', `🔒 ${p.name}`));
		} else {
			console.info(styleText('yellow', `   ${p.name}`));
		}
	});
}

function outputChecks(failure, pending) {
	if (pending.length > 0) {
		console.info(styleText('red', `Pending Checks (${pending.length}):`));
		displayChecks(pending);
	}
	if (failure.length > 0) {
		console.info(styleText('red', `Failed Checks (${failure.length}):`));
		displayChecks(failure);
	}
}

function outputStatus(response, params) {
	if (NODE_ENV === 'DEBUG') {
		console.error(JSON.stringify(response, null, 2));
	}
	if (args.commit) {
		if (response.repository.commit === null) {
			console.info(styleText('redBright', `⚠ This remote repository does not contain any commits matching sha: ${args.sha}`));
		} else {
			const status = evaluateCommitStatus(response.repository.commit);
			console.info(getMessage(status));
			if (status !== commitStatus.STATUS_SUCCESS) {
				process.exitCode = (process.exitCode ?? 0) + 1;
			}
		}
	}

	getPRWithRequiredChecks(filterPullRequest(response), params).then((prs) => {
		if (prs.length === 0 && !args.commit) {
			if (params.pr) {
				console.info(styleText('redBright', `⚠ This remote repository does not contain any pull requests matching number: ${args.pr}`));
			} else {
				console.info(styleText('redBright', `⚠ This remote repository does not contain any pull requests matching sha: ${args.sha}`));
			}
		} else {
			prs.forEach((pr) => {
				const requiredChecks = pr.baseRef?.branchProtectionRule?.requiredStatusCheckContexts;
				const status = evaluatePullRequest(pr, requiredChecks);
				console.info(pr.url, 'by @'.concat(pr.author.login, ':'), pr.title, '\n', getMessage(status), '\n');
				if (status !== pullRequestStatus.MERGEABLE) {
					process.exitCode = (process.exitCode ?? 0) + 1;
				}
				const { failure, pending } = evaluateChecks(pr, requiredChecks);

				outputChecks(failure, pending);
			});
		}
	});

	console.error(`API Points: used - ${response.rateLimit.cost}\tremaining - ${response.rateLimit.remaining}`);
}

const { repo, pr, sha } = args;

const options = {
	hostname: 'github.com',
	path: `/${repo}`,
	method: 'HEAD',
};

https.request(options, (response) => {
	const params = {
		commit: args.commit,
		repo: parseRemoteUrl(response.headers?.location) ?? String(repo),
		pr,
		sha: pr ? null : sha,
		token,
	};

	if (args.watch) {
		console.error('Waiting for all checks to complete ...\n');
		watch(args.retryDelay, () => runQuery(params)).then((res) => {
			console.clear();
			outputStatus(res, params);
		}).catch((error) => { console.log(styleText('red', error)); });
	} else {
		runQuery(params).then((res) => {
			outputStatus(res, params);
		}).catch((error) => { console.log(styleText('red', error)); });
	}
}).on('error', (err) => {
	console.error(err);
}).end();
