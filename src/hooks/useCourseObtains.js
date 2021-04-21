import { useCallback, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Api } from "../application/services";

const useCourseObtains = id => {
	const { userAuth , userAuthInformation } = useContext(AuthContext);

	const __invoke = useCallback(async () => {
		if(userAuth){
			const { idUser } = userAuthInformation;

			try{
				const requestData = {
					idUser,
					idCourse : id
				}

				const request = await Api.post('courses/detail/obtains', new URLSearchParams(requestData));
				console.log(request.data);
			}catch(e){
				console.log(e);
			}				
		}
	},[userAuth]);

	return __invoke;
}

export default useCourseObtains;