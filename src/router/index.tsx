import React from "react";

import useAppInit from "./hooks/useAppInit";

//Events
import "./components/routerHelpers/EventRouter";

//Screen Routers
import * as R from "./components/routerNames"
import { Router } from "@reach/router";

const GlobalRouter = () => {
	const { loadingAuth , userAuth } = useAppInit();

	if(loadingAuth) return null;

	return (
		<Router>
			<R.AsyncHome path="/" />
			<R.AsyncConstructionNet path="/red" />
			<R.AsyncConstructionNetVideo path="/red/:id" />
			<R.AsyncAbout path="/about-us" />
			<R.AsyncSearch path="/search/*" />
			<R.AsyncMentors path="/mentors" />
			<R.AsyncCourseDetail path="/course/:id" />
			<R.AsyncProfile path="/users/:name" />
			<R.AsyncCourseClassVideoPlayer path="/course/:id/:classId" />
			{
				userAuth ?
				<>
						<R.AsyncShoppingCart path="/shoppingcart" />
						<R.AsyncConfigurationProfile path="/configuration/*" />
						<R.AsyncMyCourses path="/panel/*" />
					</> : 
					<>
						<R.AsyncAuthentication path="/login" type="login" />
						<R.AsyncAuthentication path="/register" type="register" />
						<R.AsyncPasswordRecovery path="/password/recovery" />
						<R.AsyncResetPassword path="/password/reset" />
					</>
			}
			<R.AsyncPageNotFound path="*" />
		</Router>
	);
};

export default GlobalRouter;
