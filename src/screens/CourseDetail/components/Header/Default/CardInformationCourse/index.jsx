import React, { memo } from "react";
import classnames from "classnames";
import "./index.scss";

//UI
import TitleBold from "../../../../../../components/common/TitleBold";
import GlobalDiv from "../../../../../../components/common/GlobalDiv";
import ListIcon from "./ListIcon";

import useDiscount from "../../../../../../hooks/useDiscount";

//Parent Context
import ActionsButtons from "./ActionsButtons";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const CardInformationCourse = () => {
	const { 
		course : { data : { title , price , offert , category , free } }
	} = useCourseDetailRedux();

	const { realPrice, priceDiscount } = useDiscount(price,offert);

	//Estilos Dinamicos
	const PriceStyle = classnames("data",{ tached : offert > 0 && !free });

	return <div className="card-information-course">
		<div>
			<TitleBold fontWeight="900" fontSize="1.8em">{title} </TitleBold>
			<GlobalDiv paddingTop=".7em">
				<TitleBold fontWeight="300" fontSize="0.9em">Categoria : {category}</TitleBold>
			</GlobalDiv>
		</div>
		<GlobalDiv paddingTop="1em" paddingBottom=".8em">
			{ free ? 
					<span className='price text'>Curso Gratuito</span> : 
					<>
						<span className="price">S/</span>
						<span className="real-price">{priceDiscount ? priceDiscount : realPrice}</span>
					</>
			}
		</GlobalDiv>
		<GlobalDiv paddingBottom="1em" className="price-detail">
			<div className="price-information light">
				<span className="text">Precio Regular</span>
				<span className={PriceStyle}>S/ {realPrice}</span>
			</div>
			<div className="price-information">
				<span className="text">Descuento</span>
				<span className="data">{ free ? '100%' : offert ? (offert * 100) + "%" : "Sin descuento"}</span>
			</div>
		</GlobalDiv>
		<GlobalDiv paddingVertical="1em" className="container-action-buttons">
			<ActionsButtons />
		</GlobalDiv>
		<GlobalDiv>
			<ListIcon />
		</GlobalDiv>
	</div>
}

export default memo(CardInformationCourse);