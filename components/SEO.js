import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="google-site-verification" content="Fg9RpS4kBQbj9wEoT-XiBzgN-3mrZP0errpVyiznOyA" />
      <link href="https://raw.githubusercontent.com/bandardeterjen/index.html/refs/heads/images/favicon.ico" rel="icon">
      <link href="https://raw.githubusercontent.com/bandardeterjen/index.html/refs/heads/images/apple-touch-icon.png" rel="apple-touch-icon">
    </Head>
  );
}
