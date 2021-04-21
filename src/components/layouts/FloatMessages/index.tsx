import React, { memo } from 'react';
import * as S from './styles';

import { useErrorMessagesContext } from 'context/ErrorMessage/context';
import Message from './Message';

const FloatMessages = () => {
	const { queue } = useErrorMessagesContext();

	if(!queue.length) return <></>;

	return <S.Container>
		{
			queue.map(v => <Message id={v.id} message={v.message} />)
		}
	</S.Container>
}

export default memo(FloatMessages);