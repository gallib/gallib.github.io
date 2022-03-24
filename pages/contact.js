import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Title from '../components/title'
import envelopLogo from '../public/envelop.svg'


export default function Contact() {
    return (
        <>
        <Head>
                <title>Alain Pellaux - Me contacter</title>
                <meta name="og:title" content="Alain Pellaux - Accueil" />
            </Head>
            <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                    <Title />
                </div>
                <div>
                    <h3 className="text-midred-500 uppercase font-bold text-3xl pb-4">Me contacter</h3>
                    <p className="text-white text-lg pb-3">Pour me contacter rien de plus simple, les réseaux sociaux fonctionnent bien !</p>
                    <p className="text-white text-lg">Sinon il reste le bon vieux mail.</p>
                    <div className="pt-10">
                        <Link href="mailto:contact@alainpellaux.me">
                            <a>
                                <Image
                                    src={envelopLogo}
                                    alt="Me contacter par email"
                                    width={50}
                                    height={50}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
