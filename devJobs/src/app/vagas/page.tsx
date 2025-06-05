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

    const response = await fetch('https://devjobs.io/api/jobs')  //preciso criar uma api pra chamar aqui
    const data: ResponseProps = await response.json()

    console.log(data);
    
    return(
        <div>
            <h1 className='text-center mt-5 mb-2 font-bold text-3xl'>Vagas</h1>
            <div className="flex flex-col gap-4 mx-2">
                {data.vaga.map(data => (
                    <div key={data.id} className='bg-gray-200 p-4 rounded-md'>
                        <h2 className='font-bold'>{data.title}</h2>
                        <p>{data.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}