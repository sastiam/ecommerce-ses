import styled from "styled-components";

export const Container = styled.div`
	width: 300px;
	height: 100%;

	@media screen and (max-width: 550px) {
		width: 80%;
	}
`;

export const Title = styled.span`
	font-weight: 900;
	font-size: 22px;
	color: #313131;
	font-family: 'Roboto' , sans-serif;
`;

export const Description = styled.p`
	color: #313131;
	font-size: 14px;
	font-weight: 400;
	font-family: 'Roboto' , sans-serif;
	margin-top: 8px;
`;

export const ContentQualification = styled.div`
	margin-top: 20px;
`;