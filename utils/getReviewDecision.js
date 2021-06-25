'use strict';

const getReviewDecision = (response) => response.repository.pullRequest.reviewDecision;

module.exports = getReviewDecision;
