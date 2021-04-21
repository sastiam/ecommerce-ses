import styled from "styled-components";

type TButttonProps = {
	ghost? : boolean;
}

export const Container = styled.div<TButttonProps>`
	padding: 1em;
	background-color: ${({ ghost }) => ghost ? "#fff" : "rgb(30,130, 230)"};
	border: ${({ ghost }) => ghost && "1px solid rgba(0,0,0,.1)"};
	display: flex;
	justify-content : center;
	border-radius: 10px;
	align-items : center;
	cursor: pointer;

	@media screen and (max-width : 480px){
		font-size : .8em;
	}
`;

export const ButtonText = styled.span<TButttonProps>`
	color: ${({ ghost }) => ghost ? "var(--color-black)" : "#fff"};
	font-weight : bold;
	padding-left: 10px;
`;

export const IconContent = styled.span`
	color: #fff;
	font-size : 1.5em;
	line-height: 0;
`;