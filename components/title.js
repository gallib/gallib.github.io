import Link from 'next/link'
import Image from 'next/image'
import githubLogo from '../public/github.svg'
import linkedinLogo from '../public/linkedin.svg'
import twitterLogo from '../public/twitter.svg'

export default function Title() {
  return (
    <>
        <h2 className="text-8xl text-white uppercase">Alain</h2>
        <h2 className="text-8xl text-white uppercase">Pellaux</h2>
        <div className="w-16 h-2 mt-5 bg-midred-500"></div>
        <div className="mt-10">
            <Link href="https://github.com/gallib">
                <a>
                    <Image
                        src={githubLogo}
                        alt="Compte GitHub"
                        width={50}
                        height={50}
                    />
                </a>
            </Link>
            <Link href="https://twitter.com/gallib_net">
                <a className="mx-10">
                    <Image
                        src={twitterLogo}
                        alt="Mon compte Twitter"
                        width={50}
                        height={50}
                    />
                </a>
            </Link>
            <Link href="https://ch.linkedin.com/in/alainpellaux">
                <a>
                    <Image
                        src={linkedinLogo}
                        alt="Mon compte LinkedIn"
                        width={50}
                        height={50}
                    />
                </a>
            </Link>
        </div>
    </>
  )
}