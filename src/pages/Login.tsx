import { FaLock, FaUser } from 'react-icons/fa'
import Input from '../components/Input'
import Button from '../components/Button'
import { useModal } from '../hook/useModal';
import { useUserStore } from '../store/useUserStore'

const Login = () => {

  const { openModal } = useModal();

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
        <img src="/dattapro-icon-white.svg" className='w-12 absolute top-5 left-5' alt='' />
        <video src="/blue-animation.mp4" className='w-full h-full object-cover' autoPlay muted></video>
      </div>
      <div className='absolute left-0 bottom-0 p-5 bg-bg-primary rounded-t-3xl'>
        <div className='mb-8'>
          {/* <img src="/dattapro-icon.svg" className='w-10 inline-block mt-5 mb-12' alt='' /> */}
          <h1 className='font-bold text-2xl mt-3'>Bienvenido a Dattapro</h1>
          <p className='font-medium mt-1 opacity-50'>Un espacio creado para fortalecer el vínculo entre docentes, talento y oportunidades.</p>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <Input label='Usuario' placeholder='Escribe tu usuario' icon={<FaUser className='w-full h-full' />} />
          <Input type='password' label='Contraseña' placeholder='Escribe tu contraseña' icon={<FaLock className='w-full h-full' />} />
          <span className='text-right text-sm opacity-60'>¿Olvidaste tu contraseña?</span>
          <Button primary onClick={handleLogin}>Iniciar sesión</Button>
        </div>
        {/* <div className="flex items-center justify-center my-2">
          <hr className="w-full h-0.5 rounded-full bg-neutral-200 border-none mr-4"></hr>
          <span className="opacity-50">o</span>
          <hr className="w-full h-0.5 rounded-full bg-neutral-200 border-none ml-4"></hr>
        </div> */}
        <span className="block text-xs text-center opacity-60 mt-8 mb-4">
          Al iniciar sesión, aceptas nuestros <span className="text-primary underline" onClick={openModal}>Términos de servicio</span> y <span className="text-primary underline" onClick={openModal}>Política de privacidad</span>.
        </span>
      </div>
    </>
  )
}

export default Login
