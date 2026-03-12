import gitRepoInfo from 'git-repo-info';
import parse from 'parse-git-config';
import parseRemoteUrl from './parseRemoteUrl.mjs';

export default function getRepo(path = process.cwd(), remote = 'origin') {
	const { commonGitDir } = gitRepoInfo(path);
	if (commonGitDir) {
		const config = parse.sync({ path: `${commonGitDir}/config` });
		const url = parse.expandKeys(config)?.remote?.[remote]?.url;
		return parseRemoteUrl(url);
	}
	return null;
}
