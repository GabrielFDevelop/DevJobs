'use client';

import React, { useState } from 'react';

export default function CadastrarVaga() {

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    cargo: '',
    senioridade: '',
    modalidade: '',
    empresa: '',
    cnpj: '',
    localizacao: '',
    salario: '',
    beneficios: ''
  });

  // Função para atualizar o estado conforme o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Dados da vaga:', formData);
    try {
      // Aqui você pode enviar os dados para uma API
      const response = await fetch('http://localhost:3001/registerVaga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok){
        const errorText = await response.text();
        console.error('Erro ao cadastrar vaga:', errorText);
        throw new Error('Erro ao cadastrar vaga');
        return;
      }

      // Resetar o formulário (opcional)
      alert('Vaga cadastrada com sucesso!');
      setFormData({
        titulo: '',
        descricao: '',
        cargo: '',
        senioridade: '',
        modalidade: '',
        empresa: '',
        cnpj: '',
        localizacao: '',
        salario: '',
        beneficios: ''
      });
    }catch (error: any) {
      console.error('Erro ao cadastrar vaga:', error);
      alert(`Erro ao cadastrar vaga: ${error?.message || error}`);
      return;
    }
  };

  return (
    <div className='w-full flex flex-col justify-center align-center'>
      <article className='flex items-center justify-center m-10'>
        <h1 className="text-3xl text-white font-bold">
          Cadastrar Vaga
        </h1>
      </article>
      <article className='p-10'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center w-full rounded-lg shadow-lg'>
          <label htmlFor='titulo' className='flex flex-col text-white font-extrabold gap-2'>
            Título da Vaga
            <input
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              type="text" 
              placeholder='Digite o título da vaga' 
              className='bg-gray-200 text-black font-normal text-start w-150 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
              required
            />
          </label>

          <label htmlFor='descricao' className='flex flex-col text-white font-extrabold gap-2'>
            Descrição
            <textarea 
              name="descricao" 
              value={formData.descricao}
              onChange={handleChange}
              placeholder='Descreva a vaga' 
              className='bg-gray-200 text-black font-normal text-start w-250 h-60 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl'
              required>
            </textarea>
          </label>

          <div className='flex flex-row gap-5 justify-between'>
            <label htmlFor='cargo' className='flex flex-col text-white font-extrabold gap-2'>
              Cargo
              <select 
                name="cargo" 
                value={formData.cargo}
                onChange={handleChange}
                className='bg-gray-200 text-black font-normal w-80 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'
                required
              >
                <option value="">Selecione o cargo</option>
                <option value="devBack">Desenvolvedor Back-End</option>
                <option value="devFront">Desenvolvedor Front-End</option>
                <option value="devFull">Desenvolvedor Full-Stack</option>
                <option value="devMobile">Desenvolvedor Mobile</option>
                <option value="devData">Desenvolvedor de Dados</option>
                <option value="devDevops">DevOps</option>
              </select>
            </label>

            <label htmlFor='senioridade' className='flex flex-col text-white font-extrabold gap-2'>
              Senioridade
              <select 
                name="senioridade" 
                value={formData.senioridade}
                onChange={handleChange}
                className='bg-gray-200 text-black font-normal w-80 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'
                required
              >
                <option value="">Selecione o nível de experiência</option>
                <option value="Junior">Junior</option>
                <option value="Pleno">Pleno</option>
                <option value="Senior">Senior</option>
                <option value="Especialista">Especialista</option>
                <option value="TechLead">Tech Lead</option>
              </select>
            </label>

            <label htmlFor='modalidade' className='flex flex-col text-white font-extrabold gap-2'>
              Modalidade
              <select 
                name="modalidade" 
                value={formData.modalidade}
                onChange={handleChange}
                className='bg-gray-200 text-black font-normal w-80 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'
                required
              >
                <option value="">Selecione a modalidade</option>
                <option value="Presencial">Presencial</option>
                <option value="Remoto">Remoto</option>
                <option value="Hibrido">Híbrido</option>
              </select>
            </label>
          </div>

          <label htmlFor='empresa' className='flex flex-col text-white font-extrabold gap-2'>
            Empresa
            <input 
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              type="text" 
              placeholder='Digite o nome da empresa' 
              className='bg-gray-200 text-black font-normal text-start w-250 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl'
              required 
            />
          </label>

          <label htmlFor="cnpj" className='flex flex-col text-white font-extrabold gap-2'>
            CNPJ
            <input 
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              type="text" 
              placeholder='Digite o CNPJ da empresa' 
              className='bg-gray-200 text-black font-normal text-start w-250 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
              required
            />
          </label>

          <label htmlFor='localizacao' className='flex flex-col text-white font-extrabold gap-2'>
            Localização
            <input 
              name='localizacao'
              value={formData.localizacao}
              onChange={handleChange}
              type="text" 
              placeholder='Digite a localização da vaga' 
              className='bg-gray-200 text-black font-normal text-start w-250 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl'
              required
            />
          </label>

          <label htmlFor='salario' className='flex flex-col text-white font-extrabold gap-2'>
            Salário
            <input 
              name='salario'
              value={formData.salario}
              onChange={handleChange}
              type="text" 
              placeholder='Digite a média salarial' 
              className='bg-gray-200 text-black font-normal text-start w-250 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
              required
            />
          </label>

          <label htmlFor='beneficios' className='flex flex-col text-white font-extrabold gap-2'>
            Benefícios
            <textarea 
              name='beneficios'
              value={formData.beneficios}
              onChange={handleChange}
              placeholder='Digite os benefícios oferecidos' 
              className='bg-gray-200 text-black font-normal text-start w-250 h-30 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
            />
          </label>

          <button type="submit" className='bg-blue-600 text-white font-bold px-6 cursor-pointer py-3 rounded-lg shadow-lg w-230 hover:bg-blue-700 transition duration-300'>Cadastrar Vaga</button>
        </form>
      </article>
    </div>
  )
}