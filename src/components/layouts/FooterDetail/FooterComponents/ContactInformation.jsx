import React from "react";
import styled from "styled-components";

function ContactInformation({ title, detail }) {
	return (
		<Wrapper>
			<Wrapper>
				<Title>{title}</Title>
				<Detail>{detail}</Detail>
			</Wrapper>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 10px 0;
`;

const Title = styled.span`
	display: block;
	font-weight: 800;
	font-size: 16px;
`;
const Detail = styled.span`
	font-size: 13px;
	font-weight: normal;
`;

export default ContactInformation;
