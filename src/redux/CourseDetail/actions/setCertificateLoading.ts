import { ACTIONS, CertificateState } from "../types";

export default (state : CertificateState) => ({
	type : ACTIONS.SET_CERTIFICATE_LOADING,
	payload : state
})