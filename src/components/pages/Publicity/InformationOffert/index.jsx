import React from "react";
import "./index.scss";

//Components
import CardInformationOffert from "../CardInformationOffert";

//Styles
import GlobalDiv from "../../../common/GlobalDiv";
import TitleBold from "../../../common/TitleBold";

//Config
import config from './config';

const InformationOffert = props => {
	return <div className="information-offert">
		<GlobalDiv className="responsive" sizeWidth="50%" center paddingVertical="4em" textAlign="center">
			<TitleBold>Brindamos diversos servicios clasificados </TitleBold>
		</GlobalDiv>
		<GlobalDiv className="container-card" paddingTop="4em" paddingBottom="10em" >
			<div className="grid-offert" >
				{ config.map((v,i) => <CardInformationOffert key={i} {...v} /> ) }		
			</div>
		</GlobalDiv>
	</div>
}
	
export default InformationOffert	;