import { useState } from "react";

const useToggle = (initialState) => {
	const [isToggle, setValue] = useState(initialState);
	const onToggle = () => setValue(!isToggle);
	return {
		isToggle,
		onToggle,
	};
};

export default useToggle;
