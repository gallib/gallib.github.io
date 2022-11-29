import Link from 'next/link'

export default function Title() {
    return (
        <>
            <h1 className="text-6xl md:text-8xl text-white uppercase">
                <span className="block">Alain</span>
                <span>Pellaux</span>
            </h1>
            <div className="w-16 h-2 mt-5 bg-midred-500"></div>
            <div className="mt-10">
                <Link href="https://github.com/gallib">
                    <a className="mr-10">
                        <img
                            className="inline-block"
                            src="/github.svg"
                            alt="Me retrouver sur GitHub"
                            width="50px"
                            height="50px"
                        />
                    </a>
                </Link>
                <Link href="https://twitter.com/gallib_net">
                    <a className="mr-10">
                        <img
                            className="inline-block"
                            src="/twitter.svg"
                            alt="Me retrouver sur Twitter"
                            width="50px"
                            height="50px"
                        />
                    </a>
                </Link>
                <Link href="https://ch.linkedin.com/in/alainpellaux">
                    <a className="mr-10">
                        <img
                            className="inline-block"
                            src="/linkedin.svg"
                            alt="Me retrouver sur LinkedIn"
                            width="50px"
                            height="50px"
                        />
                    </a>
                </Link>
                <Link href="https://tooting.ch/@iciAlain">
                    <a rel="me">
                        <img
                            className="inline-block"
                            src="/mastodon.svg"
                            alt="Me retrouver sur Mastodon"
                            width="50px"
                            height="50px"
                        />
                    </a>
                </Link>
            </div>
        </>
    )
}