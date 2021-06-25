'use strict';

const isMerged = (response) => response.repository.pullRequest.merged;

module.exports = isMerged;
