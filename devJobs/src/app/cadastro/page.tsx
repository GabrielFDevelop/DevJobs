import style from './cadastro.module.css';

export default async function telaCadastro() {
	return (
		<div className={style.bodyCadastro}>
			<div className={style.boxCadastro}>
			<div className={style.topCadastro}>
				<h1 className={style.titleCadastro}>Realize seu cadastro</h1>
			</div>
				<h1 className={style.titleCadastroForm}>Insira os dados solicitados abaixo</h1>
				<form className={style.formCadastro}>
					<label>
						<p className={style.textLabel}>Nome:</p>
						<input type='text' name='nome' className={style.inputNome} placeholder='Digite seu nome completo'/>
					</label>
					<label>
						<p className={style.textLabel}>CPF:</p>
						<input type='text' name='cpf' className={style.inputCpf} placeholder='Digite seu CPF'/>
					</label>
					<label>
						<p className={style.textLabel}>Email:</p>
						<input type='email' name='email' className={style.inputEmail} placeholder='seuemail@exemplo.com'/>
					</label>
					<label>
						<p className={style.textLabel}>Senha:</p>
						<input type='password' name='senha' className={style.inputSenha} placeholder='Digite sua senha'/>
					</label>
					<label>
						<p className={style.textLabel}>Confirme a senha:</p>
						<input type='password' name='confirmeSenha' className={style.inputConfirmaSenha} placeholder='Confirme sua senha'/>
					</label>
					<button type='submit' name='buttonCadastro' className={style.buttonCadastro}>Cadastrar</button>
				</form>
				<div className={style.boxRedirectLogin}>
					<h2 className={style.textRedirectLogin}>Já tem uma conta?</h2>
					<a className={style.buttonRedirectLogin} href="/login">Faça login</a>
				</div>
			</div>
		</div>
	)
}