import Link from 'next/link';
import ImgVagas from '@/components/header/headerIcons/imgVagas';

export default function Home(){
  return(
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <article className='bg-white rounded-4xl shadow-lg m-10 p-10 h-300 w-full'>
        <div className='flex items-center justify-center mb-20'>
          <h1 className='text-5xl font-bold'>Sobre o Projeto</h1>
        </div>
        <div className='flex align-center bg-gray-100 rounded-2xl p-15 pl-70 mb-7 gap-180'>
          <h2 className='text-3xl font-bold'>Qual o propósito do projeto?</h2>
          <p className='text-2xl'>Texto sobre propósito.</p>
        </div>
        <div className='flex align-center bg-gray-100 rounded-2xl p-15 pl-70 mb-7 gap-180'>
          <h2 className='text-3xl font-bold'>Quais tecnologias foram utilizadas?</h2>
          <p className='text-2xl'>Texto sobre tecnologias.</p>
        </div>
        <div className='flex align-center bg-gray-100 rounded-2xl p-15 pl-70 mb-7 gap-180'>
          <h2 className='text-3xl font-bold'>Como encontrar as vagas para você?</h2>
          <span>
            <p className='text-2xl'>
              Texto sobre como encontrar vagas. <br />
              <Link href="/vagas" className='flex items-center align-center text-gray-700 hover:text-gray-500 transition-colors duration-400'>Clique aqui pra encontrar as vagas para você.</Link>
            </p>
            <ImgVagas width={40} />
          </span>
        </div>
        <div className='flex align-center bg-gray-100 rounded-2xl p-15 pl-70 mb-7 gap-180'>
          <h2 className='text-3xl font-bold'>Como cadastrar uma vaga?</h2>
          <p className='text-2xl'>Texto sobre como cadastrar vagas.</p>
        </div>
        <div className='flex align-center bg-gray-100 rounded-2xl p-15 pl-70 mb-7 gap-180'>
          <h2 className='text-3xl font-bold'>Quem desenvolveu o projeto?</h2>
          <p className='text-2xl'>Texto sobre os desenvolvedores.</p>
        </div>
      </article>
    </div>
  )
}