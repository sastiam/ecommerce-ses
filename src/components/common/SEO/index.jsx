import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ options, children }) => {
	const { title } = options;
	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			{children}
		</>
	);
};

export default SEO;
