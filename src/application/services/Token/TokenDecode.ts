class TokenDecode {
	private jwt;

	constructor(jwt){
		this.jwt = jwt;
	}

	public __invoke(payload){
		return this.jwt.decode(payload);
	}
	
}

export default TokenDecode;