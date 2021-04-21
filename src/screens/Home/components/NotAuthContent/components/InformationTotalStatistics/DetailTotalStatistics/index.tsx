import React, { memo } from "react";
import * as Styled from './styles';
import ItemTotalStatistic from "./ItemTotalStatistic";

import { useSelector , shallowEqual } from "react-redux";
import { TReduxState } from "application/metadata/types";
import { IUserInterfaceStore } from "redux/UserInterface/types";

const DetailTotalStatistics = () => {
	const {
		stadistics : {
			totalStudents,
			totalCourses,
			totalMentors
		}
	} = useSelector<TReduxState, IUserInterfaceStore>(store => store.userInterface, shallowEqual);
	
	return (
		<Styled.Container>
			<ItemTotalStatistic total={totalStudents} message="Alumnos aprendiendo" />
			<ItemTotalStatistic total={totalMentors} message="Profesores enseñando" />
			<ItemTotalStatistic total={totalCourses} message="Cursos para tí" />
		</Styled.Container>
	);
};

export default memo(DetailTotalStatistics);
