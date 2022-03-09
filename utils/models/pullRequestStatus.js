'use strict';

module.exports = {
	CLOSED: '⚠ This PR is closed',
	CONFLICT: '⚠ There are merge conflicts with the base branch',
	MERGEABLE: '✔ This PR is mergeable',
	MERGED: 'ℹ This PR is already merged',
	REVIEW_APPROVED: '✔ This PR has been approved',
	REVIEW_DISAPPROVED: 'ℹ There are requested changes on this PR - merging is blocked',
	REVIEW_REQUIRED: 'ℹ This PR requires a review - merging is blocked',
	STATUS_FAILURE: '⚠ Some status checks are not successful',
	STATUS_PENDING: 'ℹ Some status checks are pending',
	BYPASSABLE: 'ℹ This PR requires a review before merging, but as an ADMIN with merge rights you can bypass that restriction',
};
