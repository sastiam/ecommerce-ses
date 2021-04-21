import { Api } from "application/services";

import { IRequestIsUserRegister, IRequestRegisterUser } from "application/metadata/interfaces/User/request";

class UserAuthenticationRepository {

	public GetUserAuthInformation = async (email : string) => {
		try {
			const req = await Api.post("users/auth", new URLSearchParams({ email }));
			if(!req.data){
				alert('Esta cuenta no existe.');
				window.localStorage.clear();
				window.location.reload();
			}

			return req.data;
		}catch(e){
			console.log(e);
			return null;
		}
	}

	public RequestChekAuth = async (data : IRequestIsUserRegister) => {
		const requestData = new URLSearchParams({
			email : data.email,
			password : data.password
		});

		try{
			const requestAuthorization = await Api.post('users/check/auth',requestData);
			const data = requestAuthorization.data;
			
			return data.payload;
		}catch(e){
			console.log(e);
		}
	}

	public IsUserRegister = async (email : string) => {
		try {
			const req = await Api.post("users/exists",new URLSearchParams({ email }));
			const { exists } = req.data;
			return exists;
		}catch(e){
			console.log(e);
		}
	}

	public CreateUser = async (payload : IRequestRegisterUser) : Promise<boolean> => {
		const params = new URLSearchParams({
			email : String(payload.email),
			password : String(payload.password),
			fullName : String(payload.fullName)
		});

		try{
			const req = await Api.post("users/add",params);
			const { insert } = req.data;
			return insert;
		}catch(e){
			console.log(e);
			return false;
		}
	}

}

export default UserAuthenticationRepository;