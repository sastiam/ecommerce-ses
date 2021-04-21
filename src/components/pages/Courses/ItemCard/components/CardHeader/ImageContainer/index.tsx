import React, { memo, FC, SyntheticEvent } from "react";
import { IoMdEye } from "react-icons/io";
import { CourseImageContainer, CourseImage , HideContainerMessageImage, IconHideLayout , TextHideLayout } from "./styles";
import { FileURL } from "../../../../../../../application/metadata/types";

interface IProps {
	sourceImage : FileURL,
	simple : boolean,
	onClick() : void
}

const ImageContainer : FC<IProps> = ({ sourceImage, onClick, simple }) => {
	return <CourseImageContainer simple={simple}>
		<CourseImage
			src={sourceImage}
			alt="course-logo"
		/>
		<HideContainerMessageImage onClick={onClick}>
			<IconHideLayout>
				<IoMdEye />
			</IconHideLayout>
			<TextHideLayout>
				<span>Vista Previa</span>
			</TextHideLayout>
		</HideContainerMessageImage>
	</CourseImageContainer>
}

export default memo(ImageContainer);