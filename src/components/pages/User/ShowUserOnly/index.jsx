import { useContext } from "react";
import { AuthContext } from "../../../../context/Auth";
import useParameters from "../../../../hooks/useParameters";

const ShowUserOnly = ({ isUsername, notIsUsername, children }) => {
	const { username, userAuthInformation } = useContext(AuthContext);
	const { name } = useParameters();
	if(userAuthInformation){
		const { idUser } = userAuthInformation;
		if (username === name || idUser === Number(name)){
			return isUsername || children;
		} 
		else {
			return notIsUsername || null;
		}
	}else{
		return notIsUsername || null;
	}
};

export default ShowUserOnly;
