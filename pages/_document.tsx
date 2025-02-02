import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Portofolio Rivandi - Videographer & Photographer</title>
        <meta name="description" content="Portofolio resmi Rivandi, seorang videographer dan photographer. Lihat karya-karya terbaik dalam dunia fotografi dan videografi." />
        <meta name="keywords" content="Rivandi, videographer, photographer, portofolio, fotografi, videografi, karya, foto, video" />
        <meta name="author" content="Rivandi" />

        {/* Open Graph (untuk social media preview) */}
        <meta property="og:title" content="Portofolio Rivandi - Videographer & Photographer" />
        <meta property="og:description" content="Lihat karya terbaik Rivandi, seorang videographer dan photographer profesional yang menciptakan foto dan video berkualitas tinggi." />
        <meta property="og:image" content="/rivandi-og-image.jpg" />
        <meta property="og:url" content="https://portofolio.rivandi.xyz/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
