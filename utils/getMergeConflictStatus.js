'use strict';

const getMergeConflictStatus = (response) => response.repository.pullRequest.mergeable === 'MERGEABLE';

module.exports = getMergeConflictStatus;
