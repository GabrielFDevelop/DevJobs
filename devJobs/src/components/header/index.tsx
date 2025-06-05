import Link from 'next/link'

export function Header(){
    return (
        <header className="flex px-2 py-4 bg-gray-700 text-white">
            <div className='flex items-center justify-between w-full'>
                <div>
                    <h2 className='pl-10'>DevJobs</h2>
                </div>
                <nav>
                    <ul className="flex items-center justify-center gap-4 pr-10">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>    
                        <li>
                            <Link href="/vagas">
                                Vagas
                            </Link>
                        </li>
                        <li >
                            <Link href="/perfil">
                                Perfil
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}