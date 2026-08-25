import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import InteractiveGrid from './components/InteractiveGrid'
import PageStinger from './components/PageStinger'
import Cursor from './components/Cursor'
import { RELOAD_FLAG_KEY } from './components/RouteError'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    sessionStorage.removeItem(RELOAD_FLAG_KEY)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveGrid />
      <PageStinger />
      <Cursor />
      <Navbar />
      <main className="flex-1">
        <div key={location.pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
