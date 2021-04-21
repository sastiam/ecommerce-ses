import { Api } from "application/services";
import useParameters from "hooks/useParameters";
import useAuth from "./useAuth";

export default function useLastTimeEntered() {
	const { userAuthInformation } = useAuth();
	const { id } = useParameters();
	const lastTimeEnteredToClassroom = async () => {
		try {
			const params = {
				idUser : String(userAuthInformation?.idUser),
				idCourse: String(id),
			};
			await Api.post("users/course/class/entered", new URLSearchParams(params));
		} catch (e) {
			console.log(e);
		}
	};
	return lastTimeEnteredToClassroom;
}
