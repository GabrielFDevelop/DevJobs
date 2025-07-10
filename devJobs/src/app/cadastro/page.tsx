'use client';

import { useState } from 'react';
import style from './cadastro.module.css';
import React from 'react';
import ImgBoxCadastro from '@/components/header/headerIcons/imgBoxCadastro';

export default function TelaCadastro() {

	//Aqui está sendo declarado o estado inicial do formulário com useState, que é um hook do React que permite adicionar o estado ao componente funcional. 
	//Isso é usado para armazenar os dados do formulário enquanto o usuário os preenche.
	const [formData, setFormData] = useState({
		nome: '',
		cpf: '',
		email: '',
		senha: '',
		confirmeSenha: '',
	});

	//Aqui está sendo feita a função handleChange que é chamada quando o usuário digita nos campos do formulário.
	//Ela recebe o evento de mudança (e) e atualiza o estado do formData com os valores dos campos correspondentes.
	//O operador spread (...) é usado para manter os outros campos do formulário inalterados.
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	//Aqui está sendo feita a função handleSubmit que é chamada quando o usuário envia o formulário.
	//Ela previne o comportamento padrão do formulário (que é recarregar a página) e verifica se as senhas digitadas coincidem.
	//Se as senhas não coincidirem, um alerta é exibido. Se tudo estiver correto, uma requisição POST é feita para o backend para cadastrar o usuário.
	//Se a requisição for bem-sucedida, um alerta de sucesso é exibido e o usuário é redirecionado para a página de login.
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (formData.senha !== formData.confirmeSenha) {
			alert('As senhas não coincidem!');
			return;
		}

		try {
			const response = await fetch('http://localhost:3001/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.nome,
					email: formData.email,
					password: formData.senha,
				}),
			});

			const data = await response.json();

			if (!response.ok) {
				alert(data.error || 'Erro ao cadastrar usuário');
				return;
			}

			alert('Usuário cadastrado com sucesso!');
			// Redirecionar para login se quiser:
			window.location.href = '/login';

		} catch (err) {
			console.error(err);
			alert('Erro ao se conectar com o servidor');
		}
	};

	return (
		<div className={style.bodyCadastro}>
			<div className={style.boxCadastro}>
				<div className={style.topCadastro}>
					<h1 className={style.titleCadastro}>Realize seu cadastro</h1>
					<h2 className={style.titleCadastroForm}>Insira os dados solicitados abaixo</h2>
				</div>
				<div className={style.midBoxCadastro}>
					<div className={style.divFormCadastro}>
						<form className={style.formCadastro} onSubmit={handleSubmit}>
							<label className={style.labelFormCadastro}>
								<p className={style.textLabel}>Nome:</p>
								<input 
									type='text' 
									name='nome' 
									value={formData.nome} 
									onChange={handleChange} 
									required
									className={style.inputNome} 
									placeholder='Digite seu nome completo'
								/>
							</label>

							<label className={style.labelFormCadastro}>
								<p className={style.textLabel}>Email:</p>
								<input 
									type='email' 
									name='email' 
									value={formData.email} 
									onChange={handleChange} 
									required
									pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' 
									title='Por favor, insira um email válido'
									className={style.inputEmail} 
									placeholder='seuemail@exemplo.com'
								/>
							</label>

							<label className={style.labelFormCadastro}>
								<p className={style.textLabel}>Senha:</p>
								<input 
									type='password' 
									name='senha' 
									value={formData.senha}
									onChange={handleChange} 
									required
									className={style.inputSenha} 
									placeholder='Digite sua senha'
								/>
							</label>

							<label className={style.labelFormCadastro}>
								<p className={style.textLabel}>Confirme a senha:</p>
								<input 
									type='password' 
									name='confirmeSenha' 
									value={formData.confirmeSenha}
									onChange={handleChange} 
									required
									pattern={formData.senha} 
									title='As senhas devem coincidir'
									className={style.inputConfirmaSenha} 
									placeholder='Confirme sua senha'
								/>
							</label>

							<button type='submit' name='buttonCadastro' className={style.buttonCadastro}>
								Cadastrar
							</button>

							<div className={style.boxRedirectLogin}>
								<h2 className={style.textRedirectLogin}>Já tem uma conta?</h2>
								<a className={style.buttonRedirectLogin} href="/login">Faça login</a>
							</div>
						</form>
					</div>
					<div className={style.divImgCadastro}>
						<ImgBoxCadastro width={400} />
					</div>
				</div>
			</div>
		</div>
	)
}