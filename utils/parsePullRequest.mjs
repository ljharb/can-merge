export default function parsePullRequest(response) {
	return response.search.edges.flatMap(({ node }) => node) || [];
}
