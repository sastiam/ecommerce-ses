import { AuthContext } from 'context/Auth';
import { useContext } from 'react'


export const useShowByTypeUserLogged = () => {
	const { userAuthInformation: { idTypeUser }, userAuth } = useContext(AuthContext);
	return userAuth ? {
		student: idTypeUser === 1,
		mentor: idTypeUser === 2
	} : {}
}

const ShowByTypeUserLogged = ({ student, mentor }) => {
	const e = useShowByTypeUserLogged();
	if (e.mentor) return student;
	if (e.student) return student;
}

export default ShowByTypeUserLogged
