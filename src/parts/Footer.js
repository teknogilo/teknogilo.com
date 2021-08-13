import { useEffect, useState } from "react"
import { animateScroll as scroll } from 'react-scroll'
import Link from 'next/link'

export default function Footer() {

    const [over, setOver] = useState(false)

    useEffect(() => {

        const showButton = () => {
            if(window.scrollY >= 1){
                setOver(true)
            }else{
                setOver(false)
            }
        }
        showButton()

        window.addEventListener('scroll', showButton);


        return () => {
            window.removeEventListener('scroll', showButton);
        }

    }, [])

    return (

        

        <>
        
            <div className="min-w-full bg-white dark:bg-dark dark:text-gray-100 transition-all duration-500 py-5">
                <div className="container px-2 mx-auto lg:w-4/5">
                    <div className="flex flex-col items-center">

                        <div className="container items-center">
                            <footer className="transition duration-500 ease-in-out transform rounded-lg">
                                <div className="flex flex-col flex-wrap py-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                                    <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                                        <div className="pr-2 lg:pr-8 lg:px-6">
                                            <a href="/" className=" focus:outline-none">
                                            <div className="inline-flex items-center">
                                                <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
                                                </div>
                                                <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> Teknogilo </h2>
                                            </div>
                                            </a>
                                            <p className="mb-10 text-xs font-semibold tracking-widest text-black uppercase title-font ">We Learn Here and Now!</p>
                                            <span className="inline-flex justify-start sm:mb-12">
                                            <Link href="https://facebook.com/teknogilo">
                                                <a className="hover:text-purple">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                    </svg>
                                                </a>
                                            </Link>

                                            <Link href="https://twitter.com/teknogilocom">
                                            <a className="ml-3 hover:text-purple">
                                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                                </path>
                                                </svg>
                                            </a>
                                            </Link>

                                            <Link href="https://instagram.com/teknogilo">
                                            <a className="ml-3 hover:text-purple">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                                </svg>
                                            </a>
                                            </Link>

                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 ">
                                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                                            <h1 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Links </h1>
                                            <nav className="mb-10 space-y-4 list-none">
                                                <li>
                                                    <Link href="https://app.teknogilo.com">
                                                        <a className=" mr-1 text-sm rounded-sm hover:text-purple focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Apps</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://blog.teknogilo.com">
                                                        <a className=" mr-1 text-sm rounded-sm hover:text-purple focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Articles</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://covid.teknogilo.com">
                                                        <a className=" mr-1 text-sm rounded-sm hover:text-purple focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Covid Tracker</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="https://status.teknogilo.com">
                                                        <a className=" mr-1 text-sm rounded-sm hover:text-purple focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Status</a>
                                                    </Link>
                                                </li>
                                            </nav>
                                        </div>
                                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                                            <h1 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Company </h1>
                                            <nav className="mb-10 space-y-4 list-none">
                                                <li>
                                                    <Link href="/">
                                                        <a className=" mr-1 text-sm rounded-sm hover:text-purple focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Home</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about">
                                                        <a className=" mr-1 text-sm rounded-sm hover:text-purple focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">About</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/join">
                                                        <a className=" mr-1 text-sm rounded-sm hover:text-purple focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Join us</a>
                                                    </Link>
                                                </li>
                                            </nav>
                                        </div>
                                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                                            <h1 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> APPS </h1>
                                            <nav className="mb-10">
                                            <div className="flex flex-wrap space-y-4">
                                                <button className="inline-flex items-center px-5 py-3 text-black rounded-xl bg-blueGray-50 hover:bg-black hover:text-white focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z">
                                                    </path>
                                                </svg>
                                                <span className="flex flex-col items-start ml-4 leading-none">
                                                    <span className="mb-1 text-xs">GET IT ON</span>
                                                    <span className="font-medium title-font">Google Play</span>
                                                </span>
                                                </button>
                                                <button className="inline-flex items-center px-5 py-3 text-black rounded-xl bg-blueGray-50 hover:bg-black hover:text-white focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                                                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z">
                                                    </path>
                                                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z">
                                                    </path>
                                                </svg>
                                                <span className="flex flex-col items-start ml-4 leading-none">
                                                    <span className="mb-1 text-xs">Download on the</span>
                                                    <span className="font-medium title-font">App Store</span>
                                                </span>
                                                </button>
                                            </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full bg-purple text-center text-white py-3">
                <div className="flex flex-row text-sm font-medium justify-center items-center">
                    © 2021 powered by <a href="https://teknogilo.com" className="flex m-1 border-b border-one">Teknogilo.</a>
                </div>
            </div>

            <button className={`${over ? "visible translate-y-0" : "invisible translate-x-20"}  fixed rounded-lg bg-opacity-70 bg-dark text-white dark:bg-white dark:text-dark shadow-lg p-3 flex right-5 bottom-5 z-50 focus:outline-none transition-all ease-in-out duration-700 transform`} onClick={() => scroll.scrollToTop()}><ion-icon name="chevron-up"/></button>
        </>
    )
}