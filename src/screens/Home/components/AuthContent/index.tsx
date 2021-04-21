import React, { useContext, useEffect } from 'react';

import GreetBannerCard from 'screens/Home/components/AuthContent/GreetBannerCard';
import AsideContent from '../AsideContent';
import MostPopular from './MostPopular';
import { AuthContext } from 'context/Auth';
import getRecomendations from 'redux/UserInterface/actions/getRecomendations';
import getLastCourse from 'redux/UserInterface/actions/getLastCourse';
import { useDispatch } from 'react-redux';

const AuthContent = () => {
	const { userAuthInformation } = useContext(AuthContext);
	const dispatch = useDispatch();

	useEffect(() => {
		const userId = userAuthInformation?.idUser;
		dispatch(getRecomendations(userId!));
		dispatch(getLastCourse(userId!));
	},[]);

	return <>
		<GreetBannerCard /> 	
		<MostPopular />
	</>
}

export default AuthContent;