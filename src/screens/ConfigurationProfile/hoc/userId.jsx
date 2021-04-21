import { AuthContext } from "context/Auth";
import React, { useContext } from "react";

const userId = (CustomComponet) => () => {
	const { userAuthInformation: { idUser }, } = useContext(AuthContext);
	return <CustomComponet {...{userId: idUser}} />
}

export default userId;