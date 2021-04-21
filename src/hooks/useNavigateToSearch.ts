import { navigate } from '@reach/router'

const useNavigateToSearch = (path? : string) => () => {
	const url = path ? 'search/' + path : 'search';
	navigate(url);
	document.documentElement.scrollTop = 0;
}

export default useNavigateToSearch;