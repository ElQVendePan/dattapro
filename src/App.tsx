import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import Login from './components/Login'

const App = () => {
  const [currentPath, setCurrentPath] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

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
