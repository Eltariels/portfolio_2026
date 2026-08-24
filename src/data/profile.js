export const profile = {
  name: 'Théo Borella',
  title: 'Développeur Web Full Stack & No-Code',
  status: 'À la recherche d\'une alternance',
  bio: "Tombé dans la marmite du code dès la 5ème, je cherche une alternance en développement web full stack et/ou no-code.",
  bioLong:
    "Développeur web depuis le collège, je me forme aujourd'hui en Mastère Développement Full Stack à Lyon après un BUT MMI à Chambéry. J'ai déjà accompagné plusieurs entreprises sur des projets complets : sites vitrines, e-commerce, plateformes sur-mesure, en no-code (WordPress, Elementor, Drupal) comme en code (React, Node, MongoDB). Basé à Ambérieu-en-Bugey (Ain), mobile sur Chambéry, Lyon, Grenoble et Annecy.",
  base: 'Ambérieu-en-Bugey, Ain, FR',
  specialty: 'WordPress · Dev Web Full Stack & No-Code',
  location: 'Chambéry, Lyon, Grenoble, Annecy',
  email: 'theo.borella.hc@gmail.com',
  phone: '06 74 60 36 50',
  linkedin: 'https://www.linkedin.com/in/theo-borella-developer-web/',
  site: 'https://portfolio-borella-theo.vercel.app/',
  cvUrl: '/cv/CV_Theo_Borella.pdf',
  cvPrintUrl: '/cv/CV_Theo_Borella_print.pdf',
  hobbies:
    "Savoyard qui aime monter des PC de A à Z, tryhard du code, skier et speedrunner.",
}

export const experiences = [
  {
    title: 'Alternance Développeur Web No-Code',
    company: 'Digital Jouss',
    place: 'Bordeaux (télétravail)',
    period: '2025 - 2026',
    items: [
      'Développement et intégration de sites divers en no-code sous WordPress (Elementor, Crocoblock)',
      'Site e-commerce sous WooCommerce',
      'Site vitrine',
      "Site d'association",
      'Plateforme et application web en no-code',
      'Intégration pixel perfect de maquettes Figma',
    ],
    sites: [
      { label: 'fromageriejunges.com', url: 'https://fromageriejunges.com', image: '/images/projects/fromageriejunges.webp' },
      { label: 'impression-edition-gironde.com', url: 'https://impression-edition-gironde.com', image: '/images/projects/impression-edition-gironde.webp' },
      { label: 'distrisafe.fr', url: 'https://www.distrisafe.fr', image: '/images/projects/distrisafe.webp' },
      { label: 'dgb-courtage.com', url: 'https://dgb-courtage.com', image: '/images/projects/dgb-courtage.webp' },
      { label: 'lyceesaintefamille.com', url: 'https://lyceesaintefamille.com', image: '/images/projects/lyceesaintefamille.webp' },
      { label: 'transicio.com', url: 'https://www.transicio.com', image: '/images/projects/transicio.webp' },
    ],
  },
  {
    title: 'Alternance Développeur Web Full-Stack',
    company: 'Liongency',
    place: 'Ambérieu-en-Bugey',
    period: '2024 - 2025',
    items: [
      'Développement intégral de sites web sous WordPress pour des particuliers / entreprises',
    ],
    sites: [
      { label: 'au-creux-des-montagnes.com', url: 'https://au-creux-des-montagnes.com', image: '/images/projects/au-creux-des-montagnes.webp' },
      { label: 'd-et-c-plomberie.fr', url: 'https://d-et-c-plomberie.fr/plombier-amberieu-en-bugey/', image: '/images/projects/d-et-c-plomberie.webp' },
      { label: 'browsandcie.fr', url: 'https://browsandcie.fr', image: '/images/projects/browsandcie.webp' },
    ],
  },
  {
    title: 'Alternance Développeur Web Full-Stack',
    company: 'La Bonne Agence',
    place: 'Grenoble',
    period: '2023 - 2024',
    items: [
      "Création d'un site web sous WordPress en optimisant la personnalisation pour la cliente",
      'Conception et développement de deux projets full stack sous WordPress en tant que développeur principal',
      "Développement d'un site web complet sous Drupal, back-end et front-end",
      'Intégration de maquettes et développement front-end pour un autre site sous Drupal',
    ],
    sites: [
      { label: 'araymond-mobility.com', url: 'https://www.araymond-mobility.com/en', image: '/images/projects/araymond-mobility.webp' },
      { label: 'exosens.com', url: 'https://www.exosens.com/fr', image: '/images/projects/exosens.webp' },
      { label: 'opinel.com', url: 'https://www.opinel.com/fr-fr/', image: '/images/projects/opinel.webp' },
      { label: 'fromont-briens.com', url: 'https://fromont-briens.com', image: '/images/projects/fromont-briens.webp' },
    ],
  },
]

export const formations = [
  {
    degree: 'BAC+5 Mastère — Développement full stack',
    school: 'WEBTECH Lyon (Next Campus)',
    period: '2024 - 2027',
  },
  {
    degree: 'BAC+3 BUT MMI — spécialité Développement Web',
    spec: 'Métiers du Multimédia et de l\'Internet',
    school: 'IUT de Chambéry',
    period: '2021 - 2024',
  },
  {
    degree: 'BAC STI2D — option SIN',
    spec: 'Systèmes d\'Information et Numérique',
    school: 'LPO Louis Lachenal, Argonay',
    period: 'Juin 2021',
  },
]

// level: 1 = notions, 2 = operationnel, 3 = confirme, 4 = maitrise (quotidien)
export const skillGroups = [
  {
    label: 'Développement Web',
    skills: [
      { name: 'HTML5', level: 4 },
      { name: 'CSS3', level: 4 },
      { name: 'PHP', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'phpMyAdmin', level: 3 },
      { name: 'JavaScript', level: 3 },
      { name: 'Node.js', level: 2 },
      { name: 'MongoDB + Express', level: 2 },
      { name: 'React JSX', level: 3 },
      { name: 'Vite', level: 3 },
      { name: 'Tailwind', level: 3 },
      { name: 'GitHub / GitLab', level: 3 },
      { name: 'Docker', level: 1 },
      { name: 'CMD', level: 2 },
      { name: 'Ubuntu', level: 2 },
      { name: 'SEO', level: 3 },
    ],
  },
  {
    label: 'No-Code & CMS',
    skills: [
      { name: 'WordPress', level: 4 },
      { name: 'Elementor', level: 4 },
      { name: 'Crocoblock', level: 3 },
      { name: 'WooCommerce', level: 3 },
      { name: 'Drupal', level: 2 },
    ],
  },
  {
    label: 'Design & Intégration',
    skills: [
      { name: 'Figma', level: 3 },
      { name: 'Adobe XD', level: 2 },
      { name: 'Photoshop', level: 2 },
      { name: 'Pixel Perfect', level: 3 },
    ],
  },
]

export const tools = [
  'VS Code · Suite JetBrains (PHPStorm, WebStorm, Fleet...)',
  'Suite Adobe (Ps, Ai, Id, Xd, Figma)',
  'Unity · Unreal Engine · Blender',
]
