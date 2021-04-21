import UserRepository from "application/requests/UserRepository";
import { Api } from "application/services";
import { Dispatch } from "redux";
import { getCourseClasses, checkObtainCourse, markAsCompletedClass, moveToNextClassModule } from "./actions";

interface IUserCourseProps {
	userId : number;
	courseId : number;
	classId : number;
}
export const fetchAllCourseClassesOfUser = (props: IUserCourseProps) => async (dispatch : Dispatch) => {
	const path = `class/user&userId=${props.userId}&courseId=${props.courseId}`;
	dispatch(getCourseClasses.loading());
	const { data : { modulesCourse, ...currentCourse } } = await Api.get(path);
	dispatch(
		getCourseClasses.success({
			modulesCourse,
			currentCourse,
			currentClass : {
				idCourseClass : props.classId
			}
		})
		);
	};
	
	
export const fetchToVerifyObtainCourse = (props:{idUser:number,idCourse:number}) => async (dispatch : Dispatch) => {
	dispatch(checkObtainCourse.loading());
	const obtainCourse = await (new UserRepository().IsObtainsCourse(props));
	dispatch(checkObtainCourse.success({
		obtainCourse
	}))
}


export const updateClassCompleteByUser = (props:{idUser:number,idCourseClass:number}) => (dispatch) => {
	const params = {
		idUser : String(props.idUser),
		idCourseClass : String(props.idCourseClass),
	}
	Api.post("class/user/complete",new URLSearchParams(params)).then(() => {
		dispatch(markAsCompletedClass())
		dispatch(moveToNextClassModule())
	});
}