import { useEffect, useState } from "react"

const useResponsive = (width : number) => {
	const [ responsive , setResponsive ] = useState<boolean>(false);

	useEffect(() => {
		const checkingWidthScreen = () => {
			setResponsive(() => window.innerWidth <= width);
		}

		checkingWidthScreen();
		window.addEventListener('resize', checkingWidthScreen);

		return () => {
			window.removeEventListener('resize', checkingWidthScreen);
		}
	},[]);

	return {
		responsive
	}
}

export default useResponsive;