import { HiOutlineExclamation } from 'react-icons/hi'

const Error = ({error}: {error: string}) => {
    return (
        <div className="bg-bg-primary h-screen absolute top-0 left-0 w-full flex items-center justify-center p-6">
            <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center mb-8">
                    <HiOutlineExclamation className="text-5xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Error inesperado</h3>
                <p className="opacity-60 max-w-xs mb-6"><span className="text-red-500">Error: {error}</span><br />Por favor intenta más tarde.</p>
                <button className="underline font-bold text-primary hover:scale-105 hover:brightness-110 duration-200 cursor-pointer">Ir al inicio</button>
            </div>
        </div>
    )
}

export default Error
