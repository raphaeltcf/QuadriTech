import { Api } from '../axios-config';

interface IAuth {
	access_token: string;
	user: {
		username: string;
		email: string;
	};
}

const auth = async (
	email: string,
	password: string
): Promise<IAuth | Error> => {
	try {
		console.log(email, password);
		const { data } = await Api.post(`/auth/login`, {
			email,
			password,
		});

		if (data) {
			return data;
		}

		return new Error(process.env.NEXT_PUBLIC_DEFAULT_ERROR_MESSAGE);
	} catch (error) {
		return new Error(
			(error as { message: string }).message ||
				process.env.NEXT_PUBLIC_DEFAULT_ERROR_MESSAGE
		);
	}
};

export const AuthService = { auth };
