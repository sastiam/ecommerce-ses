import React from 'react';
import { Link } from '@reach/router';
import * as S from './styles';

import LogColor from "images/LogColor.png";

const Enterprise = () => (
	<Link to="/">
		<S.ImageTitle src={LogColor} alt=""/>
	</Link>
)

export default Enterprise;