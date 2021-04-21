import React, { useContext } from "react";
import AvatarCircle from "../../../../components/pages/User/AvatarCircle";
import GlobalButtonUploadFile from "../../../../components/common/GlobalButtonUploadFile";
import { FaUserEdit } from "react-icons/fa";
import ShowUserOnly from "../../../../components/pages/User/ShowUserOnly";
import TitleBold from "../../../../components/common/TitleBold";
import { UserDetailContext } from "../../../../context/UserDetail";
import useImagesLocal from "../../../../hooks/useImagesLocal";

const ProfileUsernameAvatar = (props) => {
	const { image, onChange } = props;
	const { userData } = useContext(UserDetailContext);
	const { emptyImage } = useImagesLocal();
	return (
		<div className="container-profile-avatar">
			<AvatarCircle isFeatured fromLocal sizeImage={180} image={image || emptyImage} />
			<ShowUserOnly
				notIsUsername={
					<TitleBold
						fontSize=".7rem"
						textAlign="center"
						color="orange"
						fontWeight="bold"
					>
						{{
							2 : "PROFESOR"
						}[userData.idTypeUser]}
					</TitleBold>
				}
			>
				<div className="avatar-upload">
					<GlobalButtonUploadFile
						icon={<FaUserEdit size={20} />}
						onChange={onChange}
						accept="image/*"
					/>
				</div>
			</ShowUserOnly>
		</div>
	);
};

export default ProfileUsernameAvatar;
