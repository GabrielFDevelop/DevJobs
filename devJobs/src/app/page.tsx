import Link from 'next/link';

export default function Home(){
  return(
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
        <article className='flex items-center justify-center mb-20 mt-20'>
          <h1 className='text-6xl text-blue-200 font-extrabold'>Sobre o Projeto</h1>
        </article>
        <article className='flex w-full align-center justify-center items-center pt-15 pb-15 pl-40 pr-40 mb-7 gap-150 shadow-2xl border-t border-b border-blue-950 rounded-2xl hover:border-blue-800 transition-colors duration-400'>
          <h2 className='flex text-4xl font-extrabold text-nowrap pl-20 text-blue-50'>Qual o propósito do projeto?</h2>
          <p className='flex text-2xl font-bold text-justify text-white'>
            Este projeto tem como propósito criar e apresentar vagas disponíveis no mercado para desenvolvedores. 
            O projeto foi desenvolvido com o intuito de ajudar desenvolvedores a encontrar oportunidades de trabalho e
            para empresas a encontrar talentos.
            <br />
            Os desenvolvedores podem encaminhar e encontrar as vagas que mais se encaixam com seu perfil, filtrando as vagas de acordo 
            com suas habilidades, localização e experiência.
            <br />
            As empresas podem cadastrar suas vagas para encontrar desenvolvedores que se encaixam com o perfil desejado. 
          </p>
        </article>

        <article className='flex w-full align-center justify-center items-center pt-15 pb-15 pl-40 pr-40 mb-7 gap-150 shadow-2xl border-t border-b border-blue-950 rounded-2xl hover:border-blue-800 transition-colors duration-400'>
          <span className='flex flex-col text-2xl items-center justify-center gap-5 pl-5'>
            <p className='font-bold text-justify text-white'>
              Para procurar a vaga ideal, você pode acessar a página de vagas na aba de pesquisa ou o link abaixo para ser redirecionado e assim utilizar os 
              filtros disponíveis para encontrar a vaga que mais se encaixa com o seu perfil.
            </p>
            <div className='flex items-center justify-center gap-5'>
              <Link href="/vagas" className='flex items-center align-center font-bold justify-center text-gray-300 text-nowrap hover:text-gray-500 transition-colors duration-400'>Clique aqui pra encontrar as vagas para você.</Link>
            </div>
          </span>
          <h2 className='text-4xl font-extrabold text-blue-50 text-nowrap pr-20'>Como encontrar as vagas para você?</h2>
        </article>
        
        <article className='flex w-full align-center justify-center items-center pt-15 pb-15 pl-40 pr-40 mb-7 gap-150 shadow-2xl border-t border-b border-blue-950 rounded-2xl hover:border-blue-800 transition-colors duration-400'>
          <h2 className='text-4xl font-extrabold text-nowrap text-blue-50'>Como cadastrar uma vaga?</h2>
          <p className='text-2xl font-bold text-justify text-white'>
            Para poder cadastrar suas vagas disponíveis, basta acessar a aba de vagas 
            e clicar em "Cadastrar vaga". 
            <br />
            Ao clicar, será aberto um formulário de cadastro que apresentará as informações 
            necessárias para o cadastro da vaga no site.
          </p>
        </article>

        <article className='flex w-full align-center justify-center items-center pt-15 pb-15 pl-40 pr-40 mb-7 gap-150 shadow-2xl border-t border-b border-blue-950 rounded-2xl hover:border-blue-800 transition-colors duration-400'>
          <p className='flex text-2xl font-bold text-justify text-white'>Texto sobre tecnologias.</p>
          <h2 className='text-4xl font-extrabold text-nowrap text-blue-50'>Quais tecnologias foram utilizadas?</h2>
        </article>

        <article className='flex w-full align-center justify-center items-center pt-15 pb-15 pl-40 pr-40 mb-7 gap-150 shadow-2xl border-t border-b border-blue-950 rounded-2xl hover:border-blue-800 transition-colors duration-400'>
          <h2 className='text-4xl font-extrabold text-nowrap text-blue-50'>Quem desenvolveu o projeto?</h2>
          <p className='text-2xl font-bold text-justify text-white'>Texto sobre os desenvolvedores.</p>
        </article>
    </div>
  )
}