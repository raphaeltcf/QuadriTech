'use client';
import { useAuthContext } from '@/contexts/AuthContext';
import { ReactNode, useState } from 'react';
import * as yup from 'yup';
import Input from './Input';
import Button from './Button';
import { usePathname, useRouter } from 'next/navigation';
import FormInput from './FormInput';

const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(5),
});

interface ILoginProps {
	children: ReactNode;
}

const Login = ({ children }: ILoginProps) => {
	const { isAuthenticated, login } = useAuthContext();

	const [isLoading, setIsLoading] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const pathname = usePathname();
	const router = useRouter();

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
				setIsLoading(false);
				errors.inner.forEach((error) => {
					if (error.path === 'email') {
						setEmailError(error.message);
					}
					if (error.path === 'password') {
						setPasswordError(error.message);
					}
				});
			});
	};

	if (isAuthenticated || pathname === '/signup') return <>{children}</>;

	return (
		<div className='flex h-screen flex-col md:flex-row'>
			<div className='w-full  h-2/6 bg-gradient-to-t from-orange-400 to-rose-400 md:h-screen md:w-2/5 '>
				<div className='md:hidden flex flex-col justify-center  h-full'>
					<h1 className='font-bold text-5xl text-center mb-1'>
						Bem vindo ao QuadriTech
					</h1>
					<p className='text-center text-gray-500 font-medium'>
						Tecnologia para transformar seu mundo!
					</p>
				</div>
			</div>
			<main className='w-full  md:w-3/5 '>
				<div className='flex flex-col justify-evenly items-center w-3/4 mx-auto h-full'>
					<div className='hidden md:block'>
						<h1 className='font-bold text-5xl text-center mb-1'>
							Bem vindo ao QuadriTech
						</h1>
						<p className='text-center text-gray-500 font-medium'>
							Tecnologia para transformar seu mundo!
						</p>
					</div>
					<div className='w-full  mt-4 md:mt-0 '>
						<FormInput
							label='Email'
							placeholder='Insira seu email'
							type='text'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							error={!!emailError}
							errorMessage={emailError}
							onKeyDown={() => setEmailError('')}
						/>
						<FormInput
							label='Senha'
							placeholder='Insira sua senha'
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							error={!!passwordError}
							errorMessage={passwordError}
							onKeyDown={() => setPasswordError('')}
						/>
					</div>
					<div className='w-3/4'>
						<Button
							onClick={handleSubmit}
							className='w-full'
						>
							Acesse
						</Button>
						<div className='text-center  m-3 text-sm text-zinc-600 font-bold flex items-center justify-center gap-2'>
							<div className='w-6/12 h-px bg-gray-300'></div>
							<p>OU</p>
							<div className='w-6/12 h-px bg-gray-300'></div>
						</div>
						<Button
							onClick={() => router.push('/signup')}
							className='w-full '
						>
							Crie sua conta
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Login;
