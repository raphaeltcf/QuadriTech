'use client';
import { useAuthContext } from '@/contexts/AuthContext';
import { ReactNode, useState } from 'react';
import * as yup from 'yup';

import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';

const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required().min(5),
});

interface ILoginProps {
	children: ReactNode;
}

const SignUp = ({ children }: ILoginProps) => {
	const { isAuthenticated, login } = useAuthContext();

	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();

	if (isAuthenticated) return <>{children}</>;

	return (
		<div className='flex h-screen flex-col md:flex-row'>
			<div className='w-full  h-2/6 bg-gradient-to-t from-orange-400 to-rose-400 md:h-screen md:w-2/5 '>
				<div className='md:hidden flex flex-col justify-center  h-full'>
					<h1 className='font-bold text-5xl text-center mb-1'>
						Não possui uma conta?
					</h1>
					<p className='text-center text-gray-500 font-medium'>
						Não perca tempo, inscreva-se agora mesmo!
					</p>
				</div>
			</div>
			<main className='w-full  md:w-3/5 '>
				<div className='flex flex-col justify-evenly items-center w-3/4 mx-auto h-full'>
					<div className='hidden md:block'>
						<h1 className='font-bold text-5xl text-center mb-1'>
							Ainda não possui uma conta?
						</h1>
						<p className='text-center text-gray-500 font-medium'>
							Não perca tempo, inscreva-se agora mesmo!
						</p>
					</div>
					<div className='w-full  mt-4 md:mt-0 '>
						<Input
							label='Nome'
							placeholder='Insira seu nome'
							type='text'
						/>
						<Input
							label='Email'
							placeholder='Insira seu email'
							type='text'
						/>
						<Input
							label='Senha'
							placeholder='Insira sua senha'
							type='password'
						/>
					</div>
					<div className='w-3/4'>
						<Button className='w-full'>Criar minha conta</Button>
						<div className='text-center  m-1 text-sm text-zinc-600 font-bold flex items-center justify-center gap-2'>
							<div className='w-6/12 h-px bg-gray-300'></div>
							<p>OU</p>
							<div className='w-6/12 h-px bg-gray-300'></div>
						</div>
						<Button
							onClick={() => router.push('/')}
							className='w-full '
						>
							Voltar para o login
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default SignUp;
