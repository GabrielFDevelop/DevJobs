'use client';
import { VagasProps } from '@/app/utils/interface';

interface AsideVagasProps {
  vagas: VagasProps[];
  onSelect: (vaga: VagasProps) => void;
}

export default function AsideVagas({ vagas, onSelect }: AsideVagasProps) {
  return (
    <main>
      <aside className='flex flex-col items-center border border-blue-800 rounded-2xl shadow-2xl h-250 py-10 w-100 overflow-y-auto [&::-webkit-scrollbar]:w-0.5 [&::-webkit-scrollbar-track]:bg-blue-900 [&::-webkit-scrollbar-thumb]:bg-gray-950'>
        <div className='flex items-center justify-center w-full pb-10 border-b border-blue-950 rounded-2xl shadow-2xl px-25'>
          <h2 className='text-center text-white font-bold text-4xl'>Escolha uma vaga</h2>
        </div>
        <div className='flex flex-col w-full justify-center gap-4'>
          {vagas.length === 0 ? (
            <span className="text-white font-bold">Nenhuma vaga cadastrada.</span>
          ) : (
            vagas.map((vaga) => (
              <div 
                onClick={() => onSelect(vaga)}
                key={vaga.id} 
                className='flex flex-col gap-1 text-white w-full border-b-2 p-4 border-blue-500 rounded-2xl shadow-2xl'
              >
                <h3 className='text-center font-bold'>
                  {vaga.titulo}
                  {vaga.senioridade && <span className='text-gray-400'> - {vaga.senioridade}</span>}
                </h3>
                <div className='flex flex-col items-start'>
                  {vaga.modalidade && <span><b>Modalidade: </b>{vaga.modalidade}</span>}
                  {vaga.empresa && <span><b>Empresa: </b>{vaga.empresa}</span>}
                  {vaga.localizacao && <span><b>Localização: </b>{vaga.localizacao}</span>}
                </div>
              </div>
              ))
          )}
        </div>
      </aside>
    </main>
  )
}