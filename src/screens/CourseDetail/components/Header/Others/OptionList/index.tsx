import React from "react";
import * as Styled from './styles';

import { FiAlertCircle , FiPlayCircle } from "react-icons/fi";
import { FaRegCommentDots } from "react-icons/fa";

//Components
import Option from "./Option";

//Context
import { useCourseDetailContext } from "screens/CourseDetail/store/Global/context";

const config = [
	{
		name : "Sobre el curso",
		icon : <FiAlertCircle />
	},
	{
		name : "Clases y adjuntos",
		icon : <FiPlayCircle />
	},
	{
		name : "Comentarios",
		icon : <FaRegCommentDots />
	}
];

const OptionList = () => {
	const { TabIndexSelected , ChangeTabIndex } = useCourseDetailContext();

	return <Styled.Container>
		<Styled.ListSection>
			<Styled.List>
				{ 
					config.map((v,i) => (
						<Option
							key={i}
							name={v.name}
							icon={v.icon} 
							active={TabIndexSelected === i}
							onClick={ChangeTabIndex(i)}
						/>
					)) 
				}				
			</Styled.List>
		</Styled.ListSection>		
	</Styled.Container>
}

export default OptionList;