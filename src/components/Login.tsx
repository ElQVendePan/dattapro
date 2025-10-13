import { FaLock, FaUser } from 'react-icons/fa'
import Input from './Input'
import Button from './Button'

const Login = () => {
  return (
    <>
      <video src="/blue-animation.mp4" className='fixed -z-10 w-full h-full object-cover top-0 left-0' muted autoPlay></video>
      <div className='bg-white absolute left-0 bottom-0 p-5 rounded-t-2xl'>
        <div className='text-center mb-8'>
          <img src="/dattapro-icon.svg" className='w-14 inline-block mb-4' alt='' />
          <h1 className='font-bold text-2xl'>Bienvenido a Dattapro</h1>
          <p className='font-medium mt-1 opacity-70'>Un espacio creado para fortalecer el vínculo entre docentes, talento y oportunidades.</p>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <Input label='Usuario' placeholder='Escribe tu usuario' icon={<FaUser className='w-full h-full' />} />
          <Input type='password' label='Contraseña' placeholder='Escribe tu contraseña' icon={<FaLock className='w-full h-full' />} />
          <Button primary>Iniciar sesión</Button>
        </div>
        <div className="flex items-center justify-center my-2">
          <hr className="w-full h-0.5 rounded-full bg-neutral-200 border-none mr-4"></hr>
          <span className="opacity-50">o</span>
          <hr className="w-full h-0.5 rounded-full bg-neutral-200 border-none ml-4"></hr>
        </div>
        <Button className='border-1 border-neutral-300' icon={<img src='/microsoft-icon.png' alt='icon-microsoft' className='w-full h-full' />}>Iniciar sesión con Microsoft</Button>
      </div>
    </>
  )
}

export default Login
