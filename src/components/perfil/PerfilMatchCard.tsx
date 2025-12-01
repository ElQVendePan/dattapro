import { FaSuitcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../Button";
import { IoIosArrowForward } from "react-icons/io";

interface UsuarioData {
    id: number;
    nombres: string;
    apellidos: string;
    foto: string;
    sede: string;
    facultad?: string;
    centro_id?: number;
}

interface PerfilMatchCardProps {
    usuario: UsuarioData;
    porcentaje: number; // 👈 Ahora recibe porcentaje
}

const PerfilMatchCard = ({ usuario, porcentaje }: PerfilMatchCardProps) => {
    const { id, nombres, apellidos, sede, foto, facultad, centro_id } = usuario;

    return (
        <div className="p-4 bg-bg-secondary rounded-2xl relative inline-block w-full cursor-pointer border-1 border-bg-secondary hover:scale-98 hover:brightness-125 hover:border-primary duration-200">

            {/* BADGE DE PORCENTAJE */}
            {/* BADGE DE PORCENTAJE CON COLORES */}
            <div className={`absolute -top-2 -right-2 px-3 py-2 rounded-xl border-2 shadow-md flex items-center gap-2 ${porcentaje === 100 ? "bg-green-500 text-white border-white" : porcentaje >= 70 ? "bg-primary text-white border-bg-third" : porcentaje > 40 ? "bg-yellow-400 text-black border-yellow-500": "bg-bg-third text-white border-bg-third"}`}>
                <span className="text-lg font-bold">
                    {porcentaje ?? 0}%
                </span>
            </div>

            {/* Contenido superior */}
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="w-16 h-16 overflow-hidden rounded-full">
                        <img className="w-full h-full object-cover" src={foto ? foto : "/default-bg.jpg"} alt="" />
                    </div>

                    {centro_id && (
                        <div className="absolute overflow-hidden -right-1 border border-primary bottom-0 w-6 h-6 rounded-full bg-white">
                            <img
                                src={`/centro-investigativo/${centro_id}-logo.jpg`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                    )}
                </div>

                <div className="text-lg">
                    <b>{nombres}</b>
                    <p className="opacity-70 text-sm">{apellidos}</p>
                </div>
            </div>

            {/* Facultad y ubicación */}
            <div className="flex items-center text-sm mt-6">
                <div className="flex items-center justify-center">
                    <FaLocationDot className="inline-block mr-2 text-primary" />
                    <span className="opacity-70">{sede}</span>
                </div>

                {facultad && (
                    <div className="ml-4 pl-4 border-l border-bg-third flex items-center justify-center">
                        <FaSuitcase className="inline-block mr-2 text-primary" />
                        <span className="opacity-70">{facultad}</span>
                    </div>
                )}
            </div>

            {/* Línea divisoria */}
            <div className="mt-5 mb-4 w-full h-px bg-bg-third"></div>

            {/* Mensaje de porcentaje */}
            <div className="text-sm opacity-80 mt-2">
                {porcentaje > 0 ? (
                    <p className="font-medium">
                        Este perfil tiene un <b>{porcentaje}%</b> de coincidencia con esta convocatoria.
                    </p>
                ) : (
                    <p className="opacity-60">Sin coincidencias relevantes.</p>
                )}
            </div>

            {/* Botón */}
            <div className="text-right mt-6">
                <Link to={`/mapa-talento/perfil-profesional/${id}`}>
                    <Button
                        className="bg-bg-third pl-6 text-sm inline-flex"
                        iconRight
                        icon={<IoIosArrowForward className="w-4 h-4 ml-2" />}
                    >
                        Ver Perfil
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default PerfilMatchCard;