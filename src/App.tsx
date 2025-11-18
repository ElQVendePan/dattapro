import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import Convocatorias from './pages/Convocatorias'
import { useUserStore } from './store/useUserStore'
import Login from './pages/Login'
import PerfilProfesional from './components/perfil/PerfilProfesional'
import MapaTalento from './pages/MapaTalento'
import Signup from './pages/Signup'

const App = () => {
  const [currentPath, setCurrentPath] = useState('/')
  const location = useLocation()
  const navigate = useNavigate()
  const { userData, clearUserData } = useUserStore()

  const handleLogout = () => {
    clearUserData()
    navigate('/welcome', { replace: true })
  }

  // Actualiza currentPath
  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  // Redirección condicional
  useEffect(() => {
    const isPublic = location.pathname === "/login" || location.pathname.startsWith("/signup");

    if (userData && isPublic) {
      // 🔒 Usuario logueado intentando acceder a páginas públicas
      navigate('/mapa-talento', { replace: true })
    } else if (!userData && !isPublic) {
      // 🔐 Usuario no logueado intentando acceder a páginas privadas
      navigate('/login', { replace: true })
    }
  }, [userData, location.pathname, navigate])

  return (
    <>
      <main className="lg:py-8 lg:px-10 select-none lg:select-auto">
        <div className='lg:ml-[16%] lg:w-[84%]'>
          <div className='max-w-7xl mx-auto lg:relative'>
            <Routes>
              <Route path="/" element={userData ? <Navigate to="/mapa-talento" replace /> : <Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signup/:id" element={<Signup />} />
              <Route path="/mapa-talento" element={<MapaTalento />} />
              <Route path="/mapa-talento/perfil-profesional/:id" element={<PerfilProfesional />} />
              <Route path="/convocatorias" element={<Convocatorias />} />
              <Route path="/convocatorias/:id" element={<Convocatorias />} />
              <Route path="/busqueda" element={<div onClick={handleLogout}>Cerrar sesion</div>} />
            </Routes>
          </div>
        </div>
      </main>

      <Modal />

      {currentPath !== '/login' && !currentPath.includes('/signup') && <Navbar currentPath={currentPath} />}
    </>
  )
}

export default App