import React, { memo } from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import * as Styled from './styles';

import Icon from "../../../Others/Icon";
import useShareLink from "../../../../../../../hooks/useShareLink";
import IconTooltip from "../IconTooltip";
import useCourseActions from "../../../../../hooks/useCourseActions";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const ListIcon = () => {
	const { user : { isFavorite } } = useCourseDetailRedux();
	const { shared, onShare } = useShareLink();
	const { ToggleFavoriteCourse } = useCourseActions();

	return (
		<Styled.Container>
			<Icon
				active={isFavorite}
				text={isFavorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
				onClick={ToggleFavoriteCourse}
				icon={<AiOutlineHeart />} 
			/>
			<Icon text="Compartir" icon={<AiOutlineShareAlt />} onClick={onShare} />
			{shared && <IconTooltip message="Se copió el link, puedes compartirlo" />}
		</Styled.Container>
	);
};

export default memo(ListIcon);
