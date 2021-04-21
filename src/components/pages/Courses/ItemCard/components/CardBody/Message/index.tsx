import React, { FC } from 'react';
import { BsCheckCircle , BsBook } from 'react-icons/bs';
import { IconFree, MessageFree, IconObtains, MessageObtains , MessageMentor , IconMentor } from './styles';

const MessageCourseFree : FC = () => {
	return <>
		<IconFree>
			<BsCheckCircle />
		</IconFree>
		<MessageFree>Curso Gratuito</MessageFree>
	</>
}

const MessageCourseObtains : FC = () => (
	<>
		<IconObtains>
			<BsCheckCircle />
		</IconObtains>
		<MessageObtains>Curso Comprado</MessageObtains>
	</>
);

const MessageCourseMentor : FC = () => (
	<>
		<IconMentor>
			<BsBook />
		</IconMentor>
		<MessageMentor>Eres Profesor</MessageMentor>
	</>
)

const Message = {
	Free : () => <MessageCourseFree />,
	Obtains : () => <MessageCourseObtains />,
	Mentor : () => <MessageCourseMentor />
}

export default Message;