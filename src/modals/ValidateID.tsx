import { MdPersonSearch } from 'react-icons/md'
import Button from '../components/Button'
import Input from '../components/forms/Input'
import { useForm } from 'react-hook-form';

const ValidateID = () => {
    const { register, handleSubmit, formState: { isValid } } = useForm({
        mode: "onChange"  // valida en tiempo real
    });

    const onSubmit = (data: any) => {
        console.log("DATA DEL FORM:", data);
    };

    return (
        <div>
            <div className='w-16 h-16 text-primary mx-auto mb-6'>
                <MdPersonSearch className='w-full h-full' />
            </div>
            <h2 className='text-center text-lg font-semibold'>Verificar Identidad</h2>
            <p className='mt-2 text-center text-neutral-500'>
                Para continuar, necesitamos verificar tu identidad. Por favor, introduce tu identificación.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type='number' {...register('documento', { required: true })} className='mt-6' placeholder='Número de Documento' />
                <div className='mt-6 grid grid-cols-1 gap-4'>
                    <Button primary disabled={!isValid}>
                        Continuar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ValidateID