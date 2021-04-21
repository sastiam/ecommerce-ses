import UserAccountRepository from "application/requests/UserAccountRepository";
import { Machine, assign } from "xstate";

interface EmailAccountData {
	idUser: number;
	username: string;
	fullName: string;
}
interface EmailAccountStateSchema {
	states: {
		changeAccount: {};
		awaitResponseAccount: {};
	};
}
interface EmailAccountContext {
	user: EmailAccountData;
}

type EmailAccountEvent = { type: "CHANGE_USERNAME_ACCOUNT" } & EmailAccountData;

const emailAccountMachine = Machine<EmailAccountContext,EmailAccountStateSchema,EmailAccountEvent>({
	id: "emailAccountMachine",
	context: {
		user: {
			idUser: 0,
			username: "",
			fullName: "",
		},
	},
	initial: "changeAccount",
	states: {
		changeAccount: {
			on: {
				CHANGE_USERNAME_ACCOUNT: {
					target: "awaitResponseAccount",
					actions: assign<EmailAccountContext,EmailAccountEvent>({
						user: (_, event) => event,
					}),
				},
			},
		},
		awaitResponseAccount: {
			invoke: {
				src: async ({ user: { idUser, username, fullName } }) => {
					const accountRepository = new UserAccountRepository();
					const request = await accountRepository.updateAccountBasic(
						idUser,
						username,
						fullName
					);
					return request;
				},
				onDone: {
					target: "changeAccount",
				},
			},
		},
	},
});

export default emailAccountMachine;
