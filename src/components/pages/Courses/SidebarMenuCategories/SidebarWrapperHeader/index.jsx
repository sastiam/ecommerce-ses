import React from "react";
import styled from "styled-components";

const LabelHeader = styled.div`
	font-size: ${({ small }) => small ? '22px' : '26px' };
	font-weight: 900;
	padding-top: 20px;
	margin-bottom: ${({ small }) => small ? '20px' : '30px' };
`;

const SidebarWrapperHeader = ({ small }) => (
	<LabelHeader small={small} >
		CATEGORÍAS
	</LabelHeader>
);

export default SidebarWrapperHeader;
