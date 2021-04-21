import React, { FC, memo } from "react";
import "./index.scss";

//Components
import UserPuntuaction from "../UserPuntuaction";
import { IUserPunctuaction } from "../../../../../../../application/metadata/interfaces/User";

interface IProps {
	usersPuntuaction : IUserPunctuaction[]
}

const ListUserPuntuaction : FC<IProps> = ({ usersPuntuaction }) => {
	if(!usersPuntuaction.length) return <div className="container-list-user-punctuation">
		<p className="text-empty-punctuation">Nadie aún a valorado este curso</p>
	</div>

	return <ul>
		{ usersPuntuaction.map((v,i) => <UserPuntuaction key={i} user={v} />) }
	</ul>
}

export default memo(ListUserPuntuaction);