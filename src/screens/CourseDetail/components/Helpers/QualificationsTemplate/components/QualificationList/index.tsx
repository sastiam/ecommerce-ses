import React, { FC, memo } from 'react';
import { IQualification } from 'redux/CourseExam/types';
import Qualification from '../Qualification';

interface IProps {
	data : IQualification[]
}

const QualificationList : FC<IProps> = ({ data }) => (
	<div>
		{
			data.map((v,i) => (
				<Qualification
					key={i}
					number={i+1}
					createdAt={v.createdAt}
					value={v.qualification} 
				/>
			))
		}
	</div>
);

export default memo(QualificationList);