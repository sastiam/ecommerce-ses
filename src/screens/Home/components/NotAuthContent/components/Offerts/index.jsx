import React from "react";
import "./index.scss";
import { BsBook , BsLaptop } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

//Components
import CardInformationOffert from "components/pages/Publicity/CardInformationOffert";

//Styles
import GlobalDiv from "components/common/GlobalDiv";

//Config
const config = [
	{
		title : "Aprende a tu ritmo",
		text : "Cursos las 24h sin caducidad",
		icon : <BsBook size={48} />,
	},
	{
		title : "Accesibilidad",
		text : "Accede desde cualquier lugar",
		icon : <BsLaptop size={48} />
	},
	{
		title : "Mejorate a ti mismo",
		text : "Comienzate a formar profesionalmente",
		icon : <GiNetworkBars size={48} />
	}
]

const Offerts = ()=> {
	return <GlobalDiv paddingTop="4em" className="global-div-offerts" paddingBottom="1em">
		<div className="grid-offerts">
			{ 
				config.map((v,i) => (
					<CardInformationOffert key={i} icon={v.icon} title={v.title} text={v.text} main={true} />	
				)) 
			}
		</div>
	</GlobalDiv>
}

export default Offerts;