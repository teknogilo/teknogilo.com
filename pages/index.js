import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <>

        <Layout title="Home">
        
            <section id="hero" className="w-full">
            <div className="container px-4 mx-auto md:w-3/4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 py-12 items-center">

                <div className="flex flex-col gap-y-6">
                    <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-bold">Turn your ideas into reality!</h1>
                    <h2 className="text-lg 2xl:text-2xl text-gray-700">Our vision is to help people share their ideas and turn it into reality. Work with the best software engineer from over the world.</h2>
                    <div className="py-1">
                    <Link href="/join">
                        <button className="flex px-5 py-2 rounded-full font-bold bg-purple text-white items-center focus:outline-none gap-x-1 border hover:bg-white hover:text-purple hover:border-purple" type="button">
                            <ion-icon name="play"/>Join us
                        </button>
                    </Link>
                    </div>
                </div>

                <div className="flex h-72 md:h-96 object-contain items-center justify-center">
                    <Image src="/discuss.svg" alt="SIMPtuber banner" width={720} height={360}/>
                </div>

                </div>
            </div>
            </section>

            <section id="team" className="w-full">
                <div className="container px-4 mx-auto">
                    <h1 className="text-4xl text-center font-bold py-8">Team</h1>
                    <div className="container items-center px-5 py-12 lg:px-20">
                        <div className="flex flex-wrap gap-y-20">
                            <div className="w-full mx-auto my-4 bg-white lg:w-1/3">
                                <div className="p-6 text-center">
                                <img alt="team" className="flex-shrink-0 object-cover object-center w-32 h-32 mx-auto -mt-20 rounded-full shadow-xl aboslute" src="https://avatars.githubusercontent.com/u/55708473?v=4"/>
                                <h2 className="pt-4 mb-2 text-xs font-semibold tracking-widest text-black uppercase title-font">Khoironi Kurnia Syah</h2>
                                <h2 className="pt-4 mb-4 text-xs text-gray-700 tracking-widest text-black uppercase title-font">Founder</h2>
                                <p className="mb-3 text-base leading-relaxed text-blueGray-500">Tukang nulis bug</p>
                                <p></p>
                                </div>
                            </div>

                            <div className="w-full mx-auto my-4 bg-white lg:w-1/3">
                                <div className="p-6 text-center">
                                <img alt="team" className="flex-shrink-0 object-cover object-center w-32 h-32 mx-auto -mt-20 rounded-full shadow-xl aboslute" src="https://avatars.githubusercontent.com/u/70875733?v=4"/>
                                <h2 className="pt-4 mb-2 text-xs font-semibold tracking-widest text-black uppercase title-font">M. Husni Nur Fadillah</h2>
                                <h2 className="pt-4 mb-4 text-xs text-gray-700 tracking-widest text-black uppercase title-font">Co-Founder</h2>
                                <p className="mb-3 text-base leading-relaxed text-blueGray-500">Machine Learning Enthusiast</p>
                                <p></p>
                                </div>
                            </div>

                            <div className="w-full mx-auto my-4 bg-white lg:w-1/3">
                                <div className="p-6 text-center">
                                <img alt="team" className="flex-shrink-0 object-cover object-center w-32 h-32 mx-auto -mt-20 rounded-full shadow-xl aboslute" src="https://avatars.githubusercontent.com/u/86136654?v=4"/>
                                <h1 className="pt-4 mb-2 text-sm font-semibold tracking-widest text-black uppercase title-font">Nekomata Koroni</h1>
                                <h2 className="pt-4 mb-4 text-xs text-gray-700 tracking-widest text-black uppercase title-font">Staff</h2>
                                <p className="mb-3 text-base leading-relaxed text-blueGray-500">I do stream</p>
                                <p></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </section>

        </Layout>
        
        </>
    )
}