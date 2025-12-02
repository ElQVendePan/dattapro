import { TiWarning } from 'react-icons/ti'
import Button from '../components/forms/Button'

const Test = () => {
    return (
        <>
            <div className='w-16 h-16 text-primary mx-auto mb-3'>
                <TiWarning className='w-full h-full' />
            </div>
            <h2 className='text-center text-lg font-semibold mb-2'>Prueba de modal</h2>
            <p className='text-center text-neutral-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
            </p>
            <div className='mt-6 grid grid-cols-2 gap-4'>
                <Button>Cancelar</Button>
                <Button primary>Aceptar</Button>
            </div>
        </>
    )
}

export default Test