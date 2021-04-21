import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCart";
import PaymentRepository from "application/requests/PaymentRepository";

interface IDataCourse {
	idUser : Number;
	idCourse : Number;
}

const Payment = new PaymentRepository();

const useBuyCourse = () => {
	//Context
	const { deleteProduct } = useContext(ShoppingCartContext);

	const paymentCourse = async (payload : IDataCourse) => {
		try {
			const intent = await Payment.GenerateIntent();

			if(intent){
				const response = await Payment.BuyCourse({ ...payload, intent });
				if(response){
					deleteProduct(payload.idCourse);
					alert("Curso Comprado");
					window.location.reload();
					return;
				}
			}

			alert('Error al comprar el curso');
		}catch(e){
			console.log(e);
		}
	}

	return paymentCourse;
}

export default useBuyCourse;