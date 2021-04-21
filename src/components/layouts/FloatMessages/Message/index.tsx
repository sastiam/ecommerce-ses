import React, { FC, useEffect, useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import classnames from 'classnames';
import * as S from './styles';

import useTimeout from 'hooks/useTimeout';
import { useErrorMessagesContext } from 'context/ErrorMessage/context';

type TProps = {
	id : number;
	message : string;
}

const Message : FC<TProps> = ({ message, id }) => {
	const timeout = useTimeout();
	const { remove } = useErrorMessagesContext();
	const [ deleteOn , setDeleteOn ] = useState<boolean>(false);

	const startDelete = async () => {
		await timeout(3000);
		setDeleteOn(() => true);
		await timeout(3000);
		remove(id);
	}

	useEffect(() => {
		startDelete();
	},[])
	
	return <S.Container
		className={classnames({ animated : !deleteOn , deleted : deleteOn })}
	>
		<S.Icon><FaRegTimesCircle /></S.Icon>
		<S.Text>{message}</S.Text>
	</S.Container>
}

export default Message;