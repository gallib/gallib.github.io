import Head from 'next/head'
import Title from '../components/title'

export default function Home() {
    return (
        <>
            <Head>
                <title>Alain Pellaux - Enseignant et développeur web (PHP, Node.js, React) à Genève, Suisse | Accueil</title>
                <meta name="og:title" content="Alain Pellaux - Enseignant et développeur web (PHP, Node.js, React) à Genève, Suisse | Accueil" />
            </Head>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
                <div>
                    <Title />
                </div>
                <div>
                    <h3 className="text-midred-500 uppercase font-bold text-3xl pb-4">Hello</h3>
                    <p className="text-white text-lg pb-3">Je m’appelle Alain Pellaux. Je suis enseignant dans le secondaire à Genève.</p>
                    <p className="text-white text-lg pb-3">Avant ce changement d&apos;orientation, j&apos;étais un développeur web full-stack. Je faisais principalement du PHP (Laravel, WordPress, Slim Framework), du javascript (NodeJS, React).</p>
                    <p className="text-white text-lg pb-3">Passionné, j’aime expérimenter pour améliorer mes compétences dans ce métier exigeant et qui évolue constamment.</p>
                    <p className="text-white text-lg">Fier papa de deux merveilleux garçons, je passe mon temps libre à m’occuper de ma famille, en plus de pratiquer la course à pied, la via ferrata et le tambour.</p>
                </div>
            </div>
        </>
    )
}
