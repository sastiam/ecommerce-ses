import React from "react";
import { asEffect, useMachine } from "@xstate/react";
import EmptyPayments from "../EmptyPayments";
import LoadingPayments from "../LoadingPayments";
import userId from "screens/ConfigurationProfile/hoc/userId";
import purchasesAccountMachine from "screens/ConfigurationProfile/machines/purchasesAccountMachine";
import ContainerPayments from "./ContainerPayments";

const DetailPayments = ({ userId }) => {

	const [current, send] = useMachine(purchasesAccountMachine, {
		actions: {
			fetch: asEffect(() => send("FETCH", { userId }))
		}
	});

	if (current.matches("loading") || current.matches("idl")) return <LoadingPayments />
	if (current.matches("empty")) return <EmptyPayments />;
	if (current.matches("success")) return <ContainerPayments data={current.context.purchases} />

};

export default userId(DetailPayments);
