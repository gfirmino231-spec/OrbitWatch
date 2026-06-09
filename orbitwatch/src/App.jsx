import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Problema from './pages/Problema'
import Tecnologia from './pages/Tecnologia'
import Dashboard from './pages/Dashboard'
import Impacto from './pages/Impacto'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problema" element={<Problema />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/impacto" element={<Impacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
