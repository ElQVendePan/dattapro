import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'

const App = () => {
  const [currentPath, setCurrentPath] = useState('/')
  const location = useLocation()

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname]) // <- solo se ejecuta cuando cambia la ruta

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold'>Hello, world!</h1>
        <p>lorem ipsum dolor sit amet</p>
      </div>
      <Navbar currentPath={currentPath} />
    </>
  )
}

export default App