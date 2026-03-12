import getRepoInfo from 'git-repo-info';

export default function getSHA(path = process.cwd(), short = false) {
	const { sha, abbreviatedSha } = getRepoInfo(path);
	return sha ? short ? abbreviatedSha : sha : null;
}
