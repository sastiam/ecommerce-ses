import React, { FC, useCallback, memo } from "react";
import { useNavigate } from "@reach/router";
import { Header } from "./styles";

//Components
import HeaderContainer from "./HeaderContainer"
import ImageContainer from "./ImageContainer";

//Types
import { FileURL } from "../../../../../../application/metadata/types";

interface IProps {
	id : number,
	author : string,
	sourceImage : FileURL,
	title : string,
	simple : boolean,
	onClickImage() : void
}

const CardHeader : FC<IProps> = ({ id , author, sourceImage, title , simple , onClickImage }) => {

	//Hooks
	const navigate = useNavigate();

	//Actions
	const onClickTitle = useCallback(() => !simple && navigate(`/course/${id}`),[simple]);

	return <Header>
		<ImageContainer simple={simple} sourceImage={sourceImage} onClick={onClickImage} />
		<HeaderContainer simple={simple} title={title} author={author} onClick={onClickTitle} />
	</Header>
}

export default memo(CardHeader);