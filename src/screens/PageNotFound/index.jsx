import React from "react";
import { Redirect } from "@reach/router";

const PageNotFound = () => {
	return <Redirect to="/" noThrow />
};

export default PageNotFound;