import React, { memo } from "react";
import * as S from "./index.styles"
import { IoMdClose } from "react-icons/io"
type UserCommentProps = {
	user : {
		idUser : number;
		avatar : string;
		name : string;
	},
	commentId : number;
	textComment : string;
	daysAgo : string;
	acceptDelete ?: boolean; 
	onDelete ?: () => void;
	renderReactionsChildren ?: () => React.ReactNode
}
function UserComment({ user, daysAgo, acceptDelete, textComment, onDelete, renderReactionsChildren} : UserCommentProps) {

	return (
		<S.Wrapper>
			<S.UserDetail>
				<img className="user-comment-class__avatar" src={user.avatar} alt="" />
				<div className="user-comment-class__detail">
				<span className="user-comment-class__name">{user.name}</span>
				<span className="user-comment-class__date">{daysAgo}</span>
				</div>
				{acceptDelete && ( <div className="user-comments-class__delete" onClick={onDelete}> <IoMdClose/> </div>)}
			</S.UserDetail>
			<S.TextComment>
				{textComment}
			</S.TextComment>
			<S.Reactions>
				{renderReactionsChildren && renderReactionsChildren()}
			</S.Reactions>
		</S.Wrapper>
	);
}

export default memo(UserComment);