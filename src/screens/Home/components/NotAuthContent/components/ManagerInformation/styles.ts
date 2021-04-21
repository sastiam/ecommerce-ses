import styled from "styled-components";
import { Flex } from "styles/mixins";

const ManagerInformationStyles = {
	MainContainer : styled.div`
		width: 100%;
		margin: 0 auto;
		margin-bottom: 5em;
		${Flex('center','center','column')};
	`,
	BackgroundTitle : styled.div`
		width: 100%;
		background-color: var(--color-base);
		padding: 4.5em 0;
		margin-bottom: 5em;
		text-align: left;	
	`,
	ContainerTitle : styled.div`
		width: 70%;
		margin: 0 auto;
		${Flex('flex-start','flex-start','column')};

		@media screen and (max-width: 1300px) {
			width: 85%;
		}

		@media screen and (max-width : 750px) {
			text-align: center;
			align-items: center;
			font-size: .9em;
		}

		@media screen and (max-width : 520px) {
			font-size: .8em;
		}
	`,
	Title : styled.span`
		text-transform: uppercase;
		font-size: 2.6em;
		font-weight: 900;
		color: #fff;
		margin-bottom: .2em;
	`,
	Description : styled.p`
		width: 580px;
		font-size: 1.1em;
		color: #fff;

		@media screen and (max-width : 680px) {
			width: auto;
			padding: 0 1em;
		}
	`,
	ContainerCards : styled.div`
		width: 70%;
		display: grid;
		grid-template-columns: repeat(3,1fr);
		column-gap: 3em;
		row-gap: 3em;
		align-items: flex-start;

		@media screen and (max-width : 1300px) {
			width: 85%;
			column-gap: 2em;
			row-gap: 2em;
		}

		@media screen and (max-width : 1020px) {
			width: 90%;
		}

		@media screen and (max-width : 900px) {
			grid-template-columns: repeat(2,1fr);
		}

		@media screen and (max-width : 680px) {
			width: 80%;
			grid-template-columns: 1fr;
		}

		@media screen and (max-width : 420px) {
			width: 90%;
		}
	`
}

export default ManagerInformationStyles;