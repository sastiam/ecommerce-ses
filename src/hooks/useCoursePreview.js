import { useContext } from "react";
import { useParams } from "@reach/router";
import { DatabaseContext } from "../context/Database";

const useCoursePreview = () => {
	const { getCourseInformationToPay } = useContext(DatabaseContext);
	const params = useParams();

	return getCourseInformationToPay(params && params.idCourse);
};

export default useCoursePreview;
