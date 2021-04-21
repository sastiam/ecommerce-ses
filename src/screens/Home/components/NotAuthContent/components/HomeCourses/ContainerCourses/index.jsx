import React, { useContext, memo } from "react";
import "./index.scss";

//Config
import ItemCard from "components/pages/Courses/ItemCard";

//Context
import { ShoppingCartContext } from "context/ShoppingCart";
import { FilterHomeBarContext } from "context/FilterHomeBar";

//Components
import CardLoadingSkeleton from "components/pages/Courses/CardLoadingSkeleton";
import MessageEmptyResult from "components/pages/Courses/MessageEmptyResult";

const ContainerCourses = () => {
	//Context
	const { filteredCourses , isLoading } = useContext(FilterHomeBarContext);
	const { loadingShoppingCart } = useContext(ShoppingCartContext);

	if(isLoading){
		return <>
			<div className='grid-courses'>
				<CardLoadingSkeleton />
				<CardLoadingSkeleton />
				<CardLoadingSkeleton />
			</div>
		</>
	}

	if(!filteredCourses.length) {
		return (
			<MessageEmptyResult 
				title='Sin resultados' 
				message='Aun no se han subido cursos' 
			/>
		);
	}

	const courses = filteredCourses?.slice(0,6);

	return <>
		<div className="grid-courses" >
			{
				!loadingShoppingCart && 
					courses.map((v, i) => <ItemCard classname="edit" courseInformation={v} key={i} />)
			}
		</div>
	</>
}

export default memo(ContainerCourses);