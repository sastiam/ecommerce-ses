import MentorRepository from "application/requests/MentorRepository";
import getMentorsComplete from "./getMentorsComplete";
import getMentorsLoading from "./getMentorsLoading";

export default () => async (dispatch) => {
	dispatch(getMentorsLoading());
	try {
		const mentors = await new MentorRepository().getAll();
		dispatch(getMentorsComplete(mentors));
	} catch (error) {
		console.log(error);
	}
};
