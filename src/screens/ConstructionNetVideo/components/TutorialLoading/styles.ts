import styled from "styled-components";

const ContainerLoading = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Spinner = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 4px solid rgb(245,245,245);
	border-left-color: #0F56BF;
	animation: spinnerLoading .8s ease-in-out infinite;

	@keyframes spinnerLoading {
		to{ transform : rotate(1turn); }
	}

	@media screen and (max-width: 640px){
		width: 50px;
		height: 50px;
		border-width: 3px;		
	}
`;

export {
	ContainerLoading,
	Spinner
}