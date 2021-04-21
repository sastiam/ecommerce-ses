import React, { memo } from "react";
import "./index.scss";
import WelcomeMessage from "./components/WelcomeMessage";
import LastVideoPreview from "./components/LastVideoPreview";
import RecommendationList from "../../../../../components/pages/Courses/RecommendationList";
import useLastCourse from "../../../../../hooks/useLastCourse";
import EmptyCoursesPreview from "./components/EmptyCoursesPreview";

const GreetBannerCard = () => {
	const { course , isLoading } = useLastCourse();

	return (
		<div className="greet-banner">
			<div className="row-b">
				<div className="col-b col-header-b">
					<WelcomeMessage />
				</div>
				{
					!isLoading && (
						!course ? 
							<EmptyCoursesPreview /> :
							<div className="col-b col-body-b">
								<LastVideoPreview />
								<RecommendationList />
							</div>
					)
				}
			</div>
		</div>
	);
};

export default memo(GreetBannerCard);