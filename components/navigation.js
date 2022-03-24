import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'

export default function Navigation() {
  return (
    <header className="flex justify-between items-center px-5 py-7">
            <div className="flex w-20 h-20 relative">
                <Image
                    layout="fill"
                    objectFit="fill"
                    quality={100}
                    src={logo}
                    alt="Alain Pellaux"
                />
            </div>
            <div>
                <Link href="/">
                    <a className="uppercase text-xl text-white hover:nav-decoration">Accueil</a>
                </Link>
                <Link href="/contact">
                    <a className="uppercase text-xl text-white ml-10 hover:nav-decoration">Contact</a>
                </Link>
            </div>
    </header>
  )
}