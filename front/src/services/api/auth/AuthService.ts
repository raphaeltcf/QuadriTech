import { Api } from '../axios-config';

interface IAuth {
	access_token: string;
	user: {
		username: string;
		email: string;
	};
}

interface IRegisterProps {
	username: string;
	email: string;
	password: string;
}

const auth = async (
	email: string,
	password: string
): Promise<IAuth | Error> => {
	try {
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

const register = async ({
	email,
	username,
	password,
}: IRegisterProps): Promise<string | Error> => {
	try {
		const { data } = await Api.post(`/auth/register`, {
			email,
			username,
			password,
		});

		if (data) {
			return 'Conta criada com sucesso!';
		}

		return new Error(process.env.NEXT_PUBLIC_DEFAULT_ERROR_MESSAGE);
	} catch (error) {
		return new Error(
			(error as { message: string }).message ||
				process.env.NEXT_PUBLIC_DEFAULT_ERROR_MESSAGE
		);
	}
};

export const AuthService = { register, auth };
