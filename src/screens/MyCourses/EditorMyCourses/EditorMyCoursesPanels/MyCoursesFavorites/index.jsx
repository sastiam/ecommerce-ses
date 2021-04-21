import React, { useContext } from "react";
import "./index.scss";
import MessageEmptyResult from "../../../../../components/pages/Courses/MessageEmptyResult";
import PanelEditorDescriptive from "../../../../../components/layouts/PanelTabsMainEditor/PanelEditorDescriptive";
import { PanelEditorMyCoursesContext } from "../../../../../context/PanelEditorMyCourses";
import FavoriteCardsContainer from "./FavoriteCardsContainer";

const MyCoursesFavorites = () => {
	const { favoritesCourses } = useContext(PanelEditorMyCoursesContext);
	return (
		<PanelEditorDescriptive title="Mis cursos favoritos">
			<div className="total-favorites">
				{favoritesCourses.length} cursos favoritos
			</div>
				{favoritesCourses.length !== 0 ? (
					<FavoriteCardsContainer data={favoritesCourses} />
				) : (
					<MessageEmptyResult
						title="¡Ups!"
						message="Aun no posee algun curso en tu lista de favoritos"
						textLink="Ver cursos disponibles"
						link="/search"
					/>
				)}
		</PanelEditorDescriptive>
	);
};

export default MyCoursesFavorites;
