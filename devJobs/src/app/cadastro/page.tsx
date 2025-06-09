import style from './cadastro.module.css';

export default async function telaCadastro() {
    return (
        <div className={style.bodyCadastro}>
            <div className={style.topCadastro}>
                <h1 className={style.titleCadastro}>Faça seu cadastro no nosso site para encontrar as vagas certas para você!</h1>
            </div>
            <div className={style.boxCadastro}>
                <h1 className={style.titleCadastroForm}>Insira os dados solicitados abaixo</h1>
                <form className={style.formCadastro}>
                    <label>
                        <p>Nome:</p>
                        <input type='text' name='nome' className={style.inputNome}/>
                    </label>
                    <label>
                        <p>CPF:</p>
                        <input type='text' name='cpf' className={style.inputCpf}/>
                    </label>
                    <label>
                        <p>Email:</p>
                        <input type='email' name='email' className={style.inputEmail}/>
                    </label>
                    <label>
                        <p>Senha:</p>
                        <input type='password' name='senha' className={style.inputSenha}/>
                    </label>
                    <label>
                        <p>Confirme a senha:</p>
                        <input type='password' name='confirmeSenha' className={style.inputConfirmaSenha}/>
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