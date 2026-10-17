import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import Place from './pages/Place.jsx'
import MapPage from './pages/MapPage.jsx'
import Credits from './pages/Credits.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  // Braces matter: newer browsers return a Promise from scrollTo, and an effect
  // may only return a cleanup function.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:slug" element={<Explore />} />
        <Route path="/place/:slug" element={<Place />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
