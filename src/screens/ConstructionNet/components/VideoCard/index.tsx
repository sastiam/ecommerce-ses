import React, { FC, memo } from "react";
import { useNavigate , Link } from "@reach/router";
import * as Styled from "./styles";
import { FileURL } from "application/metadata/types";

interface IProps {
	id : number,
	imagePreview : FileURL, 
	title : string,
	createDate : string
}

const intlOptions : Intl.DateTimeFormatOptions = {
	year : 'numeric',
	month : 'numeric',
	day : 'numeric'
}

const VideoCard : FC<IProps> = ({ id , imagePreview , title , createDate }) => {
	const navigate = useNavigate();
	const onClick = () => navigate(`/red/${id}`);
	const date = Intl.DateTimeFormat('es-ES', intlOptions).format(new Date(createDate));

	return <Styled.Container>
		<Styled.MainContent>
			<Styled.ImageContainer>
				<Styled.Image onClick={onClick} src={imagePreview} />
			</Styled.ImageContainer>
			<Styled.Information>
				<Styled.Title>{title}</Styled.Title>
				<Styled.DatePublished>Publicado el {date}</Styled.DatePublished>
			</Styled.Information>
		</Styled.MainContent>
		<Styled.BottomContent>
			<Styled.ButtonNavigate as={Link} to={`/red/${id}`} >Ver Video</Styled.ButtonNavigate>
		</Styled.BottomContent>
	</Styled.Container>
}

export default memo(VideoCard);