import { Router } from '@reach/router'
import React from 'react'
import SearchResultCourses from '../SearchResult/SearchResultCourses'

const SearchRouter = () => {
	return (
		<Router primary={false} >
			<SearchResultCourses path="/" />
			<SearchResultCourses path="/:category" />
		</Router>
	)
}

export default SearchRouter
