import Link from 'next/link';
import ImgVagas from './headerIcons/imgVagas';
import ImgHeaderHome from './headerIcons/imgHeaderHome';
import ImgDevJ from './headerIcons/imgIconDevJ/imgIconDevJ';

export function Header(){
	return (
		<header className="flex justify-center align-center px-2 border-b-2 border-blue-700 border-gradient bg-linear-to-br from-blue-9500 to-blue-700 to-gradient text-white">
			<div className='flex flex-row justify-center items-center w-full gap-50'>
				<div  className='pl-10 flex items-center hover:scale-x-110 transition-all duration-600'>
					<Link href={"/"} >
						<span	className="flex items-center gap-2">
							<ImgDevJ width={40} />
							<h2 className='text-2xl font-extrabold text-justify'>DevJobs</h2>
						</span>
					</Link>
				</div>
				<div className='flex items-center justify-center'>
					<nav>
						<ul className="flex items-center justify-center">
							<li className='flex items-center gap-1 py-2 border-b-2 border-transparent hover:border-blue-500 transition-all duration-1200'>
								<Link href={"/"} className='text-white px-3 hover:text-gray-300 transform-3d hover:scale-105 transition-all duration-400 ease-in-out'>
									<span className="flex items-center gap-2">
										Home
										<ImgHeaderHome width={30} />
									</span>
								</Link>
							</li>    
							<li className='flex items-center gap-1 py-2 border-b-2 border-transparent hover:border-blue-500 transition-all duration-1200'>
								<Link href={"/vagas"} className='text-white px-3 hover:text-gray-300 transform-3d hover:scale-105 transition-all duration-400 ease-in-out'>
									<span className="flex items-center gap-2">
										Vagas
										<ImgVagas width={30} />
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