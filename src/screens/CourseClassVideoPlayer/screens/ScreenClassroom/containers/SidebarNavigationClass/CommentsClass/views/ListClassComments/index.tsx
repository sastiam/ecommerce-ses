import useImagesLocal from "hooks/useImagesLocal";
import React from "react";
import useFetchInitialComments from "screens/CourseClassVideoPlayer/hooks/useFetchInitialComments";
import SpinnerLoading from "screens/CourseClassVideoPlayer/shared/components/SpinnerLoading";
import UserCommentWithReactions from "./UserCommentWithReactions";

const ListClassComents = () => {
	const { emptyImage } = useImagesLocal();
	const { comments, loading } = useFetchInitialComments();

	if(loading) return <SpinnerLoading />;
	return (
		<div>
			{comments.map((comment, commentId) => (
				<UserCommentWithReactions
					key={commentId}
					commentId={comment.idClassComment}
					dateCreated={comment.dateCreate}
					textComment={comment.textContent}
					user={{
						avatar: comment.profileImage || emptyImage,
						idUser: comment.idUser,
						name: comment.fullName,
					}}
					reactions={[
						{
							totalReactions : comment.like,
							isReaction : comment.isReactions.like,
							reaction : "like",
							typeReaction: "up"
						},
						{
							totalReactions : comment.dislike,
							isReaction : comment.isReactions.dislike,
							reaction : "dislike",
							typeReaction: "down"
						}
					]}
				/>
			))}
		</div>
	);
};

export default ListClassComents;
