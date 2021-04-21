import styled from "styled-components";

export const Description = styled.p`
	font-weight: 400;
	padding-bottom: 2em;
	line-height: 1.4em;
`;

export const CardList = styled.div`
	display: flex;
	margin: 3em 0;
	flex-flow: row wrap;
	justify-content:center;
`;

export const Container = styled.div`
	width: 100%;
	margin: 0 auto 4em auto;
	border-bottom: 1px solid rgb(230,230,230);
`;

export const SubTitle = styled.span({
	display : 'block',
	fontWeight : 600,
})