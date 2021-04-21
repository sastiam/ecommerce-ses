import { useContext, ChangeEvent } from "react";
import { SearchModalContext } from "context/SearchModalContext";
import { ICourse } from "application/metadata/interfaces/Course";
import CourseRepository from "application/requests/CourseRepostitory";

const useActionSearch = () => {
	const { 
		updateCourse,
		updateSearchMessage,
		courses
	 } = useContext(SearchModalContext);

	const searchCourse = async (ev : ChangeEvent<HTMLInputElement>) => {
		const searchValue : string = String(ev.currentTarget.value);

		if(!searchValue.length){
			updateCourse!(courses!);
			updateSearchMessage!('');
			return;
		}

		const courseRepo = new CourseRepository();
		const data = await courseRepo.SearchByName(searchValue);

		updateCourse!(data);
		updateSearchMessage!(searchValue);
	}

	const searchByCategory = async (category : string) => {
		const courseRepo = new CourseRepository();

		let search : ICourse[];

		if(category !== 'todos'){
			search = await courseRepo.GetAllByCategory(category);
		}else{
			search = await courseRepo.GetAll();
		}

		updateCourse!(search);
		updateSearchMessage!(`Cursos de ${category}`);
	}

	return {
		searchCourse,
		searchByCategory
	}
}

export default useActionSearch;