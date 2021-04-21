import { TReduxState } from "application/metadata/types";
import { shallowEqual, useSelector } from "react-redux"
import { ICourseExamStore } from "./types";

export default () => useSelector<TReduxState, ICourseExamStore>(s => s.courseExam, shallowEqual);