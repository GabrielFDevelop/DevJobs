import style from './page.module.css';
import ImgLogin from '@/components/imgLogin';

export default function LoginPage() {
    return(
        <div className={style.bodyLogin}>
            <h1 className={style.titleLogin}>Seja bem vindo!</h1>
            <div className={style.boxLogin}>
                <div className={style.boxListLogin}>
                    <ul className={style.listLogin}>
                        <li>
                            <p>Email</p>
                            <input type="text" className={style.inputEmail} placeholder='seuemail@exxxemplo.com' />
                        </li>
                        <li>
                            <p>Senha</p>
                            <input type="text" className={style.inputSenha} placeholder='Digite sua senha' />    
                        </li>
                        <li>
                            <button type='submit' className={style.buttonEntrar}>Entrar</button>
                        </li>
                    </ul>
                    <a href='/trocaSenha'>Esqueceu a senha?</a>
                </div>
                <div className={style.boxRedirectCadastro}>
                    <h3 className={style.textRedirectCadastro}>Ainda não tem uma conta?</h3>
                    <a className={style.buttonRedirectCadastro} href='/cadastro'>Cadastre-se</a>
                </div>
            </div>
        </div>
    )
}