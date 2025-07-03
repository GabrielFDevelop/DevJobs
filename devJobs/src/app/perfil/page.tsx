'use client';

import React,{ useState } from 'react';
import style from './perfil.module.css';

import { PerfilInformacoes } from '@/components/perfil/perfilInformacoes';
import PerfilConfiguracoes from '@/components/perfil/perfilConfiguracoes';
import PerfilMinhasVagas from '@/components/perfil/perfilMinhasVagas';

export default function PerfilPage() {

  // Aqui está sendo declarada as seções do menu lateral que são permitidas para validação.
  const allowedSection = ['infoPerfil', 'minhasVagasPerfil', 'configuracoesPerfil', 'sairPerfil'];

  //Aqui está sendo feita a função que vai mudar a seção do menu lateral com validação se a seção está definida ou não.
  const handleSectionChange = (section: string) => {
    if (allowedSection.includes(section)) {
      setActiveSection(section);
    } else {
      console.warn(`Seção inválida: ${section}`);
    }
  };

  //Aqui está sendo declarada a seção ativa do menu lateral com useState( no caso 'InfoPerfil') que permite adicionar um estado que muda com a interação.
  const [activeSection, setActiveSection] = useState('infoPerfil');


  //Aqui está sendo feita a função que vai aparecer na tela o conteúdo correspondente ao menu lateral.
  const renderContent = () => {
    switch (activeSection) {
      case 'infoPerfil':
        return <PerfilInformacoes />;
      case 'minhasVagasPerfil':
        return <PerfilMinhasVagas />;
      case 'configuracoesPerfil':
        return <PerfilConfiguracoes />;
      case 'sairPerfil':
        return <div><em>Ainda tenho que implementar pra sair do perfil AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</em></div>;
      default:
        return null;
    }
  };

  return (
    <div className={style.bodyPerfil}>
      <div className={style.boxPerfil}>
        <aside className={style.menuPerfil}>
          <ul>
            <li className={style.itemListMenuPerfil}>
              <button type='button' onClick={() => handleSectionChange('infoPerfil')} className={style.buttonListMenuPerfil}>Informações do Perfil</button>
            </li>
            <li className={style.itemListMenuPerfil}>
              <button type='button' onClick={() => handleSectionChange('minhasVagasPerfil')} className={style.buttonListMenuPerfil}>Minhas Vagas</button>
            </li>
            <li className={style.itemListMenuPerfil}>
              <button type='button' onClick={() => handleSectionChange('configuracoesPerfil')} className={style.buttonListMenuPerfil}>Configurações</button>
            </li>
            <li className={style.itemListMenuPerfil}>
              <button type='button' onClick={() => handleSectionChange('sairPerfil')} className={style.buttonListMenuPerfil}>Sair</button>
            </li>
          </ul>
        </aside>
        <main className={style.contentSelectedPerfil}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}