import useImagesLocal from 'hooks/useImagesLocal';
import useParameters from 'hooks/useParameters';
import React from 'react'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import useAuth from 'screens/CourseClassVideoPlayer/hooks/useAuth';
import InputAddComment from 'screens/CourseClassVideoPlayer/shared/components/InputAddComment';
import { useCourseClassroomDispatch } from 'screens/CourseClassVideoPlayer/store';
import { createNewCommentClass } from 'screens/CourseClassVideoPlayer/store/commentClasses/actionCreators';

const CreateNewCommentInClasses =  () =>  {
	const dispatch = useCourseClassroomDispatch() as ThunkDispatch<{},{},AnyAction>;
	const { userAuthInformation } = useAuth();
	const { emptyImage } = useImagesLocal();
	const { id } = useParameters();
	const handlerAddNewComment = (payload) => {
		dispatch(createNewCommentClass({
			idCourse: id,
			textContent : payload.value,
			idUser : userAuthInformation?.idUser || 0
		}))
	};

	return (
		<InputAddComment 
			avatar={userAuthInformation?.profileImage || emptyImage} 
			addComment={handlerAddNewComment} />
	)
}

export default CreateNewCommentInClasses;