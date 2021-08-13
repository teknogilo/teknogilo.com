import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout (props) {

    const blog = props.blog

    return (
        <>
            <Head>
                <title>Home - Teknogilo</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="keywords" content="Teknogilo"/>
                <meta name="author" content="Khoironi Kurnia Syah"/>

                <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"/>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>

                {/* <!-- Primary Meta Tags --> */}
                <meta name="title" content="Teknogilo"/>
                <meta name="description" content="Teknogilo"/>
                <meta property="og:site_name" content="Teknogilo" key="ogsitename" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="Teknogilo"/>
                <meta property="og:url" content="Teknogilo"/>
                <meta property="og:title" content="Teknogilo"/>
                <meta property="og:description" content="Teknogilo"/>
                <meta property="og:image" content=""/>

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:url" content="Teknogilo"/>
                <meta property="twitter:title" content="Teknogilo"/>
                <meta property="twitter:description" content="Teknogilo"/>
                <meta property="twitter:image" content=""/>

            </Head>
            <Navbar/>
            {props.children}
            <Footer/>
        </>
    )
}