import React from "react";
import Star from "../components/pages/Courses/Star";

const useStarAmount = (amount, size = "1.5em") => {
	//Variables
	let starIcons = [];

	//Actions
	if(amount > 0){
		
		let resPuntuaction = amount % 1,	//Obtengo el decimal
			purePuntuaction = amount - resPuntuaction;	//Obtengo el numero sin decimales

		//Creo las estrellas que estan completas
		for(let i = 0; i < purePuntuaction; i++){
			starIcons.push(<Star size={size} key={i} type="full" />);
		}

		//Si existe un decimal
		if(resPuntuaction){

			//Creo las estrellas media completas
			for(let i = 0; i < resPuntuaction; i++){
				starIcons.push(<Star size={size} key={i} type="medium" />);
			}
			
			//Obtengo el numero faltante para completar 5
			let empty = 5 - amount - ((5 - amount) % 1);

			//En base a ese numero creo estrellas vacias
			for(let i = 0; i < empty; i++){
				starIcons.push(<Star size={size} key={i} type="empty" />);
			}
		}else{
			//Creo estrellas vacias
			let empty = 5 - amount;
			for(let i = 0; i < empty; i++){
				starIcons.push(<Star size={size} key={i} type="empty" />);
			}
		}
	}else{
		for(var i = 0; i < 5; i++){
			starIcons.push(<Star size={size} key={i} type="empty" />);
		}
	}

	return starIcons;
}

export default useStarAmount;