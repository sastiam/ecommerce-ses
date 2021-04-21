import { IMentor } from "../../metadata/interfaces/User";
import { Api } from "../../services";


class MentorRepository {

	public getAll = async () : Promise<IMentor[]> => {
		try {
			const req = await Api.get("mentors");
			const data = req.data;

			let dataFormatJSON : IMentor[] = [];
			
			for(let d of data) {
				dataFormatJSON.push({
					...d,
					personalInformation : JSON.parse(d.personalInformation),
				})
			}
			
			return dataFormatJSON;
		} catch(e){
			console.log(e);
			return [];
		}
	}

	public getById = async (id : number) : Promise<IMentor> => {
		let dataFormatJSON;

		try {
			const req = await Api.get(`users/mentors/id&userId=${id}`)
			const data = req.data;

			dataFormatJSON = {
				...data,
				personalInformation : JSON.parse(data.personalInformation)
			}

		}catch(e){
			console.log(e);
		}

		return dataFormatJSON;
	}
	
}

export default MentorRepository;