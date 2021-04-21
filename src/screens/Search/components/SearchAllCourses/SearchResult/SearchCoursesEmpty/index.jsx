import React from 'react'
import MessageEmptyResult from 'components/pages/Courses/MessageEmptyResult'

const SearchCoursesEmpty = () => {
	return (
		<div className="container-message-empty-course">
			<MessageEmptyResult
				title="Ups!"
				message="No existen cursos para esta categoría, puedes explorar mas en los cursos generales"
				textLink="Ver cursos generales"
				link="/search"
			/>
		</div>
	)
}

export default SearchCoursesEmpty
