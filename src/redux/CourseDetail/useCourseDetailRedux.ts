import { TReduxState } from "application/metadata/types";
import { shallowEqual, useSelector } from "react-redux"
import { ICourseDetailStore } from "./types";

export default () => useSelector<TReduxState, ICourseDetailStore>(s => s.courseDetail, shallowEqual);