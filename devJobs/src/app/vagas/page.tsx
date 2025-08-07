'use client';

import React, { useState, useEffect } from 'react';
import AsideVagas from '@/components/vagasPage/aside';
import DescriptionVagas from '@/components/vagasPage/description';
import { VagasProps } from '../utils/interface';

export default function Vagas() {
  const [vagas, setVagas] = useState<VagasProps[]>([]);
  const [vagaSelecionada, setVagaSelecionada] = useState<VagasProps | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/listVagas', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setVagas(Array.isArray(data) ? data : []));
  }, []);
	
	return(
		<main className='flex flex-col justify-center align-center'>
			<article className='flex text-white justify-center mb-10 mt-10'>
				<h1 className='text-center mt-5 mb-2 font-extrabold text-6xl'>Vagas</h1>
			</article>

			<div className='flex flex-row gap-5 mb-20 mx-20'>

				<AsideVagas vagas={vagas} onSelect={setVagaSelecionada} />

				<article className='flex flex-col items-center gap-3'>
					<div className='flex flex-row items-center text-white  border border-blue-800 rounded-2xl shadow-2xl h-85 w-320 py-15 px-15'>
						<div>
							<form action="" className='flex flex-col gap-7'>
								<div className='flex flex-row justify-evenly gap-5'>
									<label htmlFor="" className='flex flex-col font-extrabold gap-2 mb-4'>
										CNPJ
										<input 
											type="text" 
											placeholder='Digite seu CNPJ, Nome da Empresa' 
											className='bg-gray-500 font-bold text-start w-120 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
										/>
									</label>

									<label htmlFor="" className='flex flex-col font-extrabold gap-2 mb-4 w-80'>
										Data de Abertura
										<input 
											type="date" 
											className='bg-gray-500 font-bold px-15 py-3 border border-blue-950 rounded-lg shadow-2xl' 
										/>
									</label>

									<label htmlFor="" className='flex flex-col font-extrabold gap-2 mb-4'>
										Localização
										<input 
											type="text" 
											placeholder='Digite a localização desejada' 
											className='bg-gray-500 font-bold w-80 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' 
										/>
									</label>
								</div>

								<div className='flex flex-row gap-7 ml-8'>
									<label htmlFor="" className='flex font-extrabold flex-col gap-2 mb-4'>
										Cargo
										<select name="cargo" id="" className='flex bg-gray-500 px-12 py-3 font-bold border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'>
											<option value="">Selecione</option>
											<option value="devBack">Desenvolvedor Back-End</option>
											<option value="devFront">Desenvolvedor Front-End</option>
											<option value="devFull">Desenvolvedor Full-Stack</option>
											<option value="devMobile">Desenvolvedor Mobile</option>
											<option value="devData">Desenvolvedor de Dados</option>
											<option value="devDevops">DevOps</option>
										</select>
									</label>

									<label htmlFor="" className='flex flex-col font-extrabold gap-2 mb-4'>
										Senioridade
										<select name="senioridade" id="" className='flex font-bold bg-gray-500 w-60 px-12 py-3 border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'>
											<option value="">Selecione</option>
											<option value="Junior">Junior</option>
											<option value="Pleno">Pleno</option>
											<option value="Penior">Senior</option>
											<option value="Especialista">Especialista</option>
											<option value="TechLead">Tech Lead</option>
										</select>
									</label>

									<label htmlFor="" className='flex flex-col font-extrabold gap-2 mb-4'>
										Modalidade
										<select name="modalidade" id="" className='flex font-bold bg-gray-500 w-60 px-12 py-3 border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'>
											<option value="">Selecione</option>
											<option value="presencial">Presencial</option>
											<option value="remoto">Remoto</option>
											<option value="hibrido">Híbrido</option>
										</select>
									</label>
								</div>
							</form>

							<button type="submit" className='bg-blue-950 hover:bg-blue-800 hover:cursor-pointer text-white font-bold py-2 px-15 border border-blue-950 rounded-lg translate-x-240 shadow-2xl'>Buscar</button>
						
						</div>
					</div>

					<DescriptionVagas vaga={vagaSelecionada} />
					
				</article>
			</div>
		</main>
	)
}
// <article className='flex flex-col text-white mt-10 gap-5'>
// 	<h3 className='text-center text-4xl font-extrabold'>Não encontrou sua vaga?</h3>
// 	<p className='text-center font-bold'>Altere os dados de filtragem ou cadastre uma nova vaga clicando <a href="/vagas/cadastrarVaga" className='text-blue-200 underline hover:text-blue-400'>aqui</a>
// 	</p>
// </article>