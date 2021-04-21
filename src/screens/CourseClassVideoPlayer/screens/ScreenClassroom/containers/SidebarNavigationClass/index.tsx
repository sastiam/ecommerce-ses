import React from "react";
import { useCourseClassroomSelector } from "screens/CourseClassVideoPlayer/store";
import { ClassroomNavigation } from "screens/CourseClassVideoPlayer/shared/components/ClassroomLayout";
import TabsNavigations from "../../components/TabsNavigations";
import { shallowEqual } from "react-redux";
import UserInClassroomInformation from "../../components/UserInClassroomInformation";
import LoadableComponent from "components/common/LoadableComponent";

const SidebarNavigationClass = () => {
	const transform = useCourseClassroomSelector((state) => ({width:state.ui.sidebar.width}),shallowEqual);
	return (
		<ClassroomNavigation style={transform}>
			<UserInClassroomInformation/>
			<TabsNavigations>
				<TabsNavigations.Item text="Módulos">
					<LoadableComponent module={()=>import("./ModulesProgressClass/ModulesProgressClass")} fallback={null} />
				</TabsNavigations.Item>
				<TabsNavigations.Item text="Comentarios">
					<LoadableComponent module={()=>import("./CommentsClass/CommentsClass")} fallback={null} />
				</TabsNavigations.Item>
			</TabsNavigations>
		</ClassroomNavigation>
	);
};

export default SidebarNavigationClass;
