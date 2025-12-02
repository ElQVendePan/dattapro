import Button from "../components/forms/Button"
import { FaSadTear } from "react-icons/fa"
import { useModal } from "../hook/useModal";

const UnauthorizedDataUse = () => {
    const { closeModal } = useModal();
    return (
        <div>
            <div className='w-16 h-16 text-primary mx-auto mb-6'>
                <FaSadTear className='w-full h-full' />
            </div>
            <h2 className='text-center text-lg font-semibold'>Uso de Datos No Autorizado</h2>
            <p className='mt-2 text-center text-neutral-500'>
                Lamentamos informarte que no podemos proceder sin tu autorización para el uso de datos personales.
                Por favor, revisa nuestra política de privacidad para más detalles sobre cómo manejamos tus datos.
            </p>
            <div className='mt-6 grid grid-cols-1 gap-4'>
                <Button onClick={() => closeModal()}>OK!</Button>
            </div>
        </div>
    )
}

export default UnauthorizedDataUse
