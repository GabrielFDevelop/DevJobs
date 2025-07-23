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
		<div>
			<article className='flex items-center text-white justify-center mb-20 mt-20'>
				<h1 className='text-center mt-5 mb-2 font-extrabold text-5xl'>Vagas</h1>
			</article>
		</div>
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