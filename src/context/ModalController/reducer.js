const ACTIONS = {
	U_SEARCH_MODAL : 'update-modal',
	U_SHOPPING_CART_MODAL : 'update-shopping-cart-modal',
	U_COURSE_MODAL : 'update-course-modal',
	U_PREVIEW_SHOPPING_CART_MODAL : 'update-preview-shopping-cart-modal',
	U_LOGIN_REGISTER_MODAL : 'update-login-register-modal',
	U_DROPDOWN_NAVIGATION_BAR : 'update-dropdown-navigation-bar',
	U_PUNTUACTION_COURSE_MODAL : 'update-punctuaction-course-modal',
	U_SLIDE_MENU : 'update-slide-menu',
	U_PREVIEW_COURSE : 'update-preview-course',
	U_GLOBAL_STATES : 'update-global-state'
}

const reducer = (state, action) => {
	switch(action.type) {
		case ACTIONS.U_SEARCH_MODAL:
			return {
				...state,
				searchModal : action.payload
			}
		case ACTIONS.U_SHOPPING_CART_MODAL:
			return {
				...state,
				shoppingCartModal : action.payload
			}
		case ACTIONS.U_COURSE_MODAL:
			return {
				...state,
				courseModal : action.payload
			}
		case ACTIONS.U_PREVIEW_SHOPPING_CART_MODAL:
			return {
				...state,
				previewShoppingCartModal : action.payload
			}
		case ACTIONS.U_LOGIN_REGISTER_MODAL:
			return {
				...state,
				loginRegisterModal : action.payload
			}
		case ACTIONS.U_DROPDOWN_NAVIGATION_BAR:
			return {
				...state,
				dropdownNavigationBar : action.payload
			}
		case ACTIONS.U_PUNTUACTION_COURSE_MODAL:
			return {
				...state,
				puntuactionCourseModal : action.payload
			}
		case ACTIONS.U_SLIDE_MENU:
			return {
				...state,
				slideMenu : action.payload
			}
		case ACTIONS.U_PREVIEW_COURSE:
			return {
				...state,
				previewCourse : action.payload
			}
		case ACTIONS.U_GLOBAL_STATES:
			return {
				...state,
				...action
			}
		default:
			return state;	
	}
}

export {
	reducer,
	ACTIONS
}