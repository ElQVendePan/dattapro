import { FaSuitcase } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const PerfilSmallCard = () => {
    return (
        <Link to={"/mapa-talento/perfil-profesional/1"} className="p-4 bg-bg-secondary rounded-2xl relative inline-block w-74 select-none cursor-pointer border-1 border-bg-secondary hover:scale-98 hover:brightness-125 hover:border-primary duration-200">
            <div className="p-0.5 px-3 text-xs bg-primary text-white rounded-lg inline-block font-bold absolute -top-2 -right-2">¡Nuevo!</div>
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                    <img className="w-full h-full object-cover" src="https://this-person-does-not-exist.com/img/avatar-gen5ba2b421272a56fe90adff789a2753e1.jpg" alt="" />
                </div>
                <div className="text-lg">
                    <b>Daniel Alejandro</b>
                    <p className="opacity-70 text-sm">Meneses Rincon</p>
                </div>
            </div>
            <div className="flex items-center text-sm mt-4">
                <div className="flex items-center justify-center">
                    <FaLocationDot className="inline-block mr-2 text-primary" />
                    <span className="opacity-70">Cúcuta</span>
                </div>
                <div className="ml-4 pl-4 border-l-1 border-bg-third flex items-center justify-center">
                    <FaSuitcase className="inline-block mr-2 text-primary" />
                    <span className="opacity-70">Ingenierías</span>
                </div>
            </div>
            <p className="line-clamp-3 text-sm opacity-70 mt-4">Profesor y mentora con experiencia en el fortalecimiento del emprendimiento universitario y la gestión de la innovación en entornos académicos y empresariales. Mi enfoque se centra en el diseño, acompañamiento y ejecución de proyectos orientados a la creación de modelos de negocio de base tecnológica y sostenible. Poseo competencias en formulación y gestión de proyectos I+D+i, metodologías ágiles, innovación abierta y transferencia de conocimiento. Interesada en promover la articulación entre academia, empresa y sociedad para impulsar la competitividad regional y el desarrollo de ecosistemas de innovación.</p>
            <div className="relative overflow-hidden mt-6 text-xs bg-bg-third text-white w-max p-1 pr-4 rounded-full">
                <img src="/centro-investigativo/3-bg.jpg" className='w-full h-full object-cover absolute top-0 left-0 brightness-75' alt="" />
                <div className='relative flex items-center gap-2'>
                    <div className="w-6 h-6 overflow-hidden rounded-full shrink-0">
                        <img className="w-full h-full object-cover" src="https://scontent.fcuc1-1.fna.fbcdn.net/v/t39.30808-6/258686794_3077033822509106_6833670069354995515_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHdh8iB2Xe86DzqXwkK9FPd09av4cb4L7bT1q_hxvgvtoH5kFKQjwESIxXfG3kMdNiI2SIjJJ-KTg7MDNhP_veP&_nc_ohc=HfhMXw4lqUoQ7kNvwFtnjch&_nc_oc=Adn0lnAH5NywBowXe6F6jPAqgQcgivx4yEVBvkCAJQ7CXxVE28aiAxyqEYNfZzXX1Gg&_nc_zt=23&_nc_ht=scontent.fcuc1-1.fna&_nc_gid=WmALrkM9Wia2fKTunkJJcw&oh=00_AfhNscvTxiJzPHnUkMKnS3_LB6qkpb-TUw-QizzdIOSS_A&oe=691C7A9D" alt="" />
                    </div>
                    <b>MACONDOLAB</b>
                </div>
            </div>
        </Link>
    )
}

export default PerfilSmallCard
