import React, { FC } from 'react';
import { IoMdClose } from 'react-icons/io';
import useModalTemplateActions from './hooks/useModalTemplateActions';
import * as Styled from './styles';

const ModalTemplate : FC = ({ children }) => {
	const { onClose , ExamModalAnimationActive } = useModalTemplateActions();

	return <Styled.Container>
		<Styled.BoxContent animation={ExamModalAnimationActive} >
			<Styled.DecoratorBar />
			{children}
			<Styled.CloseIcon onClick={onClose} >
				<Styled.Icon>
					<IoMdClose size={24} color="#fff" />
				</Styled.Icon>
			</Styled.CloseIcon>
		</Styled.BoxContent>
	</Styled.Container>
};

export default ModalTemplate;