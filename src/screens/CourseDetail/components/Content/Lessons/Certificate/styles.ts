import styled from "styled-components";

export const LinkContainer = styled.a`
	height: 100%;	
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LinkContent = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
`;

export const LinkIcon = styled.span`
	font-size: 1.2em;
	line-height: 0;
	color: var(--color-secondary);
`;

export const LinkText = styled.span`
	font-size: 1.05em;
	padding-left: 10px;
	font-weight: 800;
	color: var(--color-secondary);
`;