import React, { useContext } from "react";
import * as Styled from './styles';
import classnames from "classnames";

import { ModalControllerContext } from "context/ModalController";

import IconClose from "./IconClose";
import Modal from "components/layouts/Modal";
import ContentPunctuation from "./ContentPunctuation";

const Puntuaction = () => {
	const { puntuactionCourseModal , updateStatePunctuationModalCourseDetail } = useContext(ModalControllerContext);
	const front_class = classnames({ hide : !puntuactionCourseModal });
	const onClick = () => updateStatePunctuationModalCourseDetail(false);

	return <Modal.Portals>
		<Styled.Container className={front_class}>
			<ContentPunctuation />
			<IconClose onClick={onClick} />
		</Styled.Container>
	</Modal.Portals>
}

export default Puntuaction;