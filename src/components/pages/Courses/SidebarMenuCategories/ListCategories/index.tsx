import React, { FC, memo } from 'react';
import * as Styled from './styles';
import { ICategory } from 'application/metadata/interfaces/Category';
import SideBarOption from '../SideBarOption';

interface IProps {
	categories : ICategory[],
	small? : boolean;
}

const ListCategories : FC<IProps> = ({ categories , small }) => (
	<Styled.List>
		{
			categories.map((v,i) => (
				<SideBarOption
					key={i}
					to={'/search/' + v.name}
					name={v.name}
					small={small}
				/>
			))
		}
	</Styled.List>
);

export default memo(ListCategories);