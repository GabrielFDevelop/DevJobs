import style from './page.module.css'

export default function LoginPage() {
    return(
        <div className={style.bodyLogin}>
            <div className={style.boxLogin}>
                <h1 className={style.titleLogin}>Login</h1>
                <ul className={style.listLogin}>
                    <li>
                        <p>Email</p>
                        <input className={style.inputEmail} type="text" placeholder='seuemail@exxxemplo.com' />
                    </li>
                    <li>
                        <p>Senha</p>
                        <input className={style.inputSenha} type="text" placeholder='Digite sua senha' />    
                    </li>
                    <a href='/trocaSenha' >Esqueceu a senha?</a>
                    <li>
                        <button className={style.buttonEntrar}>Entrar</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}