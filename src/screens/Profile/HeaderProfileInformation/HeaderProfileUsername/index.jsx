import React, { useContext } from "react";
import "./index.scss";
import { UserDetailContext } from "../../../../context/UserDetail";
import ProfileUsernameAvatar from "./ProfileUsernameAvatar";
import ProfileUsernameInformation from "./ProfileUsernameInformation";

const HeaderProfileUsername = () => {
	const { imageBackdrop, imageProfile , updateImageProfile } = useContext(UserDetailContext);
	const uploadImage = (event) => updateImageProfile(event.target.files[0]);

	return (
		<div className="user-detail flex">
			<div className="user-row">
				<ProfileUsernameAvatar accept="image/*" image={imageProfile} onChange={uploadImage} />
			</div>
			<div className="user-row">
				<ProfileUsernameInformation imageBackdrop={imageBackdrop} />
			</div>
		</div>
	);
};

export default HeaderProfileUsername;
