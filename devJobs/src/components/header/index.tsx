import Link from 'next/link';
import ImgPerfil from './headerIcons/imgIconPerfil/iconPerfil';
import ImgBoxCadastro from './headerIcons/imgBoxCadastro';
import ImgBoxLogin from './headerIcons/imgBoxLogin/imgBoxLogin';
import ImgVagas from './headerIcons/imgVagas';
import ImgHeaderHome from './headerIcons/imgHeaderHome';
import ImgDevJ from './headerIcons/imgIconDevJ/imgIconDevJ';

export function Header(){
	return (
		<header className="flex px-2 py-4 bg-gray-700 text-white">
			<div className='flex items-center justify-between w-full'>
				<div  className='pl-10'>
					<Link href={"/"} >
						<span	className="flex items-center gap-2">
							<ImgDevJ width={60} />
							<h2 className='text-3xl font-bold'>DevJobs</h2>
						</span>
					</Link>
				</div>
				<div className='flex items-center justify-center pr-30'>
					<nav>
						<ul className="flex items-center justify-center gap-8">
							<li className='flex items-center gap-1 '>
								<Link href={"/"} className='text-white mr-3 text-2xl hover:text-gray-300 transform-3d hover:scale-105 transition-all duration-400 ease-in-out'>
									<span className="flex items-center gap-2">
										Home
										<ImgHeaderHome width={60} />
									</span>
								</Link>
							</li>    
							<li className='flex items-center gap-1 '>
								<Link href={"/vagas"} className='text-white mr-5 text-2xl hover:text-gray-300 transform-3d hover:scale-105 transition-all duration-400 ease-in-out'>
									<span className="flex items-center gap-2">
										Vagas
										<ImgVagas width={60} />
									</span>
								</Link>
							</li>
							<li className='flex items-center gap-1 '>
								<Link href={"/cadastro"} className='text-white mr-3 text-2xl hover:text-gray-300 transform-3d hover:scale-105 transition-all duration-400 ease-in-out'>
									<span className="flex items-center gap-2">
										Cadastre-se
										<ImgBoxCadastro width={60} />
									</span>
								</Link>
							</li>
							<li className='flex items-center gap-1 '>
								<Link href={"/login"} className='text-white mr-3 text-2xl hover:text-gray-300 transform-3d hover:scale-105 transition-all duration-400 ease-in-out'>
									<span className="flex items-center gap-2">
										Login
										<ImgBoxLogin width={60} />
									</span>
								</Link>
							</li>
							<li className='flex items-center gap-1 '>
								<Link href={"/perfil"} className='text-white mr-3 text-2xl hover:text-gray-300 transform-3d hover:scale-105 transition-all duration-400 ease-in-out'>
									<span className="flex items-center gap-2">
										Perfil
										<ImgPerfil width={60} />
									</span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}