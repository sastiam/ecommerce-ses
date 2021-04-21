import React from "react";
import Loadable from "react-loadable";
import useGetMentors from "../hooks/useGetMentors";

const AsyncListMentors = Loadable({
	loader: () => import("../components/ListAllMentors"),
	loading: () => null,
});

const ContainerListAllMentors = () => {
	const { mentors } = useGetMentors();
	return <AsyncListMentors data={mentors} />;
};

export default ContainerListAllMentors;
