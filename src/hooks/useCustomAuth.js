import jwt from "jsonwebtoken";
import { Api } from "../application/services";
import { TokenKey } from "application/services/config";
import TokenGenerate from "application/services/Token/TokenGenerate";

const useCustomAuth = () => {
	const socialAuthentication = async (username,email,name,imageUrl) => {
		try {
			const params = {
				username,
				email,
				name,
				imageUrl,
			};
			const request = await Api.post("/users/check/auth/social",new URLSearchParams(params));
			const { state, data } = request.data;
			if (state) {
				let token = new TokenGenerate(jwt, TokenKey).__invoke(data);
				localStorage.setItem("Token", token);
				window.location.reload();
			}
		} catch (e) {
			console.log(e);
		}
	};

	const facebookAuthentication = (props) => {
		if(props.status === undefined) {
			socialAuthentication(props.name,props.email,props.name,props.picture.data.url);
		} 
	};

	const googleAuthentication = ({ profileObj }) => {
		if(profileObj) 
			socialAuthentication(profileObj.givenName,profileObj.email,profileObj.name,profileObj.imageUrl);
	};

	return {
		facebookAuthentication,
		googleAuthentication,
	};
};

export default useCustomAuth;
