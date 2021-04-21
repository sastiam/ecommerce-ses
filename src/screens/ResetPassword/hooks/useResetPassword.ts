import { Api } from "application/services";
import { FormEvent, useState } from "react";

export default function useResetPassword() {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [passwordValue, setPasswordValue] = useState<string>("");
	const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("");

	const getParam = (key): string => new URLSearchParams(window.location.search).get(key) as string;

	const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		const params = {
			token: getParam("token"),
			email: getParam("email"),
			newPassword: passwordValue,
			confirmPassword: confirmPasswordValue,
		};
		setLoading(true);
		Api.post("/password/reset", new URLSearchParams(params)).then(() => {
			setLoading(false);
			window.location.href= "/login";
			})
			.catch(() => setLoading(false));
	};

	return {
		onPasswordValue: setPasswordValue,
		onConfirmPasswordValue: setConfirmPasswordValue,
		onSubmit,
		isLoading,
	};
}
