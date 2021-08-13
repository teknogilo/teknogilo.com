import { useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';

export default function Custom404() {
    
    useEffect(() => {

        document.querySelector('html').classList.add(localStorage.getItem('dark') == 'true' ? 'dark' : 'light')

    }, [])
    
    return (
        <div>
            <Head>
                <title>404 Not Found - Teknogilo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="keywords" content="404 - Teknogilo"/>
                <meta name="author" content="Nekomata Koroni"/>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
                <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"/>
            </Head>
            <div className="flex min-w-full min-h-screen justify-center items-center bg-white text-gray-700 dark:bg-dark dark:text-gray-100">
                <div className="container px-8 mx-auto">
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 mx-auto">

                        <Fade top cascade>
                        <div className="text-center md:text-left md:m-auto mt-8">
                            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Hi, </h1>
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase  mt-0">You Seem to be Lost!</h1>
                            <div className="py-8">
                                <p className="text-gray-500">
                                    The page you're looking for isn't available.
                                </p>
                                <p className="text-gray-500">
                                    Try searching again or use the Go Back button below.
                                </p>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <Link href="/">
                                    <button className="flex px-4 py-2 mb-6 rounded font-bold bg-yellow-300 text-yellow-800 items-center focus:outline-none gap-x-1" type="button" style={{ transition: "all .15s ease" }}>
                                        <ion-icon name="arrow-back-circle"/> Go Back
                                    </button>
                                </Link>
                            </div>
                        </div>
                        </Fade>

                        <div className="py-auto m-auto">
                            <Fade bottom>
                                <Image src="/images/svg/404.svg" alt="404 Not Found" width={500} height={500} />
                            </Fade>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}