import { Api } from "application/services";

interface IBuyCourse {
	idUser : Number;
	idCourse : Number;
	intent : boolean;
}

export default class {

	public BuyCourse = async (data : IBuyCourse) => {
		const params = { 
			idUser : String(data.idUser),
			idCourse : String(data.idCourse),
			intent : String(data.intent)
		};

		try {
			const requestPayment = await Api.post('payments/buy/course', new URLSearchParams(params));
			const { response } = requestPayment.data;

			return response;
		}catch(e){
			console.log(e);
			return false;
		}
	}

	public GenerateIntent = async () => true;
}