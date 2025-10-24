import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import Login from './pages/Login'
import { useUserStore } from './store/useUserStore'
import Modal from './components/Modal'
import Search from './pages/Search'
import Convocatorias from './pages/Convocatorias'
import Header from './components/Header'

const App = () => {
  const [currentPath, setCurrentPath] = useState('/')
  const [headerTitle, setHeaderTitle] = useState('')
  const location = useLocation()

  const { userData } = useUserStore()

  // Actualiza currentPath cuando location.pathname cambie
  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  // Actualiza headerTitle cuando currentPath cambie
  useEffect(() => {
    const pathTitleMap: { [key: string]: string } = {
      '/': 'Dashboard',
      '/search': 'Mapa de Talento',
      '/convocatorias': 'Convocatorias',
      '/profile': 'Tu Perfil',
      '/login': 'Login'
    }

    setHeaderTitle(pathTitleMap[currentPath] || '')
  }, [currentPath])

  // Redirige a /login si no hay userData y no está ya en /login
  useEffect(() => {
    if (!userData && location.pathname !== '/login') {
      window.location.href = `${import.meta.env.VITE_PAGE_URL}login`
    }
  }, [userData, location.pathname])

  return (
    <>
      <main className='lg:ml-[18%] p-5 pt-3 pb-24 lg:py-8 lg:px-10'>
        <Header title={headerTitle} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/convocatorias' element={<Convocatorias />} />
        </Routes>
      </main>
      <Modal></Modal>

      {/* Solo renderiza el Navbar si NO está en /login */}
      {currentPath !== '/login' && <Navbar currentPath={currentPath} />}
    </>
  )
}

export default App