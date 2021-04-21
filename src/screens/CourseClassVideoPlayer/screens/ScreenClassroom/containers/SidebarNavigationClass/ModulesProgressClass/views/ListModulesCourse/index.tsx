import React from 'react'
import ClassModule from "screens/CourseClassVideoPlayer/screens/ScreenClassroom/components/ModuleProgressClass/ClassModule";
import CollapsableModule from "screens/CourseClassVideoPlayer/screens/ScreenClassroom/components/ModuleProgressClass/CollapsableModule";
import CollapsableList from "screens/CourseClassVideoPlayer/shared/components/CollapsableList";
import useChangeRouteClass from "screens/CourseClassVideoPlayer/hooks/useChangeRouteClass";
import useCurrentModuleClass from "screens/CourseClassVideoPlayer/hooks/useCurrentModuleClass";
import { selectCurrentCourseclass } from "screens/CourseClassVideoPlayer/store/progressClasses/actions";
import { useCourseClassroomDispatch } from 'screens/CourseClassVideoPlayer/store';
import useGetModulesClasses from 'screens/CourseClassVideoPlayer/hooks/useGetModulesClasses';
import SpinnerLoading from 'screens/CourseClassVideoPlayer/shared/components/SpinnerLoading';

const ListModulesCourse = () => {
	const dispatch = useCourseClassroomDispatch();
	const { onNavigate } = useChangeRouteClass();
	const { currentClass , currentModule } = useCurrentModuleClass();
	const { loadingModulesCourse, modulesCourse } = useGetModulesClasses();

	const selectCurrentClass = (currentModule,currentClass) => {
		onNavigate(currentClass.idCourseClass).then(() => {
			dispatch(selectCurrentCourseclass({
				currentModule,
				currentClass,
			}))
		})
	}

	if(loadingModulesCourse) return <SpinnerLoading/>

	return (
		<div>
			<CollapsableList>
				{modulesCourse.map(({classes,...module}, moduleId) => {
					return (
						<CollapsableModule
							key={moduleId}
							moduleId={module.idCourseModule}
							name={`${moduleId + 1}. ${module.title}`}
							selected={currentModule.idCourseModule === module.idCourseModule}
							isPlaying={currentModule.idCourseModule === module.idCourseModule}
							totalClasses={classes.length}
						>
							{classes.map((moduleClass, moduleClassId) => (
								<ClassModule
									key={moduleClassId}
									name={moduleClass.title}
									completed={moduleClass.completed}
									duration={moduleClass.duration}
									onClick={()=>selectCurrentClass(module,moduleClass)}
									isPlaying={currentClass.idCourseClass === moduleClass.idCourseClass}
								/>
							))}
						</CollapsableModule>
					);
				})}
			</CollapsableList>
		</div>
	)
}

export default ListModulesCourse;
