import React from 'react';
import style from './perfil.module.css';

export default function PerfilPage() {
  return (
    <div className={style.bodyPerfil}>
      <div className={style.boxPerfil}>
        <div className={style.menuPerfil}>
          <ul>
            <li className={style.itemListMenuPerfil}>
              <h2>Informações do Perfil</h2>
            </li>
            <li className={style.itemListMenuPerfil}>
              <h2>Minhas Vagas</h2>
            </li>
            <li className={style.itemListMenuPerfil}>
              <h2>Configurações</h2>
            </li>
            <li className={style.itemListMenuPerfil}>
              <h2>Sair</h2>
            </li>
          </ul>
        </div>
        <div className={style.contentItemMenuPerfil}>
          <h1 className={style.titlePerfil}>Informações do Perfil</h1>
        </div>
      </div>
    </div>
  );
}