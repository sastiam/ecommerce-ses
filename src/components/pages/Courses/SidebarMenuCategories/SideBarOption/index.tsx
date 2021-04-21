import React, { FC, memo } from 'react';
import './index.scss';
import classnames from 'classnames';
import { Link } from '@reach/router';

interface IProps {
	name : string;
	to : string;
	small? : boolean;
	bold? : boolean;
}

const SideBarOption : FC<IProps> = ({ small, to , name , bold }) => (
	<Link
		to={to}
		getProps={({ isCurrent }) => ({
			className : classnames(
				"side-bar-menu-option",
				{ 
					selected : isCurrent,
					small,
					weight : bold
				}
			)
		})}
	>
		{name}
	</Link>
);

export default memo(SideBarOption);