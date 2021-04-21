import { AuthContext } from 'context/Auth'
import { useContext } from 'react'

export default function useAuth() {
	const { loadingAuth , userAuth , userAuthInformation } =  useContext(AuthContext);
	return {
		loadingAuth,
		userAuth,
		userAuthInformation 
	}
}
