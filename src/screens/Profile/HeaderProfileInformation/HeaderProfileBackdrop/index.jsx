import React, { useContext } from "react";
import "./index.scss";
import { FaRegImage } from "react-icons/fa";
import { UserDetailContext } from "../../../../context/UserDetail";
import GlobalButtonUploadFile from "../../../../components/common/GlobalButtonUploadFile";
import ShowUserOnly from "../../../../components/pages/User/ShowUserOnly";

const HeaderProfileBackdrop = () => {
	const { imageBackdrop, updateImageBackdrop } = useContext(UserDetailContext);

	//cambiar la imagen de fondo (bakckdrop)
	const image = {
		backgroundImage: `url('${imageBackdrop}')`,
	};

	// subir imagen desde dispositivo
	const uploadImage = (event) => updateImageBackdrop(event.target.files[0]);

	return (
		<div className="image-backdrop" style={image}>
			<ShowUserOnly>
				<div className="upload-image-container">
					<GlobalButtonUploadFile
						title="Cambiar imagen de fondo"
						accept="image/*"
						onChange={uploadImage}
						icon={<FaRegImage size={20} />}
					/>
				</div>
			</ShowUserOnly>
		</div>
	);
};

export default HeaderProfileBackdrop;
