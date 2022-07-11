import Head from 'next/head'


const addJsonLd = () => {
    return {
        __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SandboxSG",
        "url": "https://SandboxSG.com",
        "logo": "https://SandboxSG.com/src/img/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "",
            "contactType": "",
            "areaServed": "SG",
            "availableLanguage": "en"
        },
        "sameAs": "https://SandboxSG.com"
    }`
    }
}

<head>

</head>
export default function SEO() {
    return (
        <Head>
            {/* <!--  Schema Org  --> */}
            <script type="application/ld+json"
                dangerouslySetInnerHTML={addJsonLd()}
                key="item-jsonld"

            />


            {/* <!-- Title --> */}
            <title>Hackathons and Competitions in Singapore - SandboxSG</title >

            {/* <!-- Required meta tags --> */}
            <meta charset="UTF-8" />
            <meta name="title" content="Hackathons and Competitions in Singapore - SandboxSG" />
            <meta name="description" content="With SandboxSG, you can discover the latest free hackathons &amp; coding competitions in Singapore. All hackathons listed on SandboxSG are free to participate!" />
            <meta name="keywords" content="Singapore Hackathons, Hackathon Singapore, Hackathons, Singapore, SandboxSG, Hackathons SG, SG" />
            <meta name="robots" content="index, follow" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="author" content="https://SandboxSG.com" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://SandboxSG.com" />


            {/* <!-- Primary Meta Tags --> */}

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://SandboxSG.com" />
            <meta property="og:title" content="Hackathons and Competitions in Singapore - SandboxSG" />
            <meta property="og:description" content="With SandboxSG, you can discover the latest free hackathons &amp; coding competitions in Singapore. All hackathons listed on SandboxSG are free to participate!" />
            <meta property="og:image" content="https://sandboxsg.com/src/img/logo.png" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://SandboxSG.com" />
            <meta property="twitter:title" content="Hackathons and Competitions in Singapore - SandboxSG" />
            <meta property="twitter:description" content="With SandboxSG, you can discover the latest free hackathons &amp; coding competitions in Singapore. All hackathons listed on SandboxSG are free to participate!" />
            <meta property="twitter:image" content="https://sandboxsg.com/src/img/logo.png" />

            {/* <!-- Favicon --> */}
            <link rel="apple-touch-icon" sizes="57x57" href="src/favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="src/favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="src/favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="src/favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="src/favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="src/favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="src/favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="src/favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="src/favicon/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="src/favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="src/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="src/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="src/favicon/favicon-16x16.png" />
            {/* <link rel="manifest" href="src/favicon/manifest.json" /> */}
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="src/favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
        </Head >
    )
}
