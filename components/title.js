import Link from 'next/link'

export default function Title() {
    return (
        <>
            <h2 className="text-8xl text-white uppercase">Alain</h2>
            <h2 className="text-8xl text-white uppercase">Pellaux</h2>
            <div className="w-16 h-2 mt-5 bg-midred-500"></div>
            <div className="mt-10">
                <Link href="https://github.com/gallib">
                    <a>
                        <img
                            className="inline-block"
                            src="/github.svg"
                            alt="Mon compte GitHub"
                            width="50px"
                            height="50px"
                        />
                    </a>
                </Link>
                <Link href="https://twitter.com/gallib_net">
                    <a className="mx-10">
                        <img
                            className="inline-block"
                            src="/twitter.svg"
                            alt="Mon compte Twitter"
                            width="50px"
                            height="50px"
                        />
                    </a>
                </Link>
                <Link href="https://ch.linkedin.com/in/alainpellaux">
                    <a>
                        <img
                            className="inline-block"
                            src="/linkedin.svg"
                            alt="Mon compte LinkedIn"
                            width="50px"
                            height="50px"
                        />
                    </a>
                </Link>
            </div>
        </>
    )
}