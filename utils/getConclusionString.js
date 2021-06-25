'use strict';

const getConclusionString = (response) => response.repository.pullRequest.commits.nodes
	.map((node) => node.commit.statusCheckRollup?.state)
	.toString();

module.exports = getConclusionString;
