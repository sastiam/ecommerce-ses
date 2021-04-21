import { useEffect, useState } from "react";
import { navigate } from "@reach/router";

import useParameters from "hooks/useParameters";

import { IConstructionNet } from "application/metadata/interfaces/Tutorial";
import ConstructionNetRepository from "application/requests/ConstructionNetRepository";

const initialState : IConstructionNet = {
	idTutorial : 0,
	idTutorialCategory : 0,
	title : '',
	videoFile : '',
	imagePreview : '',
	createDate : '',
	description : '',
	category : '',
}

const useInitPage = () => {
	const { id } = useParameters();
	const [ post , setPost ] = useState<IConstructionNet>(initialState);
	const [ isLoading , setIsLoading ] = useState<boolean>(true);

	const GetPost = async () => {
		const tutorial = await new ConstructionNetRepository().getById(id);

		if(!tutorial){
			await navigate('/red');
			return;
		}

		setPost(() => tutorial);
		setIsLoading(() => false);
	}

	useEffect(() => {
		GetPost();
	},[]);

	return {
		post,
		isLoading
	}
}

export default useInitPage;