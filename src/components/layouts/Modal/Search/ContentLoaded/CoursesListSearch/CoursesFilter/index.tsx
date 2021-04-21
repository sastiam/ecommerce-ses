import React, { memo, FC } from 'react';
import ItemCard from 'components/pages/Courses/ItemCard';
import { ICourse } from 'application/metadata/interfaces/Course';
import { GridResponsive } from './styles';

interface IProps {
	courses : ICourse[]
}

const CoursesFilter : FC<IProps> = ({ courses }) => {
	return <GridResponsive>
		{ courses?.map((v,i) => (
				<ItemCard
					classname="edit"
					key={i}
					courseInformation={v}
					simple
				/>
			)) }
	</GridResponsive>
}

export default memo(CoursesFilter);