import React, { FC, memo } from "react";
import { IoMdStar } from "react-icons/io";
import useDiscount from "../../../../../../hooks/useDiscount";
import { CardBodyContainer,ContainerMessage , DiscountPrice , ContainerStar , RealPrice , StarIcon , TextIcon } from "./styles";
import Message from "./Message";

interface IProps {
	price : number;
	puntuaction : number;
	offert : number;
	isObtains : boolean;
	isFree : boolean;
	isMentor : boolean;
}

const CardBody : FC<IProps> = ({ price, puntuaction, offert , isObtains , isFree, isMentor }) => {
	//Custom Hooks
	const { realPrice, priceDiscount } = useDiscount(price, offert);

	const GetMessageContent = () => {
		if(isMentor) return <Message.Mentor />;
		if(isObtains) return <Message.Obtains />;
		if(isFree) return <Message.Free />;
		if(offert)
			return (
				<>
					<RealPrice>S/ {priceDiscount}</RealPrice>
					<DiscountPrice>S/ {realPrice}</DiscountPrice>
				</>
			);
		
		return <RealPrice>S/ {realPrice}</RealPrice>;
	}
	
	return <CardBodyContainer>
		<ContainerMessage>
			{GetMessageContent()}
		</ContainerMessage>
		<ContainerStar>
			<StarIcon>
				<IoMdStar />
			</StarIcon>
			<TextIcon>{puntuaction}</TextIcon>
		</ContainerStar>
	</CardBodyContainer>
};

export default memo(CardBody);