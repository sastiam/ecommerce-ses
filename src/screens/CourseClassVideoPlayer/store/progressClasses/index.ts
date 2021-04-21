import produce from "immer";
import { handleActions } from "redux-actions";
import { ProgressClassState } from "screens/CourseClassVideoPlayer/@types/types";
import { 
	checkObtainCourse, 
	getCourseClasses, 
	markAsCompletedClass, 
	moveToNextClassModule, 
	resetClassroomData, 
	selectCurrentCourseclass 
} from "./actions";

const initialState : ProgressClassState.State = {
	currentCourse: {
		titleCourse: "",
		idMentor: 0,
		idCourse: 0,
	},
	currentClass: {
		idCourseClass: 0,
		idCourseModule: 0,
		title: "",
		videoClass:"",
		completed: false,
	},
	currentModule: {
		idCourseModule: 0,
		title: "",
	},
	modulesCourse: [],
	obtainCourse : false,
	loadingObtainCourse : true,
	loadingModulesCourse: true,
};

const progressClasses = handleActions({
		[selectCurrentCourseclass.toString()]: produce((state : ProgressClassState.State, { payload }) => {
				state.currentClass = payload.currentClass;
				state.currentModule =  payload.currentModule;
		}),

		[getCourseClasses.loading.toString()] : produce((state : ProgressClassState.State) => {
			state.loadingModulesCourse = true;
		}),
		[getCourseClasses.success.toString()]: (state, { payload }) => {
			let idCourseClass = payload.currentClass.idCourseClass;
			let currentClassroomData = {}
			let filterClasses = (classes) =>  classes.find(currentClass => currentClass.idCourseClass === Number(idCourseClass));
			let filterModulesCourse = payload.modulesCourse.filter((module : any) => {
				return filterClasses(module.classes) !== undefined;
			})
			
			if(payload.modulesCourse.length !== 0) {
				let moduleFiltered : any = filterModulesCourse[0];
				if(moduleFiltered !== undefined) {
					currentClassroomData = {
						currentModule : {
							idCourseModule : moduleFiltered.idCourseModule,
							title : moduleFiltered.title
						},
						currentClass : filterClasses(moduleFiltered.classes)
					}
				}
			}

			return {
				...state,
				...currentClassroomData,
				loadingModulesCourse: false,
				modulesCourse: payload.modulesCourse,
				currentCourse : payload.currentCourse,
			};
		},
		[checkObtainCourse.loading.toString()] : produce((state : ProgressClassState.State) => {
			state.loadingObtainCourse = true;
		}),
		
		[checkObtainCourse.success.toString()] : produce((state : ProgressClassState.State,{payload}) => {
			state.loadingObtainCourse = false;
			state.obtainCourse = payload.obtainCourse;
		}),

		[markAsCompletedClass.toString()] : (state) => {
			return {
				...state,
				modulesCourse: state.modulesCourse.map(module => {
					return {
						...module,
						classes : module.classes.map((currentClass) => {
							return {
								...currentClass,
								completed :currentClass.completed ? true :	state.currentClass.idCourseClass === currentClass.idCourseClass
							}
						})
					}
				})
			}
		},
		
		[moveToNextClassModule.toString()] : produce((state : ProgressClassState.State) => {
			const _currentClass = state.currentClass;
			const indexCurrentModule = state.modulesCourse.findIndex(module => module.idCourseModule === _currentClass.idCourseModule);
			const _currentModule = state.modulesCourse[indexCurrentModule];
			const indexCurrentClass = _currentModule.classes.findIndex(classModule => classModule.idCourseClass === _currentClass.idCourseClass) + 1;	
			const isCompleteClasses = _currentModule.classes.length === indexCurrentClass; 

			if(isCompleteClasses) {
				let { classes, ...currentModule } = state.modulesCourse[state.modulesCourse.findIndex(module => module.idCourseModule === _currentModule.idCourseModule) + 1];
				state.currentModule = currentModule;
				if(Object.keys(classes).length) {
					state.currentClass = classes[0];
				}
			}
			else {
				state.currentClass = _currentModule.classes[indexCurrentClass];
			}
		}),

		[resetClassroomData.toString()] : () => initialState
	},
	initialState
);

export default progressClasses;
