import { TReduxState } from "application/metadata/types";
import React, { FC } from "react";
import classnames from 'classnames';
import { useSelector , shallowEqual } from "react-redux";
import { IUserInterfaceStore } from "redux/UserInterface/types";
import "./index.scss";
import ListCategories from "./ListCategories";
import SideBarOption from "./SideBarOption";
import SidebarWrapperHeader from "./SidebarWrapperHeader";

interface IProps {
	small? : boolean;
}

const SidebarMenuCategories : FC<IProps> = ({ small }) => {
	const { courses } = useSelector<TReduxState,IUserInterfaceStore>(s => s.userInterface, shallowEqual);

	return (
		<div className="nav-categories">
			<SidebarWrapperHeader small={small} />
			<ListCategories categories={courses.categories} small={small} />
			<div className={classnames("nav-categories__extra",{ small })}>
				<SideBarOption name="Ver todo" to="/search" bold small={small} />
				<SideBarOption name="Ver gratuitos" to="/search/gratis" bold small={small} />
			</div>
		</div>
	);
};

export default SidebarMenuCategories;
