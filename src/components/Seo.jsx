import { Head as Helmet } from 'vite-react-ssg'

const SITE_URL = 'https://theoborella.netlify.app'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE, jsonLd }) {
  const fullTitle = `${title} | Théo Borella — Développeur Web Full Stack`
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Théo Borella — Portfolio" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
