import GlobalButton from "components/common/GlobalButton";
import React, { Component } from "react";
import styled from "styled-components";
import { MdErrorOutline } from "react-icons/md";

const S = {
	Wrapper: styled.div`
		text-align:center;
		margin:60px auto;
	`,
	Title: styled.p`
		font-weight:bold;
		font-size:1.8rem;
		margin-bottom:6px;
	`,
	Message: styled.p`
		margin-bottom:12px;
		color:var(--color-light);
	`
}

export default class CommonErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		}
	}

	componentDidCatch() {
		this.setState({
			hasError: true,
		})
	}

	navigateToHome() {
		window.location.href = window.location.origin;
	}

	render() {
		if (this.state.hasError) {
			return <S.Wrapper>
				<MdErrorOutline size={60} color="var(--color-light)" />
				<S.Title>Ups! Sucedió un error inesperado</S.Title>
				<S.Message>Lo sentimos, tenemos un error</S.Message>
				<GlobalButton onClick={this.navigateToHome} >Volver al inicio</GlobalButton>
			</S.Wrapper>
		}
		return this.props.children;
	}

}