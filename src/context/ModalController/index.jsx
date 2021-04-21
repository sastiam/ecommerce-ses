import React , { createContext , useEffect, useContext } from "react";
import { AuthContext } from "../Auth";
import { useReducer } from "react";

//Reducer
import { reducer, ACTIONS } from "./reducer";
import store from "./store";

const ModalControllerContext = createContext();
const ModalControllerProvider = props => {
	//Props
	const { children } = props;

	//Context
	const { userAuth } = useContext(AuthContext);

	//States
	const [ state , dispatch ] = useReducer(reducer,store);

	/**Actions**/
	const setters = {
		updateStateSearchModal : payload => dispatch({ type : ACTIONS.U_SEARCH_MODAL , payload }),
		updateStateCourseModal : payload => dispatch({ type : ACTIONS.U_COURSE_MODAL , payload }),
		updateStateShoppingCartModal : payload => dispatch({ type : ACTIONS.U_SHOPPING_CART_MODAL , payload }),
		updateStateLoginRegisterModal : payload => dispatch({ type : ACTIONS.U_LOGIN_REGISTER_MODAL , payload }),
		updateStatePreviewShoppingCartModal : payload => dispatch({ type : ACTIONS.U_PREVIEW_SHOPPING_CART_MODAL , payload }),
		updateStateDropdownNavigationBar : payload => dispatch({ type : ACTIONS.U_DROPDOWN_NAVIGATION_BAR , payload }),
		updateStatePunctuationModalCourseDetail : payload => dispatch({ type : ACTIONS.U_PUNTUACTION_COURSE_MODAL , payload }),
		updateStateSlideMenu : payload => dispatch({ type : ACTIONS.U_SLIDE_MENU , payload }),
		updatePreviewCourse : payload => dispatch({ type : ACTIONS.U_PREVIEW_COURSE , payload })
	}

	const { 
		searchModal,
		shoppingCartModal,
		courseModal,
		previewShoppingCartModal,
		loginRegisterModal,
		dropdownNavigationBar,
		puntuactionCourseModal,
		slideMenu,
		previewCourse
	} = state;
	
	/**Effects**/

	// - Efecto al actualizar el estado del modal de busqueda
	useEffect(() => {
		if(searchModal){
			dispatch({
				type : ACTIONS.U_GLOBAL_STATES,
				payload : {
					courseModal : false,
					shoppingCartModal : false
				}
			});
			document.body.style.overflow = "hidden";
		}
		else
			document.body.style.overflow = "auto";
	},[searchModal])

	// - Efecto al actualizar el estado del modal del carro de compras
	useEffect(() => {
		if(shoppingCartModal){
			dispatch({
				type : ACTIONS.U_GLOBAL_STATES,
				payload : {
					searchModal : false,
					courseModal : false,
					dropdownNavigationBar : false
				}
			})
		}
	},[shoppingCartModal])

	// - Efecto al actualizar el estado del modal de cursos
	useEffect(() => {
		if(courseModal){
			dispatch({
				type : ACTIONS.U_GLOBAL_STATES,
				payload : {
					shoppingCartModal : false,
					searchModal : false,
					dropdownNavigationBar : false
				}
			});
		}
	},[courseModal])

	// - Efecto al actualizar el estado del modal de usuario
	useEffect(() => {
		if(dropdownNavigationBar){
			dispatch({
				type : ACTIONS.U_GLOBAL_STATES,
				searchModal : false,
				courseModal : false,
				shoppingCartModal : false
			});
		}
	},[dropdownNavigationBar])

	// - Efecto al hacer login
	useEffect(() => {
		dispatch({
			type : ACTIONS.U_GLOBAL_STATES,
			payload : {
				loginRegisterModal : false,
				dropdownNavigationBar : false
			}
		});
	},[userAuth])

	// - Efecto al actualizar el estado del preview de un curso
	useEffect(() => {
		if(previewCourse.modalActive || loginRegisterModal || previewShoppingCartModal || slideMenu || puntuactionCourseModal){
			dispatch({
				type : ACTIONS.U_GLOBAL_STATES,
				payload : {
					searchModal : false,
					courseModal : false,
					shoppingCartModal : false
				}
			});
			document.body.style.overflow = "hidden";
		}else{
			document.body.style.overflow = "auto";
		}
	},[previewCourse.modalActive , loginRegisterModal, previewShoppingCartModal , slideMenu, puntuactionCourseModal])

	return <ModalControllerContext.Provider value={{ ...state, ...setters }}>
		{ children }
	</ModalControllerContext.Provider>
}

export {
	ModalControllerContext,
	ModalControllerProvider
}