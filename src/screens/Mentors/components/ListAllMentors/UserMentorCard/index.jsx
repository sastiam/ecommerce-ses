import React, { memo, useCallback } from "react";
import { useNavigate } from '@reach/router'
import { ContainerAvatarUser, MentorCardContainer, AvatarImage, ContainerInformation, Username, Work, Description, ContainerContactUs, ContentUser, ContainerImage, ButtonSendToEmail } from "./styles";

const UserMentorCard = ({ image, username, career, hrefEmail , detail, to = "/" }) => {
	const navigate = useNavigate();
	const RedirectMentorProfile = useCallback(() => navigate(to),[to,navigate]);

	return <MentorCardContainer>
		<ContainerImage>
			<ContainerAvatarUser>
				<AvatarImage src={image} />
			</ContainerAvatarUser>			
		</ContainerImage>
		<ContainerInformation>
			<ContentUser>
				<Username onClick={RedirectMentorProfile} >{username}</Username>
				<Work>{career}</Work>				
			</ContentUser>
			<Description>{detail}</Description>
		</ContainerInformation>
		<ContainerContactUs>
			<ButtonSendToEmail href={hrefEmail} >Enviar Correo</ButtonSendToEmail>
		</ContainerContactUs>
	</MentorCardContainer>
};

UserMentorCard.defaultProps = {
	sizeImage: 180,
};

export default memo(UserMentorCard);
