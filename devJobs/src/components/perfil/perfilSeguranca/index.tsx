'use client';

import style from './perfilSeguranca.module.css';
import React from 'react';

export default function PerfilSeguranca() {
  
  const handleDelete = async (e: React.FormEvent) => {
    const confirmDelete = window.confirm('Você tem certeza que deseja excluir seu perfil? Esta ação não pode ser desfeita.');
    if (!confirmDelete) {
      return;
    }

    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        alert('Usuário não encontrado.');
        return;
      }

      const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir perfil.');
      }

      localStorage.removeItem('userId');
      alert('Perfil excluido com sucesso!');
      window.location.href = '/login';
    } catch (error) {
      console.error('Erro ao excluir perfil:', error);
      alert('Erro ao excluir perfil.');
    }
  };

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
              <button 
                onClick={handleDelete} 
                className={style.buttonDeletePerfil} 
                type="submit"
              >
                Excluir Perfil
              </button>
            </label>
          </li>
        </ul>
      </section>
    </main>
  )
}