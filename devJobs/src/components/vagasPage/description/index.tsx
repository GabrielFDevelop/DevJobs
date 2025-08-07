'use client';

import React, { useState } from 'react';
import { VagasProps } from '@/app/utils/interface';

interface DescriptionVagasProps {
  vaga: VagasProps | null;
}

export default function DescriptionVagas({ vaga }: DescriptionVagasProps) {
  return(
    <main className='flex  border text-white border-blue-800 rounded-2xl shadow-2xl h-162 w-320 py-2'>
      <article className='flex flex-col px-5 py-5 gap-6 overflow-y-auto [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-track]:bg-blue-900 [&::-webkit-scrollbar-thumb]:bg-gray-950'>
        {vaga ? (
          <>
            <h2 className='text-center text-3xl font-extrabold'>{vaga.titulo}</h2>

            <div>
              <h3 className='text-start text-2xl font-bold'>Empresa</h3>
              <p className='text-start font-medium'>{vaga.empresa}</p>
            </div>

            <div className='flex flex-col gap-4'>
              <h3 className='text-start text-2xl font-bold'>Descrição da Vaga</h3>
              <p className='text-start font-medium'>{vaga.descricao}</p>
            </div>

            <div>
              <h3 className='text-start text-2xl font-bold'>Salario</h3>
              <p className='text-start font-medium'>{vaga.salario}</p>
            </div>
            
            <div>
              <h3 className='text-start text-2xl font-bold'>Benefícios</h3>
              <p className='text-start font-medium'>{vaga.beneficios}</p>
            </div>

            <div>
              <h3 className='text-start text-2xl font-bold'>Como se candidatar</h3>
              <p className='text-start font-medium'>Detalhes</p>
            </div>
          </>
        ) : (	
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className='text-center text-4xl font-extrabold'>Selecione uma vaga para ver os detalhes</h2>
          </div>
        )}
      </article>
    </main>
  )
}