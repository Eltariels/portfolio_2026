import { ViteReactSSG } from 'vite-react-ssg'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import RouteError from './components/RouteError'
import './index.css'

export const createRoot = ViteReactSSG(
  {
    routes: [
      {
        path: '/',
        element: <App />,
        errorElement: <RouteError />,
        children: [
          { index: true, element: <Home /> },
          { path: 'a-propos', element: <About /> },
          { path: 'competences', element: <Skills /> },
          { path: 'experience', element: <Experience /> },
          { path: 'contact', element: <Contact /> },
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
)
