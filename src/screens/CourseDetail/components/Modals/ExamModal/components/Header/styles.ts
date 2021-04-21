import styled from "styled-components";

export const Title = styled.span`
	width: 60%;
	display: inline-block;
	font-size: 2.5em;
	font-weight: 900;
	color: #313131;
	text-align: left;
	font-family: 'Roboto' , sans-serif;
	margin-bottom: 15px;
`;

export const Description = styled.p`
	font-weight: 400;
	font-size: 1.1em;
	color: #5C5C5C;
	font-family: 'Roboto' , sans-serif;
`;

export const Container = styled.div`
	padding-top: 4em;

	@media screen and (max-width : 1200px) {
		${Title} {
			width: 80%;
		}
	}

	@media screen and (max-width : 700px) {
		${Title} {
			width: 100%;
		}
	}
`;