import React, { createContext, useState, FC, useEffect } from "react";

//Parent Context
import { ICourse } from "../../application/metadata/interfaces/Course";
import CourseRepository from "application/requests/CourseRepostitory";

interface IContext {
	filteredCourses : ICourse[],
	isLoading : boolean,
}

//Context
const FilterHomeBarContext = createContext<Partial<IContext>>({});
const FilterHomeBarProvider : FC = ({ children }) => {
	//States
	const [ filteredCourses , setFilterCourses ] = useState<ICourse[]>([]);
	const [ isLoading , setIsLoading ] = useState<boolean>(true);

	const __GetCourses = async () => {
		const courseRepo = new CourseRepository();
		const data = await courseRepo.GetLastAdded();

		if(data.length){
			setFilterCourses(() => data);
			setIsLoading(() => false);
		}
	}

	useEffect(() => {
		__GetCourses();
	},[]);

	return <FilterHomeBarContext.Provider value={{
		isLoading,
		filteredCourses
	}}>
		{children}
	</FilterHomeBarContext.Provider>
}

export {
	FilterHomeBarContext,
	FilterHomeBarProvider
}