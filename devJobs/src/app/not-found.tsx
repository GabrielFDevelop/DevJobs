import Link from "next/link";
import ImgCrossCloud from "@/components/not-found/not-foundicons/crossCloudIcon/crossCloudIcon";
import ImgArrowRight from '@/components/not-found/not-foundicons/arrowRightIcon/arrowRightIcon';
import ImgQuestionIcon from '@/components/not-found/not-foundicons/questionIcon/questionIcon';
import ImgHeaderHome from '@/components/header/headerIcons/imgHeaderHome';

export default function NotFound(){
	return(
		<div className="flex flex-col items-center pt-20 pb-109 justify-center">
			<div className='flex flex-col items-center justify-center text-white p-20 rounded-4xl bg-gray-800 shadow-lg border-2 border-blue-950 hover:outline-blue-800 hover:outline-2 hover:scale-x-110 hover:scale-y-105 transition-all duration-1800'>
				<span className="flex items-center gap-3 mt-20">
					<ImgCrossCloud width={180} />
					<ImgArrowRight width={100} />
					<ImgQuestionIcon width={170} />
				</span>
				<h1 className="text-center font-bold mt-20 text-5xl">404 - Página não encontrada!</h1>
				<p className="mt-3 text-3xl">A página que você está procurando não existe.</p>

				<Link href="/" className='text-2xl'>
					<span className="flex items-center gap-3 mt-10 text-blue-500 hover:text-blue-700 transform-3d hover:scale-120 transition-all ease-in-out duration-00">
						Voltar para Home
						<ImgHeaderHome width={40} />
					</span>
				</Link>
			</div>
		</div>
	)
}