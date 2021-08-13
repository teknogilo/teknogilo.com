import { useState, useEffect } from "react"
import Link from 'next/link'

export default function Navbar() {
    const [navBackground, setNavBackground] = useState(false)

    const [showSideBar, setShowSideBar] = useState(false)

    const [dark, setDark] = useState(false)
    
    const handleClick = () => {
        setShowSideBar(!showSideBar)
    }

    const handleDark = (value) => {

        localStorage.setItem('dark',value)
        
        setDark(value)

        const html = document.querySelector('html')

        if(value){
            html.classList.add('dark')
            html.classList.remove('light')
        }
        if(!value){
            html.classList.add('light')
            html.classList.remove('dark')
        }
    }
    
    useEffect(() => {

        handleDark(dark || localStorage.getItem('dark') == 'true' ? true : false)

        const changeBackground = () => {
            if(window.scrollY >= 1){
                setNavBackground(true)
            }else{
                setNavBackground(false)
            }
        }
        changeBackground()

        window.addEventListener('scroll', changeBackground);


        return () => {
            window.removeEventListener('scroll', changeBackground);
        }

    }, [])

    return (
        <>
            <div className="w-full py-4 bg-purple transition-all duration-500">
                <div className="container mx-auto text-center">
                    <a className="text-semibold text-white font-mono border-b">Website under construction!</a>
                </div>
            </div>
            <nav className={`w-full py-2 lg:py-4 bg-white dark:bg-dark dark:text-gray-100 transition-all duration-500 transform ${navBackground ? "" : ""}`}>
                <div className="container px-2 mx-auto lg:flex lg:items-center lg:w-4/5">

                    <div className="flex justify-between p-2 items-center"> 
                        <Link href="/">
                            <a className="font-bold font-mono mr-auto"><a className="text-4xl text-purple">T</a>eknogilo</a>
                        </Link>

                        <button className="flex focus:outline-none p-1 rounded opacity-50 lg:hidden items-center text-3xl text-gray-700 dark:text-gray-100" onClick={handleClick}>
                            <ion-icon name={ showSideBar ? "close": "menu" }/>
                        </button>
                    </div>
                    <div className={`lg:flex flex-col lg:flex-row lg:ml-6 lg:mr-auto gap-y-1 font-medium text-center lg:text-left ${showSideBar ? "flex" : "hidden"}`}>
                        
                        <Link href="/live">
                            <a className="p-2 outline-none	lg:mx-4 lg:mx-2 border-transparent border-b-2 hover:border-purple">Home</a>
                        </Link>

                        <Link href="/about">
                            <a className="p-2 outline-none	lg:mx-4 lg:mx-2 border-transparent border-b-2 hover:border-purple">About</a>
                        </Link>

                    </div>

                    <div className={`lg:flex flex-col lg:flex-row lg:ml-auto gap-y-1 font-medium text-center lg:text-left ${showSideBar ? "flex" : "hidden"}`}>
                        <Link href="/join">
                            <a className="py-2 px-5 mx-2 rounded-full bg-purple text-white border hover:bg-white hover:text-purple hover:border-purple">Join us</a>
                        </Link>
                    </div>

                </div>
            </nav>
        </>
    )
}