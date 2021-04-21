import React, { memo, useState } from "react";
import styled from "styled-components";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";

const Total = styled.span`
	color:White;
	margin-left:5px;
	font-size:1rem;
`

const WrapperLike = styled.div<{ isReaction?: boolean }>`
	color: ${(props) => (props.isReaction ? "var(--color-bright)" : "white")};
	font-size: 1.2rem;
	cursor:pointer;
	display:inline-flex;
	align-items:center;
	position:relative;
	transition:500ms ease-out;
	&:active {
		transform:scale(2);
	}
`;

const TotalBubbleFloating = styled.div`
	width:40px;
	height:40px;
	display:flex;
	align-items:center;
	justify-content:center;
	border-radius:100%;
	position:absolute;
	background-color:white;
	font-size:14px;
	color:black;
	font-weight:bold;
	box-shadow:0 20px 30px rgba(0,0,0,.1);
	animation:bubble-floating 600ms 1 ease-out;
	@keyframes bubble-floating {
		from {
			transform:translateY(10px)scale(.3);
			opacity:0;
		}
		20%,90% {
			transform:translateY(-40px);
			opacity:1;
		}
		to {
			transform:translateY(-100px);
			opacity:0;
		}
	}
`

type ReactionThumbButtonProps = {
	isReaction?: boolean;
	type: "up" | "down";
	onClick: () => void;
	totalReactions : number;
};
function ReactionThumbButton({ isReaction, type, onClick,	totalReactions }: ReactionThumbButtonProps) {
	const [ animatable, setAnimatable ] = useState<boolean>(false);

	const handlerOnClickReaction = () : void => {
		if(!isReaction) setAnimatable(true);
		onClick();
	}
	const handlerOnBubbleAnimationEnd = () : void => {
		setAnimatable(false);
	}

	return (
		<WrapperLike isReaction={isReaction} onClick={handlerOnClickReaction}>
			{animatable && (
				<TotalBubbleFloating onAnimationEnd={handlerOnBubbleAnimationEnd}>+1</TotalBubbleFloating>
			)}
			{type === "up" && <FiThumbsUp />}
			{type === "down" && <FiThumbsDown />}
			<Total>{totalReactions}</Total>
		</WrapperLike>
	);
}

export default memo(ReactionThumbButton);
