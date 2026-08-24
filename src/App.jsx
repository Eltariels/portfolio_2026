import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import InteractiveGrid from './components/InteractiveGrid'

export default function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveGrid />
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
