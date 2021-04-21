class TokenGenerate {
	private jwt;
	private key;

	constructor(jwt, key : string){
		this.jwt = jwt;
		this.key = key;
	}

	public __invoke(payload) : string {
		const expired_time = ((60 * 60) * 24) * 14;
		const token = this.jwt.sign(
			payload, 
			this.key,
			{ expiresIn : expired_time }
		);
		
		return 'Bearer ' + token;
	}

}

export default TokenGenerate;