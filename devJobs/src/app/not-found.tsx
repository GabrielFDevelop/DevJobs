import Link from "next/link"

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-20 text-3xl">404 - Página não encontrada!</h1>
            <p className="mt-3">A página que você está procurando não existe.</p>

            <Link href="/">
                Voltar para Home
            </Link>
        </div>
    )
}