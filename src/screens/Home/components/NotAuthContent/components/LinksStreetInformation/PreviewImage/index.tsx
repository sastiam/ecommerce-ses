import React, { FC } from "react";
import * as styled from './styles';
import { FaArrowRight } from "react-icons/fa";
import classNames from "classnames";
import { FileURL } from "application/metadata/types";
import { navigate } from "@reach/router";

interface IProps {
	onlyCard? : boolean;
	textLink : string;
	text : string;
	image : FileURL;
	link : string;
}

const PreviewImage : FC<IProps> = ({ onlyCard, textLink, image, text, link }) => {
	const cardClassName = classNames({ 'only-card' : onlyCard });

	const onClickNavigate = async () => {
		await navigate(link);
	}

	return (
		<styled.StreetCard>
			{ !onlyCard && <styled.StreetImage alt="street-card" src={image} /> }
			<styled.CardContent className={cardClassName}>
				<styled.NormalText>{text}</styled.NormalText>
				<styled.LinkText onClick={onClickNavigate}>
					<styled.LinkTextContent className="content">{textLink}</styled.LinkTextContent>
					<FaArrowRight size={10} />
				</styled.LinkText>
			</styled.CardContent>
		</styled.StreetCard>
	);
};

export default PreviewImage;
