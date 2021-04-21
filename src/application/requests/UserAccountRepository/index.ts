import { Api } from "application/services";

export default class UserAccountRepository {


	public updatePassword = async (idUser : number,oldPassword : string,newPassword : string) : Promise<boolean> => {
		const params = {
			idUser : String(idUser),
			oldPassword,
			newPassword,
		};
		try {
			const request = await Api.post(	"/users/password",	new URLSearchParams(params) );
			const result = request.data;
			return result.update;
		} catch (e) {
			console.log(e);
			return false;
		}
	}

	public updateAccountBasic = async (idUser : number,username : string, fullName : string) => {
		try {
			const params = {
				idUser : String(idUser),
				username,
				fullName,
			};
			const request = await Api.post("/users/account/basic", new URLSearchParams(params));
			const result = request.data;
			return result.update;
		} catch (e) {
			console.log(e);
		}
	};

	public updatePersonalInformation = async (idUser : number,key : string,value : string) => {
		try {
			const params = {
				[key] : value
			}
			const request = await Api.post(`/users/personal/update&userId=${idUser}`,new URLSearchParams(params));
			const result = request.data;
			return result;
		}
		catch(e) {
			console.log(e);
			return false;
		}
	}

	public sendEmailPasswordRecovery = async (email : string) => {
		try {
			const request = await Api.post('password/email', new URLSearchParams({ email }));
			const { sent } = request.data;

			return sent;
		} catch (error) {
			console.log(error);
			return false;	
		}
	}
}