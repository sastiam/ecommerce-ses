import React from "react";
import LoadableComponent from "components/common/LoadableComponent";
import SpinnerLoading from "../../../../../shared/components/SpinnerLoading";

export default function ModulesProgressClass() {
	return <LoadableComponent module={()=>import("./views/ListModulesCourse")} fallback={<SpinnerLoading/>} />;
}
