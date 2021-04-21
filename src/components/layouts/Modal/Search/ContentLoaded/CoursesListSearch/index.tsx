import React, { useContext, memo } from "react";
import { ContainerSearchCourse, Title, ContainerTitle } from "./styles";

//Parent Context
import { SearchModalContext } from "context/SearchModalContext";

//Components
import CoursesTotalResult from "./TotalResult";
import EmptyMessage from './EmptyMessage';
import CoursesFilter from "./CoursesFilter";

const CoursesListSearch = () => {
	//Parent Context
	const {
		coursesFiltered,
		searchMessage
	} = useContext(SearchModalContext);
	
	//Config
	return <ContainerSearchCourse>
		{
			!coursesFiltered?.length ? 
				<EmptyMessage.NoResults text={searchMessage!} /> :
				<>
					<ContainerTitle>
						<Title className="subtitle">
							<CoursesTotalResult total={coursesFiltered!.length} />
						</Title>
					</ContainerTitle>
					<CoursesFilter courses={coursesFiltered!} />
				</>
		}
	</ContainerSearchCourse>
};

export default memo(CoursesListSearch);
