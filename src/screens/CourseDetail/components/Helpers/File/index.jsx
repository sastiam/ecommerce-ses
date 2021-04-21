import React, { useContext } from "react";
import styles from "styles/index.scss";
import "./index.scss";
import { BsDownload } from "react-icons/bs";
import TitleBold from "components/common/TitleBold";
import GlobalDiv from "components/common/GlobalDiv";
import GlobalButton from "components/common/GlobalButton";
import { AuthContext } from "context/Auth";
import { navigate } from "@reach/router";

const File = ({ icon , button , content , title , link }) => {
	const { userAuth } = useContext(AuthContext);
	const onClick = () => navigate("/login"); 

	return <div className="file-card">
		<span className="icon">
			{icon}
		</span>
		<GlobalDiv paddingTop=".5em" paddingBottom="1em">
			<TitleBold fontWeight="bold" fontSize="1.1em">{title}</TitleBold>
		</GlobalDiv>
		<GlobalDiv paddingBottom="1.5em">
			<p className="content">{content}</p>
		</GlobalDiv>
		{ 
			button ? !userAuth ?
				<GlobalButton onClick={onClick} paddingVertical=".5em">
					Iniciar Sesión
				</GlobalButton>
				: <a className="button-link-file" target="_blank" download href={link || '#'}>Descargar Archivos</a>
			: null
		}
	</div>
}

File.defaultProps = {
	icon : <BsDownload />,
	title : "Descarga los adjuntos de tu curso",
	content : "Aquí encontrarás todo el material necesario para poder realizar los ejercicios de clase.",
	button : true
}

export default File;