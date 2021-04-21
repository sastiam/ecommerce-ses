import React, { memo } from "react";
import "./index.scss";

//Components
import UserMentorCard from "./UserMentorCard";

//Styles
import GlobalDiv from "components/common/GlobalDiv";
import GlobalTitle from "components/common/GlobalTitle";
import useImagesLocal from "hooks/useImagesLocal";
import { IMentor } from "application/metadata/interfaces/User";

const ListAllMentors = ({data}:{data : IMentor[]}) => {
	const { emptyImage } = useImagesLocal();
	return (
		<GlobalDiv className="container-mentors" sizeWidth="75%" paddingBottom="6em" center>
			<GlobalTitle text="Mentores" fontSize=".6rem" paddingHorizontal="0" align="flex-start" autoWidth />
			<div className="grid-all-mentors">
				{
					data.map((v, i) => {
						const { work , description } = v.personalInformation;

						return <UserMentorCard
							key={i}
							image={v.profileImage ? v.profileImage : emptyImage}
							username={v.fullName ? v.fullName : v.username}
							career={work}
							detail={description?.substr(0,80) + "..."}
							hrefEmail={`mailto:${v.email}`}
							to={`users/${v.idUser}`}
						/>
					})
				}
			</div>					
		</GlobalDiv>
	);
};

ListAllMentors.defaultProps = {
	data : []
}

export default memo(ListAllMentors);
