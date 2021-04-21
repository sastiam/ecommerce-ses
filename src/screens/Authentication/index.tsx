import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import * as S from './styles'

import MainLayout from 'components/layouts/MainLayout';
import Navigation from 'components/layouts/Navigation';
import LoginLayout from './LoginLayout';
import RegisterLayout from './RegisterLayout';

type TProps = RouteComponentProps & {
	type : "login" | "register"
}

const Authentication : FC<TProps> = ({ type }) => (
	<MainLayout titlePage="">
		<Navigation.Simple />
		<S.Container>
			<S.Content>
				{ type === "login" ? <LoginLayout /> : <RegisterLayout /> }
			</S.Content>
		</S.Container>
	</MainLayout>
);

export default Authentication;