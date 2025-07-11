'use client';

import React, { useEffect, useState } from 'react';
import ImgPerfil from '@/components/header/headerIcons/imgIconPerfil/iconPerfil';
import style from './perfilInformacoes.module.css';

// Definindo o tipo de dados do usuário
type User = {
  id: string;
  name: string;
  email: string;
}

export function PerfilInformacoes(){
  // Estado para armazenar os dados do usuário
  const [user, setUser] = React.useState<User | null>(null);

  // Efeito para carregar os dados do usuário do localStorage quando o componente é montado
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div className={style.loading}>Carregando...</div>;
  }

  return(
    <main className={style.contentInfoPerfil}>
      <section>
        <h1 className={style.titleInfoPerfil}>Informações do Perfil</h1>
      </section>
      <section className={style.contentInfoPerfil}>
        <span className={style.spanInfoPerfil}>
          <figure className={style.contentInfoPerfilFoto}>
            <ImgPerfil width={200} />
          </figure>
          <div className={style.textInfoPerfil}>
            <p><em>Nome da Empresa</em></p>
            <p>Email: <em>exemplo@exemplo.com</em></p>
            <p>Celular: <em>(xx) xxxxx-xxxx</em> </p>
          </div>
          <div className={style.textInfoPerfil}>
            <p>CNPJ: <em>xx.xxx.xxx/xxxx-xx</em></p>
            <p>Empresa: <em>Exemplo do Exemplo</em></p>
          </div>
        </span>
      </section>
      <section className={style.contentInfoPerfil}>  
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
      </section>
    </main>
  )
}