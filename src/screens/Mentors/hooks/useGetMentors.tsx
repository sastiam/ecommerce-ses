import { IMentor } from 'application/metadata/interfaces/User'
import { TReduxState } from 'application/metadata/types'
import { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import getMentors from 'redux/Mentors/actions/getMentors';

const useGetMentors = () => {
	const mentors = useSelector<TReduxState,IMentor[]>(state => state.mentors.mentors,shallowEqual);
	const loading = useSelector<TReduxState,boolean>(state => state.mentors.loading,shallowEqual);

	const dispatch = useDispatch();
	const fetchMentors = useCallback(() => dispatch(getMentors()),[dispatch]);

	useEffect(() => {
		fetchMentors();
	},[fetchMentors])
	
	return {
		mentors,
		loading,
	}
}

export default useGetMentors
