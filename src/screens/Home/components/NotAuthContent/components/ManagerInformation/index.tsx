import React, { memo } from 'react';
import ManagerCard from './ManagerCard';
import MIS from './styles';
import config from './config';

const ManagerInformation = () => (
	<MIS.MainContainer>
		<MIS.BackgroundTitle>
			<MIS.ContainerTitle>
				<MIS.Title>Nuestro Staff</MIS.Title>
				<MIS.Description>
					Isesac se apoya en la experiencia y conocimientos 
					de los siguientes expertos (colegiados y habilitados)
				</MIS.Description>
			</MIS.ContainerTitle>			
		</MIS.BackgroundTitle>
		<MIS.ContainerCards>
			{config.map((v,i) => <ManagerCard key={i} title={v.title} subtitle={v.subtitle} list={v.list} image={v.image} />)}
		</MIS.ContainerCards>
	</MIS.MainContainer>
);

export default memo(ManagerInformation);