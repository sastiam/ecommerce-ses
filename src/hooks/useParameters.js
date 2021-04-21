import { useParams } from "@reach/router";

const useParameters = () => {
	const parameters = useParams();
	return {
		...parameters,
	};
};

export default useParameters;
