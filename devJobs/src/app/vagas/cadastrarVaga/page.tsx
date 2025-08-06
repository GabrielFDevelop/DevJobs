'use client';

import React, { useState } from 'react';

export default function CadastrarVaga() {
  const [formData, setFormData] = useState({
    tituloVaga: '',
    descricaoVaga: '',
    cargoVaga: '',
    experienciaVaga: '',
    modalidadeVaga: '',
    empresaVaga: '',
    cnpjVaga: '',
    localizacaoVaga: '',
    salarioVaga: '',
    beneficiosVaga: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode enviar os dados para uma API
    console.log('Dados da vaga:', formData);

    fetch('/localhost:3001/registerVaga', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    // Resetar o formulário (opcional)
    setFormData({
      tituloVaga: '',
      descricaoVaga: '',
      cargoVaga: '',
      experienciaVaga: '',
      modalidadeVaga: '',
      empresaVaga: '',
      cnpjVaga: '',
      localizacaoVaga: '',
      salarioVaga: '',
      beneficiosVaga: ''
    });
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
          <label htmlFor='tituloVaga' className='flex flex-col text-white font-extrabold gap-2'>
            Título da Vaga
            <input
              name="titulo"
              value={formData.tituloVaga}
              onChange={handleChange}
              type="text" 
              placeholder='Digite o título da vaga' 
              className='bg-gray-200 text-black font-normal text-start w-150 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
            />
          </label>

          <label htmlFor='descricaoVaga' className='flex flex-col text-white font-extrabold gap-2'>
            Descrição
            <textarea 
              name="descricao" 
              value={formData.descricaoVaga}
              onChange={handleChange}
              placeholder='Descreva a vaga' 
              className='bg-gray-200 text-black font-normal text-start w-250 h-60 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl'>
            </textarea>
          </label>

          <div className='flex flex-row gap-5 justify-between'>
            <label htmlFor='cargoVaga' className='flex flex-col text-white font-extrabold gap-2'>
              Cargo
              <select 
                name="cargo" 
                value={formData.cargoVaga}
                onChange={handleChange}
                className='bg-gray-200 text-black font-normal w-80 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'
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

            <label htmlFor='experienciaVaga' className='flex flex-col text-white font-extrabold gap-2'>
              Experiência
              <select 
                name="experiencia" 
                value={formData.experienciaVaga}
                onChange={handleChange}
                className='bg-gray-200 text-black font-normal w-80 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'
              >
                <option value="">Selecione o nível de experiência</option>
                <option value="junior">Junior</option>
                <option value="pleno">Pleno</option>
                <option value="senior">Senior</option>
                <option value="especialista">Especialista</option>
                <option value="techlead">Tech Lead</option>
              </select>
            </label>

            <label htmlFor='modalidadeVaga' className='flex flex-col text-white font-extrabold gap-2'>
              Modalidade
              <select 
                name="modalidade" 
                value={formData.modalidadeVaga}
                onChange={handleChange}
                className='bg-gray-200 text-black font-normal w-80 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'
              >
                <option value="">Selecione a modalidade</option>
                <option value="presencial">Presencial</option>
                <option value="remoto">Remoto</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </label>
          </div>

          <label htmlFor='empresaVaga' className='flex flex-col text-white font-extrabold gap-2'>
            Empresa
            <input 
              name="empresa"
              value={formData.empresaVaga}
              onChange={handleChange}
              type="text" 
              placeholder='Digite o nome da empresa' 
              className='bg-gray-200 text-black font-normal text-start w-250 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
            />
          </label>

          <label htmlFor="cnpjVaga" className='flex flex-col text-white font-extrabold gap-2'>
            CNPJ
            <input 
              name="cnpj"
              value={formData.cnpjVaga}
              onChange={handleChange}
              type="text" 
              placeholder='Digite o CNPJ da empresa' 
              className='bg-gray-200 text-black font-normal text-start w-250 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
            />
          </label>

          <label htmlFor='localizacaoVaga' className='flex flex-col text-white font-extrabold gap-2'>
            Localização
            <input 
              name='localizacao'
              value={formData.localizacaoVaga}
              onChange={handleChange}
              type="text" 
              placeholder='Digite a localização da vaga' 
              className='bg-gray-200 text-black font-normal text-start w-250 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl'
            />
          </label>

          <label htmlFor='salarioVaga' className='flex flex-col text-white font-extrabold gap-2'>
            Salário
            <input 
              name='salario'
              value={formData.salarioVaga}
              onChange={handleChange}
              type="text" 
              placeholder='Digite a média salarial' 
              className='bg-gray-200 text-black font-normal text-start w-250 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
            />
          </label>

          <label htmlFor='beneficiosVaga' className='flex flex-col text-white font-extrabold gap-2'>
            Benefícios
            <textarea 
              name='beneficios'
              value={formData.beneficiosVaga}
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