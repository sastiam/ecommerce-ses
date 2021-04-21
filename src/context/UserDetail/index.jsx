import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "../Auth";
import UserAccountRepository from "application/requests/UserAccountRepository";
import UserImageRepository from "application/requests/UserImagesRepository";
import UserRepository from "application/requests/UserRepository";

const userAccount = new UserAccountRepository();
const userImage = new UserImageRepository();
const user = new UserRepository();

const UserDetailContext = createContext();
const UserDetailProvider = (props) => {
	const { children, idUsername } = props;

	// datos personales del usuario logueado
	const { userAuthInformation, setUserAuthInformation } = useContext(AuthContext);

	// datos basicos de información personal
	const [imageBackdrop, setImageBackdrop] = useState("");
	const [imageProfile, setImageProfile] = useState("");
	const [userData, setUserData] = useState({});
	const [personalCoursesInformation, setPersonalCoursesInformation] = useState([]);
	const [personalInformation, setPersonalInformation] = useState({});
	const [ panelInformation , setPanelInformation ] = useState({});
	const [ loadingAside , setLoadingAside ] = useState(true);
	const [ loadingPanel, setLoadingPanel ] = useState(true);
	const [ loadingCourses, setLoadingCourses ] = useState(true);
	
	const updateImageBackdrop = async (image) => {
		const { idUser } = userAuthInformation;
		const result = await userImage.updateImageBackdrop(idUser,image);
		setImageBackdrop(result);
	};

	const updateImageProfile = async (image) => {
		const { idUser } = userAuthInformation;
		const result = await userImage.updateImageProfile(idUser,image);
		if (result) {
			setImageProfile(result);
			setUserAuthInformation(prevState => ({
				...prevState,
				profileImage : result
			}));
		}
	};

	const getInitialCourses = async () => {
		const courses = await user.getInitialCourses(idUsername);
		setPersonalCoursesInformation(courses);
		setLoadingCourses(false);
	}

	const getInitialPanelInformation = async (idUser , idTypeUser) => {
		const panel = await user.getInitialPanelInformation(idUser,idTypeUser);
		setPanelInformation(panel);
		setLoadingPanel(false);
	}

	const getInitialDataFromUser = async () => {
		const resultUser = await user.getInitialDataFromUser(idUsername);
		if (resultUser === false) {
			window.location.replace("/");
		} 
		else {
			const personal = JSON.parse(resultUser.personalInformation);
			setUserData(resultUser);
			setImageProfile(resultUser.profileImage);
			setImageBackdrop(resultUser.profileBackgroundImage);
			setPersonalInformation(personal);
			getInitialPanelInformation(resultUser.idUser,resultUser.idTypeUser);
			setLoadingAside(false);
		}
	};

	const updatePersonalInformation = async (key,value) => {
		const { idUser } = userAuthInformation;
		setPersonalInformation((prevState) => ({
				...prevState,
				[key]: value,
		}));	
		await userAccount.updatePersonalInformation(idUser,key,value);
	}

	// cargar los datos de usuario
	useEffect(() => {
		// datos del usuario
		getInitialDataFromUser();
		getInitialCourses();
	}, [idUsername]);


	return (
		<UserDetailContext.Provider
			value={{
				userData,
				personalInformation,
				personalCoursesInformation,
				imageBackdrop,
				imageProfile,
				panelInformation,
				updateImageBackdrop,
				updateImageProfile,
				loadingAside,
				loadingPanel,
				loadingCourses,
				updatePersonalInformation
			}}
		>
			{children}
		</UserDetailContext.Provider>
	);
};

export { UserDetailContext, UserDetailProvider };
