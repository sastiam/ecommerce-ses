import React, { FC } from 'react';
import * as MCS from './styles';

interface IProps {
	image : any;
	title : string;
	subtitle : string;
	list : string[];
}

const ManagerCard : FC<IProps> = ({ title , subtitle , list , image }) => (
	<MCS.Container>
		<MCS.ImageContainer>
			<MCS.Image src={image} />
		</MCS.ImageContainer>
		<MCS.InformationContainer>
			<MCS.ContainerTitle>
				<MCS.Title>{title}</MCS.Title>
				<MCS.Title>{subtitle}</MCS.Title>
			</MCS.ContainerTitle>
			<MCS.ContainerList>
				<MCS.List>
					{list.map((v,i) => <MCS.ItemList key={i}>{v}</MCS.ItemList>)}
				</MCS.List>
			</MCS.ContainerList>
		</MCS.InformationContainer>
	</MCS.Container>
)

export default ManagerCard;