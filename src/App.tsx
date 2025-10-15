import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import Login from './components/Login'
import { useUserStore } from './store/useUserStore'

const App = () => {
  const [currentPath, setCurrentPath] = useState('/')
  const location = useLocation()

  const { userData } = useUserStore()

  // Actualiza currentPath cuando location.pathname cambie
  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  // Redirige a /login si no hay userData y no está ya en /login
  useEffect(() => {
    if (!userData && location.pathname !== '/login') {
      window.location.href = `${import.meta.env.VITE_PAGE_URL}login`
    }
  }, [userData, location.pathname])

  return (
    <>
      <main className='p-5'>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {/* Solo renderiza el Navbar si NO está en /login */}
      {currentPath !== '/login' && <Navbar currentPath={currentPath} />}
    </>
  )
}

export default App