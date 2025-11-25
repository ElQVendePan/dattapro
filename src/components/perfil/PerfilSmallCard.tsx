import { useEffect, useState } from 'react';
import { FaSuitcase } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const PerfilSmallCard = ({ id }: { id: string }) => {

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_URL}usuarios/get-basic-data-usuarios.php?id=${id}`);
                if (res.data.status === "success") {
                    setData(res.data.data);
                }
            } catch (error) {
                console.error("Error cargando perfil:", error);
            }
        };

        fetchData();
    }, [id]);

    if (!data) return null;

    const {
        nombres,
        apellidos,
        foto,
        facultad,
        biostatement,
        centro_id,
        centro_investigativo
    } = data;

    return (
        <Link
            to={`/mapa-talento/perfil-profesional/${id}`}
            className="p-4 bg-bg-secondary rounded-2xl relative inline-block w-74 select-none cursor-pointer border-1 border-bg-secondary hover:scale-98 hover:brightness-125 hover:border-primary duration-200"
        >
            <div className="p-0.5 px-3 text-xs bg-primary text-white rounded-lg inline-block font-bold absolute -top-2 -right-2">
                ¡Nuevo!
            </div>

            <div className="flex items-center gap-4">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                    <img className="w-full h-full object-cover" src={foto} alt="" />
                </div>
                <div className="text-lg">
                    <b>{nombres}</b>
                    <p className="opacity-70 text-sm">{apellidos}</p>
                </div>
            </div>

            <div className="flex items-center text-sm mt-4">
                <div className="flex items-center justify-center">
                    <FaLocationDot className="inline-block mr-2 text-primary" />
                    <span className="opacity-70">Cúcuta</span>
                </div>

                <div className="ml-4 pl-4 border-l-1 border-bg-third flex items-center justify-center">
                    <FaSuitcase className="inline-block mr-2 text-primary" />
                    <span className="opacity-70">{facultad}</span>
                </div>
            </div>

            <p className="line-clamp-3 text-sm opacity-70 mt-4">
                {biostatement}
            </p>

            {centro_id && (
                <div className="relative overflow-hidden mt-6 text-xs bg-bg-third text-white w-max p-1 pr-4 rounded-full">
                    <img
                        src={`/centro-investigativo/${centro_id}-bg.jpg`}
                        className='w-full h-full object-cover absolute top-0 left-0 brightness-75'
                        alt=""
                    />
                    <div className='relative flex items-center gap-2'>
                        <div className="w-6 h-6 overflow-hidden rounded-full shrink-0">
                            <img
                                className="w-full h-full object-cover"
                                src={`/centro-investigativo/${centro_id}-logo.jpg`}
                                alt=""
                            />
                        </div>
                        <b>{centro_investigativo}</b>
                    </div>
                </div>
            )}
        </Link>
    )
}

export default PerfilSmallCard;