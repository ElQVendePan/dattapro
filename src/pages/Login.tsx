import Input from '../components/forms/Input'
import Button from '../components/Button'
import { useUserStore } from '../store/useUserStore';
import { FaLock, FaUser } from 'react-icons/fa';

const Login = () => {

  const { setUserData } = useUserStore()

  //Handle login for form
  const handleLogin = () => {
    setUserData({
      id: '123',
      name: 'Daniel Meneses',
      email: 'daniel@example.com',
    })
  }

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full overflow-hidden'>
        <video src="/blue-animation.mp4" className='w-full h-full object-cover brightness-50' autoPlay muted></video>
        <img src="/dattapro-icon-white.svg" className='w-9 absolute top-5 left-5' alt='' />
      </div>
      <div className='absolute left-0 bottom-0 p-5'>
        <div className='mb-8'>
          {/* <img src="/dattapro-icon.svg" className='w-10 inline-block mt-5 mb-12' alt='' /> */}
          <h1 className='font-bold text-4xl mt-3'>Bienvenido a Dattapro</h1>
          <p className='font-medium mt-1 opacity-70'>Un espacio creado para fortalecer el vínculo entre docentes, talento y oportunidades.</p>
          <hr className='bg-neutral-300 w-1/5 h-0.5 rounded-full border-none mt-3' />
          <div className='grid grid-cols-1 gap-4 mt-8'>
            <Input className='border-neutral-400 bg-white/10' label='Usuario' placeholder='Escribe tu usuario' icon={<FaUser className='w-full h-full' />} />
            <Input className='border-neutral-400 bg-white/10' type='password' label='Contraseña' placeholder='Escribe tu contraseña' icon={<FaLock className='w-full h-full' />} />
            <span className='text-right text-sm opacity-60'>¿Olvidaste tu contraseña?</span>
            <Button primary onClick={handleLogin}>Iniciar sesión</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login