import Head from 'next/head'
import Title from '../components/title'


export default function Contact() {
    return (
        <>
        <Head>
                <title>Alain Pellaux - Y&apos;a rien ici !</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                    <Title />
                </div>
                <div>
                    <h3 className="text-midred-500 uppercase font-bold text-3xl pb-4">Perdu !</h3>
                    <p className="text-white text-lg pb-2">Désolé mais c&apos;est le trou noir par ici ! Petit conseil fait marche arrière, ferme la porte et ne reviens plus jamais sur cette page :)</p>
                </div>
            </div>
        </>
    )
}
