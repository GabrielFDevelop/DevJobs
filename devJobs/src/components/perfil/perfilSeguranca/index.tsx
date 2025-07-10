import style from './perfilSeguranca.module.css';
import React from 'react';

export default function PerfilSeguranca() {
  return (
    <main className={style.contentSegurancaPerfil}>
      <section className={style.sectionTitle}>
        <h1 className={style.titleSegurancaPerfil}>Segurança</h1>
      </section>
      <section className={style.contentSegurancaPerfil}>
        <ul className={style.listSegurancaPerfil}>
          <li>
            <label  className={style.spanItemListConfigPerfil}>
              <p>Deseja excluir seu perfil?</p>
              <button className={style.buttonDeletePerfil} type="submit">Excluir Perfil</button>
            </label>
          </li>
        </ul>
      </section>
    </main>
  )
}