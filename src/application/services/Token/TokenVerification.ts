class TokenVerification {
	private jwt;

	constructor(jwt){
		this.jwt = jwt;
	}

	public __invoke(token : string, key : string) : 'Ok' | 'Expired' {
		try{
			this.jwt.verify(token, key);
			return 'Ok';
		}catch(e){
			console.log(e);
			return 'Expired';
		}
	}

}

export default TokenVerification;