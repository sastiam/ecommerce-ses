import React, { useContext , memo } from "react";
import "./index.scss";
import GlobalButton from "../../../../../../components/common/GlobalButton";
import GlobalDiv from "../../../../../../components/common/GlobalDiv";
import { AuthContext } from "../../../../../../context/Auth";
import useImagesLocal from "../../../../../../hooks/useImagesLocal";
import useUserCommentArea from "screens/CourseDetail/hooks/useUserCommentArea";

const UserCommentArea = () => {
	//Custom Hooks
	const { emptyImage } = useImagesLocal();

	//Context
	const { userAuthInformation : { profileImage } } = useContext(AuthContext);
	const { CreateNewComment , InputChangeValue , inputValue } = useUserCommentArea();
	
	return <GlobalDiv paddingBottom="2.5em">
		<form onSubmit={CreateNewComment} className="user-area">
			<div className="image">
				<img className="user-img" src={profileImage ? profileImage : emptyImage} alt="user"/>
			</div>
			<div className="input">
				<input 
					type="text"
					onChange={InputChangeValue}
					value={inputValue}
					className="text-input"
					placeholder="Escribe un comentario"
				/>
			</div>
			<div>
				<GlobalButton paddingVertical=".4em" sizeWidth="100px" fontSize="14px">
					Publicar
				</GlobalButton>
			</div>
		</form>		
	</GlobalDiv>
}

export default memo(UserCommentArea);