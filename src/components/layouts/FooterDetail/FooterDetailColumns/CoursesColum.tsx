import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import useNavigateToSearch from 'hooks/useNavigateToSearch';
import { TReduxState } from 'application/metadata/types';
import { IUserInterfaceStore } from 'redux/UserInterface/types';

const CoursesColum = () => {
	const { courses } = useSelector<TReduxState,IUserInterfaceStore>(s => s.userInterface, shallowEqual);
	const filterCourses = courses.categories.filter((v,i) => i < 6);
	const NavigateToSearchFilter = (name : string) => {
		return useNavigateToSearch(name);
	}

	return (
		<div className="col-footer">
			<div className="col-footer__header">Categorías de los cursos</div>
			<div className="col-footer__list-links">
				{filterCourses.map((v,i) => (
					<div className="list-link__item" key={i} onClick={NavigateToSearchFilter(v.name)}>{v.name}</div>
				))}
			</div>
		</div>
	)
}

export default memo(CoursesColum);
