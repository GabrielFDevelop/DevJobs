import React from 'react';
import style from './perfilMinhasVagas.module.css';

export default function PerfilMinhasVagas() {
  return (
    <main className={style.contentMinhasVagasPerfil}>
      <section className={style.sectionTitle}>
        <h1 className={style.titleMinhasVagasPerfil}>Minhas Vagas</h1>
      </section>
      <section className={style.contentBoxVagas}>
        <div className={style.boxVaga}>
          <h2 className={style.boxVagaTitle}><em>Titulo da vaga 1</em></h2>
          <h3 className={style.boxVagaEmpresa}>Empresa:<em>Exemplo 1</em></h3>
          <p className={style.boxVagaDescription}><em>Descrição da vaga 1</em></p>
          <p>Localização:<em>Exemplo 1</em> </p>
          <p>Salário:<em>R$ x.xxx,xx 1</em> </p>
          <p>Data de publicação:<em>xx/xx/xxxx 1</em> </p>
        </div>
        <div className={style.boxVaga}>
          <h2 className={style.boxVagaTitle}><em>Titulo da vaga 2</em></h2>
          <h3 className={style.boxVagaEmpresa}>Empresa:<em>Exemplo 2</em></h3>
          <p className={style.boxVagaDescription}><em>Descrição da vaga 2</em></p>
          <p>Localização:<em>Exemplo 2</em> </p>
          <p>Salário:<em>R$ x.xxx,xx 2</em> </p>
          <p>Data de publicação:<em>xx/xx/xxxx 2</em> </p>
        </div>
        <div className={style.boxVaga}>
          <h2 className={style.boxVagaTitle}><em>Titulo da vaga 3</em></h2>
          <h3 className={style.boxVagaEmpresa}>Empresa:<em>Exemplo 3</em></h3>
          <p className={style.boxVagaDescription}><em>Descrição da vaga 3</em></p>
          <p>Localização:<em>Exemplo 3</em> </p>
          <p>Salário:<em>R$ x.xxx,xx 3</em> </p>
          <p>Data de publicação:<em>xx/xx/xxxx 3</em> </p>
        </div>
      </section>
    </main>
  )
}