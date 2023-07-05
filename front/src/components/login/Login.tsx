'use client';
import { useAuthContext } from '@/contexts/AuthContext';
import { ReactNode, useState } from 'react';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(5),
});

interface ILoginProps {
	children: ReactNode;
}

const Login = ({ children }: ILoginProps) => {
	const { isAuthenticated, login } = useAuthContext();

	console.log(isAuthenticated);

	const [isLoading, setIsLoading] = useState(false);

	const [email, setEmail] = useState('feijo6622@gmail.com');
	const [password, setPassword] = useState('12345678');

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const handleSubmit = () => {
		setIsLoading(true);
		loginSchema
			.validate({ email, password }, { abortEarly: false })
			.then((dadosValidados) => {
				login(dadosValidados.email, dadosValidados.password).then(() => {
					setIsLoading(false);
				});
			})
			.catch((errors: yup.ValidationError) => {
				console.log(errors);
				setIsLoading(false);
				errors.inner.forEach((error) => {
					if (error.path === 'email') {
						setEmailError(error.message);
					} else if (error.path === 'password') {
						setPasswordError(error.message);
					}
				});
			});
	};

	if (isAuthenticated) return <>{children}</>;

	return (
		<>
			<h1>Login</h1>
			<input
				type='text'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={handleSubmit}>Entrar</button>
		</>
	);
};

export default Login;
