import Button from '../components/Button'
import { FaLink } from 'react-icons/fa'

const RedirectModal = () => {
    return (
        <>
            <div className='w-14 h-14 text-primary mx-auto mb-6'>
                <FaLink className='w-full h-full' />
            </div>
            <h2 className='text-lg font-semibold mb-2'>¡Estás a punto de ser redirigido!</h2>
            <p className='opacity-70'>
                Serás redirigido a <b>https://www.ejemplo.com</b> el cual es un sitio externo. ¿Deseas continuar?
            </p>
            <div className='mt-6 grid grid-cols-2 gap-4'>
                <Button>Cancelar</Button>
                <Button primary>Aceptar</Button>
            </div>
        </>
    )
}

export default RedirectModal