import Loadable from "react-loadable";

const Loader = (importComponent, loading = null) => {
	return Loadable({
		loader: () => importComponent,
		loading: () => loading
	})
}

export const AsyncHome = Loader(import("screens/Home"));
export const AsyncSearch = Loader(import("screens/Search"));
export const AsyncConstructionNet = Loader(import("screens/ConstructionNet"));
export const AsyncConstructionNetVideo = Loader(import("screens/ConstructionNetVideo"));
export const AsyncMentors = Loader(import("screens/Mentors"));
export const AsyncShoppingCart = Loader(import("screens/ShoppingCart"));
export const AsyncProfile = Loader(import("screens/Profile"));
export const AsyncConfigurationProfile = Loader(import("screens/ConfigurationProfile"));
export const AsyncCourseClassVideoPlayer = Loader(import("screens/CourseClassVideoPlayer"));
export const AsyncPageNotFound = Loader(import("screens/PageNotFound"));
export const AsyncCourseDetail = Loader(import("screens/CourseDetail"));
export const AsyncPasswordRecovery = Loader(import("screens/PasswordRecovery"));
export const AsyncResetPassword = Loader(import("screens/ResetPassword"));
export const AsyncAuthentication = Loader(import("screens/Authentication"));
export const AsyncMyCourses = Loader(import("screens/MyCourses"));
export const AsyncAbout = Loader(import("screens/About"));