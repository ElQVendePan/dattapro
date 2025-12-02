import { useEffect, useState } from 'react';
import { FaSuitcase } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Button from '../forms/Button';
import { IoIosArrowForward } from 'react-icons/io';

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

    const { nombres, apellidos, foto, facultad, biostatement, centro_id } = data;

    return (
        <div className="p-4 bg-bg-secondary rounded-2xl relative inline-block w-full cursor-pointer border-1 border-bg-secondary hover:scale-98 hover:brightness-125 hover:border-primary duration-200">
            <div className="p-0.5 px-3 text-xs bg-primary text-white rounded-lg inline-block font-bold absolute -top-2 -right-2">
                ¡Nuevo!
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className='w-16 h-16 overflow-hidden rounded-full'>
                        <img className="w-full h-full object-cover" src={foto ? foto : "/default-bg.jpg"} alt="" />
                    </div>
                    {centro_id && (
                        <div className="absolute overflow-hidden -right-1 border-1 border-primary bottom-0 w-6 h-6 rounded-full">
                            <img src={`/centro-investigativo/${centro_id}-logo.jpg`} className='w-full h-full object-cover' alt="" />
                        </div>
                    )}
                </div>
                <div className="text-lg">
                    <b>{nombres}</b>
                    <p className="opacity-70 text-sm">{apellidos}</p>
                </div>
            </div>
            <div className="flex items-center text-sm mt-6">
                <div className="flex items-center justify-center">
                    <FaLocationDot className="inline-block mr-2 text-primary" />
                    <span className="opacity-70">Cúcuta</span>
                </div>

                <div className="ml-4 pl-4 border-l-1 border-bg-third flex items-center justify-center">
                    <FaSuitcase className="inline-block mr-2 text-primary" />
                    <span className="opacity-70">{facultad}</span>
                </div>
            </div>
            <p className="line-clamp-8 text-sm opacity-70 my-6">
                {biostatement}
            </p>
            <div className='text-right'>
                <Link to={`/mapa-talento/perfil-profesional/${id}`}>
                    <Button className='bg-bg-third pl-6 text-sm inline-flex' iconRight icon={<IoIosArrowForward className="w-4 h-4 ml-2" />}>Ver Perfil</Button>
                </Link>
            </div>
        </div>
    )
}

export default PerfilSmallCard;