import React, { memo, FC } from "react";
import { Card } from './styles';

//Components
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import CardHeader from "./components/CardHeader";

//Hooks
import useItemCard from "./hooks/useItemCard";

//Interfaces
import { ICourse } from "../../../../application/metadata/interfaces/Course";

interface IProps {
	courseInformation : ICourse,
	simple : boolean,
	classname : string
}

const ItemCard : FC<IProps> = ({ courseInformation , simple , classname }) => {
	const { id , mentor, price, punctuation, offert, imagePreview, title, free } = courseInformation;

	//Hooks
	const { onClickCart , onClickImage , onClickSimpleCard , shopped , isObtainsCourse, isMentor } = useItemCard(courseInformation,simple);
	
	return <Card
		simple={simple}
		className={classname}
		onClick={onClickSimpleCard} 
	>
		<CardHeader 
			id={id}
			simple={simple} 
			title={title}
			author={mentor}
			sourceImage={imagePreview}
			onClickImage={onClickImage}
		/>
		<CardBody 
			price={price}
			offert={offert}
			isFree={free}
			puntuaction={punctuation}
			isObtains={isObtainsCourse}
			isMentor={isMentor}
		/>
		{
			!simple ? 
				isMentor ? <CardFooter.Mentor id={id} /> :
					isObtainsCourse ? <CardFooter.Obtains id={id} /> :
						free ? <CardFooter.Free id={id} /> :
							<CardFooter.Basic id={id} onClick={onClickCart} isShopped={shopped} />
				: null
		}
	</Card>
}

export default memo(ItemCard);