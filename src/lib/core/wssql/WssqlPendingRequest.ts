class WssqlPendingRequest {
	queryId: number;
	resolver: (null|((result: any) => void))

	constructor(queryId: number, resolver: (null|((result: any) => void))) {
		this.queryId = queryId;
		this.resolver = resolver;
	}
}

export default WssqlPendingRequest;