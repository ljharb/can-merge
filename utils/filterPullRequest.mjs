import parsePullRequest from './parsePullRequest.mjs';

export default function filterPullRequest(response, argPr) {
	const parsedResponse = parsePullRequest(response);

	return argPr ? parsedResponse.filter((pr) => String(pr.number) === argPr) : parsedResponse;
}
