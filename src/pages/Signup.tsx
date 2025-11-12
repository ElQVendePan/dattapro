import { FaUserFriends } from "react-icons/fa"

const Signup = () => {
    return (
        <>
            <div className="w-screen p-5 relative h-auto -ml-5 -mt-5">
                <img src="default-bg.jpg" className="w-full h-full absolute top-0 left-0 object-cover" alt="Default Background" />
                <img src="/dattapro-icon-white.svg" className='w-9 relative' alt='' />
            </div>
            <div className="relative mt-6">
                <div className="bg-primary flex items-center justify-center w-12 h-12 rounded-xl">
                    <FaUserFriends className="w-1/2 h-1/2" />
                </div>
                <h2 className="text-xl mt-4 font-bold">Formulario para la Vinculación a la Red de Colaboración Institucional</h2>
                <p className="text-sm mt-4"><b>Propósito:</b> <span className="opacity-70">Recopilar información clave de los profesores de la Universidad Simón Bolívar para su vinculación a la Red de Colaboración Institucional, facilitando la identificación de capacidades, experiencias, intereses y habilidades que promuevan la participación en proyectos de formación, investigación, innovación y extensión.</span></p>
            </div>
        </>
    )
}

export default Signup