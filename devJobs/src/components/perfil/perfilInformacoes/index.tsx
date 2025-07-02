import ImgPerfil from '@/components/header/headerIcons/imgIconPerfil/iconPerfil';
import style from '../../../app/perfil/perfil.module.css';

export function PerfilInformacoes(){
  return(
    <div className={style.contentItemMenuPerfil}>
      <div>
        <h1 className={style.titlePerfil}>Informações do Perfil</h1>
      </div>
      <div className={style.contentInfoPerfil}>
        <span className={style.spanInfoPerfil}>
          <ImgPerfil width={200} />
          <div className={style.textInfoPerfil}>
            <p><em>Nome do Usuário</em></p>
            <p>Email: <em>exemplo@exemplo.com</em></p>
            <p>Celular: <em>(xx) xxxxx-xxxx</em> </p>
          </div>
          <div className={style.textInfoPerfil}>
            <p>Profissão: <em>Exemplo do Exemplo</em></p>
            <p>Empresa: <em>Exemplo do Exemplo</em></p>
          </div>
        </span>
      </div>
      <div className={style.contentInfoPerfil}>  
        <span className={style.spanInfoPerfil}>
          <div className={style.textInfoPerfil}>
            <p>Rua: <em>Exemplo do Exemplo</em></p>
            <p>Bairro: <em>Exemplo do Exemplo</em></p>
          </div>
          <div className={style.textInfoPerfil}>
            <p>Cidade: <em>Exemplo do Exemplo</em></p>
            <p>Estado: <em>Exemplo do Exemplo</em></p>
          </div>
          <div className={style.textInfoPerfil}>
            <p>CEP: <em>xxxxx-xxx</em></p>
          </div>
        </span>
      </div>
    </div>
  )
}