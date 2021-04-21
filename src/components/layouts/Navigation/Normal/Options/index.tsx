import React from "react";
import { Link } from "@reach/router";
import * as Styled from './styles';

import Dropdown from "components/layouts/Dropdown";
import SidebarMenuCategories from "components/pages/Courses/SidebarMenuCategories";

const option_config = [
	{
		name : 'Nosotros',
		link : '/about-us'
	},
	{
		name : 'Red de Construcción',
		link : '/red'
	},
	{
		name : 'Instructores',
		link : '/mentors'
	}
]

const Options = () => (
	<Styled.Container>
		<Styled.ListOption>
			{ 
				option_config.map((v,i) => (
					<li key={i}>
						<Styled.CustomLink as={Link} to={v.link}>{v.name}</Styled.CustomLink>
					</li>
				))
			}
		</Styled.ListOption>
		 <Dropdown.Courses title="Aprende">
			<Styled.ModalContainer>
				<SidebarMenuCategories small />
				<Styled.BottomBar />
			</Styled.ModalContainer>
		</Dropdown.Courses>
	</Styled.Container>
)

export default Options;