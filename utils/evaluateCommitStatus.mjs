import commitStatus from './models/commitStatus.mjs';

/** @import { Commit } from '../types/graphql.js' */

/** @param {Commit | null} commit */
const success = (commit) => commit?.statusCheckRollup?.state === 'SUCCESS';
/** @param {Commit | null} commit */
const failure = (commit) => commit?.statusCheckRollup?.state === 'ERROR' || commit?.statusCheckRollup?.state === 'FAILURE';
/** @param {Commit | null} commit */
const pending = (commit) => commit?.statusCheckRollup?.state === 'PENDING';

/** @param {Commit | null} commit */
export default function evaluateCommitStatus(commit) {
	if (success(commit)) {
		return commitStatus.STATUS_SUCCESS;
	}
	if (failure(commit)) {
		return commitStatus.STATUS_FAILURE;
	}
	if (pending(commit)) {
		return commitStatus.STATUS_PENDING;
	}
	return commitStatus.STATUS_NOT_FOUND;
}
