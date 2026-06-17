#!/usr/bin/env node

import pargs from 'pargs';
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

const defaultRepo = getRepo(process.cwd());

const { help, values } = await pargs(import.meta.filename, {
	options: {
		commit: {
			short: 'c',
			default: false,
			type: 'boolean',
			description: 'check commit status',
		},
		pr: {
			short: 'p',
			type: 'string',
			description: 'pull request',
		},
		remote: {
			type: 'string',
			description: 'remote name',
		},
		repo: {
			short: 'r',
			type: 'string',
			default: defaultRepo,
			defaultDescription: 'the current directory’s repo',
			description: 'repository',
		},
		retryDelay: {
			default: 5e3,
			type: 'integer',
			description: 'delay before polling the api',
		},
		sha: {
			short: 's',
			default: 'HEAD',
			type: 'string',
			description: 'commit SHA, or any git commit-ish',
		},
		token: {
			type: 'string',
			description: 'github access token',
		},
		watch: {
			short: 'w',
			type: 'boolean',
			description: 'watch pending checks',
		},
	},
});

const {
	commit,
	pr: argPR,
	remote,
	repo: argRepo,
	retryDelay,
	sha: argSHA,
	token: argToken,
	watch: shouldWatch,
} = values;
await help();

if (!argToken && !GH_TOKEN && !GITHUB_TOKEN) {
	console.error(styleText('red', 'Error: --token is required (or set GITHUB_TOKEN / GH_TOKEN)'));
	process.exit(1);
}

if (argRepo && remote) {
	console.error(styleText('red', 'Error: `--repo` and `--remote` are mutually exclusive'));
	process.exit(1);
}

if (!defaultRepo && !argRepo && !remote) {
	console.error(styleText('red', 'Error: --repo is required (could not infer a git repository from directory)'));
	process.exit(1);
}

function resolveRepo() {
	if (remote) {
		const remoteRepo = getRepo(process.cwd(), remote);
		if (!remoteRepo) {
			console.error(styleText('red', `Could not find remote git repo with remote name \`${remote}\``));
			return process.exit(1);
		}
		return remoteRepo;
	}
	return argRepo;
}

function resolveSHA() {
	if (argPR) {
		return null;
	}
	if (argSHA === 'HEAD') {
		return getSHA(process.cwd(), true);
	}
	if (argSHA) {
		return resolveIndentifier(argSHA, true);
	}
	return null;
}

const repo = resolveRepo();
const sha = resolveSHA();

if (shouldWatch && !sha && !argPR) {
	console.error(styleText('red', 'Could not infer a PR or a SHA. Please specify a pull request to watch with `--pr`, or a commit with `--sha`'));
	process.exit(1);
}

const token = argToken || GITHUB_TOKEN || GH_TOKEN;

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
	if (commit) {
		if (response.repository.commit === null) {
			console.info(styleText('redBright', `⚠ This remote repository does not contain any commits matching sha: ${sha}`));
		} else {
			const status = evaluateCommitStatus(response.repository.commit);
			console.info(getMessage(status));
			if (status !== commitStatus.STATUS_SUCCESS) {
				process.exitCode = (process.exitCode ?? 0) + 1;
			}
		}
	}

	getPRWithRequiredChecks(filterPullRequest(response), params).then((prs) => {
		if (prs.length === 0 && !commit) {
			if (params.pr) {
				console.info(styleText('redBright', `⚠ This remote repository does not contain any pull requests matching number: ${argPR}`));
			} else {
				console.info(styleText('redBright', `⚠ This remote repository does not contain any pull requests matching sha: ${sha}`));
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

const options = {
	hostname: 'github.com',
	path: `/${repo}`,
	method: 'HEAD',
};

https.request(options, (response) => {
	const params = {
		commit,
		repo: parseRemoteUrl(response.headers?.location) ?? String(repo),
		pr: argPR,
		sha,
		token,
	};

	if (shouldWatch) {
		console.error('Waiting for all checks to complete ...\n');
		watch(retryDelay, () => runQuery(params)).then((res) => {
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
