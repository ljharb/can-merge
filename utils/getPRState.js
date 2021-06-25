'use strict';

const getPRState = (response) => response.repository.pullRequest.state;

module.exports = getPRState;
