import Head from 'next/head'
import Link from 'next/link'
import Title from '../components/title'

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
                                <img
                                    src="/envelop.svg"
                                    alt="Me contacter par email"
                                    width="50px"
                                    height="50px"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
