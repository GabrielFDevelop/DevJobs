'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import style from './login.module.css';
import ImgBoxLogin from '@/components/header/headerIcons/imgBoxLogin/imgBoxLogin';

//Aqui está sendo definido o tipo de dados que o formulário irá receber,
type FormData = {
	email: string;
	senha: string;
};

export default function LoginPage() {
	//Aqui está sendo utilizado o hook useForm do react-hook-form para gerenciar o estado do formulário.
	const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

	const handleLogin = async (data: FormData) => {
	
		try {
			const res = await fetch('http://localhost:3001/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: data.email, password: data.senha }),
			});

			const responseData = await res.json();

			if (!res.ok) {
				alert(responseData.error || 'Erro ao fazer login');
				return;
			}

			// Armazenando o token e os dados do usuário no localStorage
			localStorage.setItem('token', responseData.token);
			localStorage.setItem('email', data.email);
			localStorage.setItem('user', JSON.stringify(responseData.user));
			
			alert('Login realizado com sucesso!');
			window.location.href = '/perfil';
		} catch (error) {
			console.error('Erro ao fazer login:', error);
			alert('Erro na requisição.');
		}
	};

	return(
		<div className={style.bodyLogin}>
			<div className={style.boxLogin}>
				<div className={style.topBoxLogin}>
					<h1 className={style.titleLogin}>Seja bem vindo!</h1>
				</div>
				<div className={style.midBoxLogin}>
					<div className={style.boxListLogin}>
						<form className={style.formLogin} onSubmit={handleSubmit(handleLogin)}>
								<input 
									type='text'
									className={style.inputEmail} 
									placeholder='Digite seu Email' 
									{...register('email', { required: 'Email é obrigatório!', 
										pattern: { 
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
											message: 'Email inválido!' 
										},
									})}
								/>
								{errors.email && <p className={style.error}>{errors.email.message}</p>}

								<input 
									type='password'
									className={style.inputSenha} 
									placeholder='Digite sua senha' 
									{...register('senha', { required: 'Senha é obrigatória!' })}
								/>
								{errors.senha && <p className={style.error}>{errors.senha.message}</p>}

								<button type='submit' name='buttonLogin' className={style.buttonEntrar}>Entrar</button>
						</form>
						<a href='/trocaSenha'>Esqueceu a senha?</a>
						<div className={style.boxRedirectCadastro}>
							<h3 className={style.textRedirectCadastro}>Ainda não tem uma conta?</h3>
							<a className={style.buttonRedirectCadastro} href='/cadastro'>Cadastre-se</a>
						</div>
					</div>
					<div className={style.imgBoxLogin}>
						<ImgBoxLogin width={400} />
					</div>
				</div>
			</div>
		</div>
	)
}