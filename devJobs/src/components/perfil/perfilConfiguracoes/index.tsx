'use client';

import React from 'react';
import style from './perfilConfiguracoes.module.css';

export default function PerfilConfiguracoes() {
  return (
    <main className={style.contentConfigPerfil}>
      <section>
        <h1 className={style.titleConfigPerfil}>Configurações do Perfil</h1>
      </section>
      <section className={style.contentConfigPerfil}>
        <ul className={style.listConfigPerfil}>
          <li>
            <label>
              <span className={style.spanItemListConfigPerfil}>
                Ativar as notificações?<input className={style.inputNotificacaoListConfigPerfil} type="checkbox" />
              </span>
            </label>
          </li>
          <li>
            <label>
              <span className={style.spanItemListConfigPerfil}>
                Qual o idioma de sua preferência?<input className={style.inputIdiomaListConfigPerfil} type="checkbox" />
              </span>
            </label>
          </li>
          <li>
            <label>
              <span className={style.spanItemListConfigPerfil}>
                Qual tema deseja usar? Claro ou escuro?<input className={style.inputTemaListConfigPerfil} type="checkbox" />
              </span>
            </label>
          </li>
          <li>
            <label>
              <span className={style.spanItemListConfigPerfil}>
                Segurança<input className={style.inputItemListConfigPerfil} type="checkbox" />
              </span>
            </label>
          </li>
        </ul>
      </section>
    </main>
  )
}