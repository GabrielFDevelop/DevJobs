import Link from 'next/link';
import ImgPerfil from './headerIcons/iconPerfil';

export function Header(){
	return (
		<header className="flex px-2 py-4 bg-gray-700 text-white">
			<div className='flex items-center justify-between w-full'>
				<div  className='pl-10'>
					<h2 className='text-3xl font-bold'>DevJobs</h2>
				</div>
				<div className='flex items-center justify-center pr-50'>
					<nav>
						<ul className="flex items-center justify-center gap-8">
							<li>
								<Link href={"/"} className='text-white text-2xl hover:text-gray-300 transform-3d hover:scale-110 transition-all duration-300 ease-in-out'>
									Home
								</Link>
							</li>    
							<li>
								<Link href={"/vagas"} className='text-white text-2xl hover:text-gray-300 transform-3d hover:scale-110 transition-all duration-300 ease-in-out'>
									Vagas
								</Link>
							</li>
							<li>
								<Link href={"/cadastro"} className='text-white text-2xl hover:text-gray-300 transform-3d hover:scale-110 transition-all duration-300 ease-in-out'>
									Cadastre-se
								</Link>
							</li>
							<li className='flex items-center gap-1 '>
								<Link href={"/perfil"} className='text-white mr-10 text-2xl hover:text-gray-300 transform-3d hover:scale-105 transition-all duration-400 ease-in-out'>
									Perfil
									<ImgPerfil />
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}