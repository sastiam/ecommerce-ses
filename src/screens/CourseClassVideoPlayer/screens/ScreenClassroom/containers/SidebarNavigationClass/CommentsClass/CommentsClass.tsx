import React from "react";
import LoadableComponent from "components/common/LoadableComponent";

export default function CommentsClass() {
	return (
		<div style={{ padding: "20px 20px" }}>
			<LoadableComponent module={()=>import("./views/CreateNewCommentInClasses")} fallback={null}  />
			<LoadableComponent module={()=>import("./views/ListClassComments")} fallback={null}  />
		</div>
	);
}
