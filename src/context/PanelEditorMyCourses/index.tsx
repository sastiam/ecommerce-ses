import React, { useContext, createContext, useState, useEffect } from "react";

// Parent Context
import { Api } from "../../application/services";
import { AuthContext } from "../Auth";
import { Types } from "./types";

const PanelEditorMyCoursesContext = createContext<Types.IPanelEditorCoursesContext>({});
const PanelEditorMyCoursesProvider : React.FC<Types.IPanelEditorCoursesProvider> = (props) => {
	const { children } = props;
	const {	userAuthInformation } = useContext(AuthContext);
	const [filterCourses, setFilterCourse] = useState<Types.IFilterCourses>([]);
	const [typeFilter, setTypeFilter] = useState<string>("");

	const [personalCourses, setPersonalCourses] = useState<Types.IUserCourses>([]);
	const [favoritesCourses, setFavoritesCourses] = useState<Types.ICoursesFavorites>([]);
	const [personalMentors, setPersonalMentors] = useState<Types.IUserMentors>([]);
	const [loading , setLoading ] = useState(false);

	const selectFilter = (type : string) => setTypeFilter(type);

	const { idUser } = userAuthInformation!;

	const getInitialDataPersonal = async () => {
		setLoading(true);
		const personalPaths = [
			"/users/courses",
			"/users/mentors",
			"/users/courses/favorites",
		].map((e) => e + `&userId=${idUser}`);

		const promiseAll = await Promise.all(personalPaths.map((e) => Api.get(e)));
		const [courses, mentors , favorites ] = promiseAll;

		setLoading(false);
		setPersonalCourses(courses.data);
		setPersonalMentors(mentors.data);
		setFavoritesCourses(favorites.data.resource);
	};

	// cargar datos iniciales
	useEffect(() => {
			getInitialDataPersonal();
	}, []);

	useEffect(() => {
		setFilterCourse((e) => e);
	}, [typeFilter]);

	return (
		<PanelEditorMyCoursesContext.Provider
			value={{
				loading,
				filterCourses,
				typeFilter,
				personalCourses,
				personalMentors,
				favoritesCourses,
				selectFilter,
			}}
		>
			{children}
		</PanelEditorMyCoursesContext.Provider>
	);
};

export { PanelEditorMyCoursesContext, PanelEditorMyCoursesProvider };
