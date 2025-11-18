import { FaLink } from "react-icons/fa"

const ExternalProfile = () => {
    return (
        <>
            <div className='w-14 h-14 text-primary mx-auto mb-6'>
                <FaLink className='w-full h-full' />
            </div>
            <h2 className='text-lg font-semibold mb-2'>Perfiles Externos</h2>
            <p className='opacity-70'>Enlaces a los perfiles profesionales y académicos registrados.</p>
        </>
    )
}

export default ExternalProfile
