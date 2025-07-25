interface VagasProps {
	id: number;
	title: string;
	body: string;
	userId: number;
}

interface ResponseProps {
	vaga: VagasProps[];
}

export default async function Vagas() {

	// const response = await fetch('https://devjobs.io/api/jobs')  //preciso criar uma api pra chamar aqui
	// const data: ResponseProps = await response.json() // chamando a api e convertendo para json

	
	return(
		<main className='flex flex-col justify-center align-center'>
			<article className='flex text-white justify-center mb-10 mt-10'>
				<h1 className='text-center mt-5 mb-2 font-extrabold text-6xl'>Vagas</h1>
			</article>
			<div className='flex flex-row gap-10 mb-20 mx-20'>
				<aside className='flex flex-col items-center border border-blue-800 rounded-2xl shadow-2xl h-250 py-15 w-180'>
					<div className='flex items-center justify-center w-full pb-15 border-b border-blue-950 rounded-2xl shadow-2xl px-25'>
						<h2 className='text-center text-white font-bold text-4xl'>Escolha uma vaga</h2>
					</div>
					<div className='flex flex-col items-center justify-center gap-4 p-4'>
						<h3 className='text-center text-white'>Título da vaga</h3>
						
					</div>
				</aside>
				<article className='flex flex-col items-center gap-3'>
					<div className='flex text-white  border border-blue-800 rounded-2xl shadow-2xl h-85 w-350 py-15 px-15'>
						<form action="" className='flex flex-col gap-7'>
							<div className='flex flex-row justify-evenly gap-5'>
								<label htmlFor="" className='flex flex-col font-extrabold gap-2 mb-4'>
									CNPJ
									<input type="text" placeholder='Digite seu CNPJ, Nome da Empresa' className='bg-gray-500 font-bold text-start w-120 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' />
								</label>
								<label htmlFor="" className='flex flex-col font-extrabold gap-2 mb-4 w-80'>
									Data de Abertura
									<input type="date" className='bg-gray-500 font-bold px-15 py-3 border border-blue-950 rounded-lg shadow-2xl' />
								</label>
								<label htmlFor="" className='flex flex-col font-extrabold gap-2 mb-4'>
									Localização
									<input type="text" placeholder='Digite a localização desejada' className='bg-gray-500 font-bold w-80 px-5 py-3 border border-blue-950 rounded-lg shadow-2xl' />
								</label>
							</div>
							<div className='flex flex-row justify-evenly gap-5'>
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
									Experiência
									<select name="experiencia" id="" className='flex font-bold bg-gray-500 w-60 px-12 py-3 border border-blue-950 rounded-lg shadow-2xl appearance-none cursor-pointer'>
										<option value="">Selecione</option>
										<option value="junior">Junior</option>
										<option value="pleno">Pleno</option>
										<option value="senior">Senior</option>
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
					</div>
					<article className='flex flex-col border text-white border-blue-800 rounded-2xl shadow-2xl h-162 w-350 gap-6 py-15 px-15 overflow-y-scroll scroll-behavior-smooth'>
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
					</article>
				</article>
			</div>
		</main>
	)
}
{/* <div className="flex flex-col gap-4 mx-2">
	{data.vaga.map(data => (
		<div key={data.id} className='bg-gray-200 p-4 rounded-md'>
			<h2 className='font-bold'>{data.title}</h2>
			<p>{data.body}</p>
		</div>
	))}
</div> */}