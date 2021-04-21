import styled, { keyframes } from "styled-components";

export const WrapperFlex = styled.div`
	background-color: white;
	display: flex;
	padding: 8px;
	color: gray;
`;

export const ButtonAddComment = {
	Wrapper: styled(WrapperFlex)`
		align-items: center;
		font-weight: bold;
		cursor: pointer;
	`,
	Avatar: styled.div<{ image?: string }>`
		width: 40px;
		height: 40px;
		border-radius: 100%;
		background: url("${(props) => props.image}") no-repeat center / cover;
		margin-right: 10px;
		background-color: silver;
	`,
};


const keyframesInputCommentWrapper = keyframes`
	from {
		transform:scaleY(.5);
	}
`
export const InputComment = {
	Wrapper: styled(WrapperFlex)`
		flex-direction: column;
		transform-origin:top;
		animation:${keyframesInputCommentWrapper} .08s 1 linear;
		.options__button {
			display: flex;
			justify-content: flex-end;
		}
	`,
	Input: styled.input`
		padding: 12px 0;
		width: 100%;
		border: none;
		outline: none;
		display: block;
		font-size: 1rem;
		margin-bottom: 10px;
	`,
	Button: styled.button<{ primary?: boolean }>`
		padding: 15px 20px;
		margin-left: 20px;
		border: none;
		outline: none;
		font-size: 12px;
		cursor: pointer;
		font-weight: 800;
		background-color: ${(props) =>
			props.primary ? "var(--color-base)" : "white"};
		color: ${(props) => (props.primary ? "white" : "silver")};
		&:disabled {
			background-color: rgba(40, 40, 40, 0.1);
			color: silver;
		}
	`,
};
