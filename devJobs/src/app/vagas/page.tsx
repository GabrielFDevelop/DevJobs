interface VagasProps {
	id: string;
	titulo: string;
	empresa: string;
	cargo: string;
	senioridade: string;
	modalidade: string;
	localizacao: string;
}

export default async function Vagas() {

	const response = await fetch('http://localhost:3001/listVagas', {cache: 'no-store'});  // chamando a api e desabilitando o cache
	const data = await response.json();
	
	const vagas: VagasProps[] = Array.isArray(data) ? data : []; // convertendo para json
	
	return(
		<main className='flex flex-col justify-center align-center'>
			<article className='flex text-white justify-center mb-10 mt-10'>
				<h1 className='text-center mt-5 mb-2 font-extrabold text-6xl'>Vagas</h1>
			</article>

			<div className='flex flex-row gap-5 mb-20 mx-20'>

				<aside className='flex flex-col items-center border border-blue-800 rounded-2xl shadow-2xl h-250 py-10 w-180 overflow-y-scroll'>
					<div className='flex items-center justify-center w-full pb-10 border-b border-blue-950 rounded-2xl shadow-2xl px-25'>
						<h2 className='text-center text-white font-bold text-4xl'>Escolha uma vaga</h2>
					</div>
					<div className='flex flex-col w-full justify-center gap-4 p-4 border-b-2 border-blue-500 rounded-2xl shadow-2xl'>
						{vagas.length === 0 ? (
              <span className="text-white font-bold">Nenhuma vaga cadastrada.</span>
            ) : (
              vagas.map((vaga) => (
								<div key={vaga.id} className='flex flex-col gap-1 text-white'>
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
					<article className='flex flex-col text-white mt-10 gap-5'>
						<h3 className='text-center text-4xl font-extrabold'>Não encontrou sua vaga?</h3>
						<p className='text-center font-bold'>Altere os dados de filtragem ou cadastre uma nova vaga clicando <a href="/vagas/cadastrarVaga" className='text-blue-200 underline hover:text-blue-400'>aqui</a>
						</p>
					</article>

					{/* <article className='flex flex-col border text-white border-blue-800 rounded-2xl shadow-2xl h-162 w-320 gap-6 py-15 px-15 overflow-y-scroll scroll-behavior-smooth'>
						<h2 className='text-center text-4xl font-extrabold'>Titulo da Vaga</h2>
						<div className='flex flex-col gap-4'>
							<h3 className='text-start text-3xl font-bold'>Descrição da Vaga</h3>
							<p className='text-start text-2xl font-medium'>Detalhes</p>
						</div>
						<div>
							<h3 className='text-start text-3xl font-bold'>Requisitos</h3>
							<p className='text-start text-2xl font-medium'>Detalhes</p>
						</div>
						<div>
							<h3 className='text-start text-3xl font-bold'>Benefícios</h3>
							<p className='text-start text-2xl font-medium'>Detalhes</p>
						</div>
						<div>
							<h3 className='text-start text-3xl font-bold'>Informações Adicionais</h3>
							<p className='text-start text-2xl font-medium'>Detalhes</p>
						</div>
						<div>
							<h3 className='text-start text-3xl font-bold'>Como se candidatar</h3>
							<p className='text-start text-2xl font-medium'>Detalhes</p>
						</div>
					</article> */}
				</article>
			</div>
		</main>
	)
}