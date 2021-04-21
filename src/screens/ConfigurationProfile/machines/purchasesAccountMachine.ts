import UserRepository from "application/requests/UserRepository";
import { assign, Machine } from "xstate";

interface Purchase {
	datePurchase : string;
	price: number;
	title: string;
}
interface PurchasesAccountContext {
	purchases : Purchase[]
}
interface PurchasesAccountStateSchema {
	states : {
		idl : {},
		loading : {},
		success : {},
		failed : {},
		empty : {}
	}
}

type PurchasesAccountEvent = { type : "FETCH" } & Purchase[] & {userId:number};

const purchasesAccountMachine = Machine<PurchasesAccountContext,PurchasesAccountStateSchema,PurchasesAccountEvent>({
	id : "purchasesAccountMachine",
	initial : "idl",
	context : {
		purchases: [],
	},
	states : {
		idl : {
			entry : 'fetch',
			on : {
				FETCH : 'loading'
			}
		},
		loading : {
			invoke : {
				src : async (_,{ userId }) : Promise<Purchase[]> => {
					const userRepository = new UserRepository();
					const request = await userRepository.GetPurchases(userId);
					return request;
				},
				onDone: [
					{
						target : "empty",
						cond : (_,event) => Array.isArray(event.data) && event.data.length === 0,
					},
					{
						target : "success",
						actions : assign({
							purchases : (_,event) => event.data,
						}),
					}
				]
			}
		},
		empty : {},
		success : {},
		failed: {}
	}
})

export default purchasesAccountMachine;