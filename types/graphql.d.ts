export type CheckNode = {
	__typename: 'CheckRun' | 'StatusContext';
	status?: string | null;
	name?: string;
	conclusion?: string | null;
	state?: string;
	context?: string;
	description?: string | null;
	isRequired?: boolean;
};

export type StatusCheckRollup = {
	state: string;
	contexts: {
		totalCount: number;
		pageInfo: {
			endCursor: string | null;
			hasNextPage: boolean;
		};
		nodes: CheckNode[];
	} | null;
} | null;

export type Commit = {
	statusCheckRollup: StatusCheckRollup;
};

export type BranchProtectionRule = {
	isAdminEnforced: boolean;
	requiredStatusCheckContexts: string[] | null;
};

export type PullRequest = {
	state: string;
	url: string;
	title: string;
	baseRef: {
		name: string;
		branchProtectionRule: BranchProtectionRule | null;
	} | null;
	author: { login: string };
	viewerCanMergeAsAdmin: boolean;
	number: number;
	merged: boolean;
	mergeable: string;
	reviewDecision: string | null;
	potentialMergeCommit: { commitUrl: string } | null;
	commits: { nodes: { commit: Commit }[] };
};

export type RateLimit = {
	limit: number;
	cost: number;
	remaining: number;
	resetAt: string;
};

export type QueryResponse = {
	search: {
		issueCount: number;
		edges: { node: PullRequest }[];
	};
	rateLimit: RateLimit;
	repository?: {
		commit: Commit | null;
	};
};

export type Check = {
	name: string;
	isRequired: boolean;
};

export type CheckResults = {
	failure: Check[];
	pending: Check[];
};

export type Params = {
	commit: boolean;
	repo: string;
	pr: string | number | undefined;
	sha: string | null;
	token: string | undefined;
};

export type BuildQueryParams = {
	name: string;
	owner: string;
	pr: string | number | undefined;
	sha: string | null;
	commit?: boolean;
};
