import style from './login.module.css';
import ImgBoxLogin from '@/components/header/headerIcons/imgBoxLogin/imgBoxLogin';

export default function LoginPage() {
	return(
		<div className={style.bodyLogin}>
			<div className={style.boxLogin}>
				<div className={style.topBoxLogin}>
					<h1 className={style.titleLogin}>Seja bem vindo!</h1>
				</div>
				<div className={style.midBoxLogin}>
					<div className={style.boxListLogin}>
						<ul className={style.listLogin}>
							<li>
								<p>Email</p>
								<input type='text' name='email' className={style.inputEmail} placeholder='seuemail@exxxemplo.com' />	
							</li>
							<li>
								<p>Senha</p>
								<input type='password' name='senha' className={style.inputSenha} placeholder='Digite sua senha' />    
							</li>
							<li>
								<button type='submit' name='buttonLogin' className={style.buttonEntrar}>Entrar</button>
							</li>
						</ul>
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