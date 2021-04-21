import { AuthContext } from "context/Auth";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import getCertificate from "redux/CourseDetail/actions/getCertificate";
import setCertificateLoading from "redux/CourseDetail/actions/setCertificateLoading";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const useGetCertificate = (isApprovedCourse : boolean) => {
	const { userAuthInformation } = useContext(AuthContext);
	const { course : { data : { id } , certificate : { value , state } } } = useCourseDetailRedux();
	const dispatch = useDispatch();

	useEffect(() => {
		if(state !== "obtains"){
			if(!isApprovedCourse){
				dispatch(setCertificateLoading('not-loading'));
				return;
			}
				
			dispatch(getCertificate(id, userAuthInformation?.idUser!));
		}
	},[isApprovedCourse]);

	return {
		certificate : value,
		state
	}
}

export default useGetCertificate;