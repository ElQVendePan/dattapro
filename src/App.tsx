import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import Signup from './pages/Signup'
import Search from './pages/Search'
import Convocatorias from './pages/Convocatorias'
import { useUserStore } from './store/useUserStore'
import Login from './pages/Login'

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
    const publicPaths = ['/login', '/signup']
    const isPublic = publicPaths.includes(location.pathname)

    if (userData && isPublic) {
      // 🔒 Usuario logueado intentando acceder a páginas públicas
      navigate('/home', { replace: true })
    } else if (!userData && !isPublic) {
      // 🔐 Usuario no logueado intentando acceder a páginas privadas
      navigate('/login', { replace: true })
    }
  }, [userData, location.pathname, navigate])

  return (
    <>
      <main className="lg:ml-[18%] p-5 pb-24 lg:py-8 lg:px-10 select-none lg:select-auto">
        <div className="lg:max-w-7xl lg:mx-auto">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
            <Route path="/convocatorias" element={<Convocatorias />} />
            <Route path="/convocatorias/:id" element={<Convocatorias />} />
            <Route path="/home" element={<div onClick={handleLogout}>Cerrar sesion</div>} />
          </Routes>
        </div>
      </main>

      <Modal />

      {currentPath !== '/login' && currentPath !== '/signup' && currentPath !== '/welcome' && <Navbar currentPath={currentPath} />}
    </>
  )
}

export default App