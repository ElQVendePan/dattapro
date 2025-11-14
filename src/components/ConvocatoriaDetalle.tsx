import { FaAward, FaCalendar, FaMoneyBill, FaShareAlt } from "react-icons/fa";
import { HiMiniBookOpen } from "react-icons/hi2";
import Button from "./Button";
import { HiExternalLink } from "react-icons/hi";
import { IoBookmark } from "react-icons/io5";
import { type ReactNode } from "react";
import { GoGoal } from "react-icons/go";

type Convocatoria = {
    imagenFondo: string;
    entidadLogo: string;
    titulo: string;
    categoria: string;
    descripcion: string;
    fechaInicio: string;
    fechaLimite: string;
    criteriosParticipacion?: string;
    financiacion?: string;
    enlace?: string;
    entidadNombre?: string;
};

interface ConvocatoriaDetalleProps {
    convocatoria: Convocatoria;
}

interface InfoRowProps {
    icon: ReactNode
    label: string;
    value: string | ReactNode
}

const InfoRow = ({ icon, label, value }: InfoRowProps) => (
    <div className="mt-12">
        <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 flex items-center bg-primary text-white rounded-xl justify-center">
                {icon}
            </div>
            <h2 className="font-bold">{label}</h2>
        </div>
        <span className="block opacity-70">{value}</span>
    </div>
);

const ConvocatoriaDetalle = ({ convocatoria }: ConvocatoriaDetalleProps) => {
    if (!convocatoria) return null;

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: document.title,
                    text: "¡Mira esta página!",
                    url: window.location.href,
                });
            } else {
                console.error("Tu navegador no soporta compartir nativamente 😢");
            }
        } catch (error) {
            console.error("Error al intentar compartir:", error);
        }
    };

    return (
        <div className="bg-bg-primary -mt-5 rounded-2xl">
            {/* Imagen de fondo con gradiente */}
            <div className="w-screen h-64 fixed top-0 left-0">
                <img src={convocatoria.imagenFondo} className="w-full h-full object-cover brightness-50" alt={convocatoria.titulo} />
            </div>
            {/* Contenido principal */}
            <div className="relative bg-bg-primary rounded-t-3xl w-screen -ml-5 p-5 mt-56 lg:px-10">
                <div className="text-center">
                    <div className="w-28 h-28 -mt-16 rounded-2xl border-4 border-bg-third overflow-hidden bg-white inline-block">
                        <img src={convocatoria.entidadLogo} className="w-full h-full object-contain p-2" alt={`${convocatoria.categoria} logo`} />
                    </div>
                    <h2 className="font-bold mt-4 text-xl leading-snug">{convocatoria.titulo}</h2>
                    <p className="font-medium mt-2 inline-flex items-center gap-1">
                        <b className="opacity-70">{convocatoria.entidadNombre} |</b>
                        <FaAward className="text-primary" />
                        <span className="text-primary">{convocatoria.categoria}</span>
                    </p>
                </div>
                {/* Buttons */}
                <div className="flex items-center gap-2 mt-10 mb-10 pb-10 border-b-1 border-bg-third">
                    <Button className="w-14 h-14 shrink-0" onClick={handleShare}>
                        <FaShareAlt className="w-5/6 h-5/6 mx-auto" />
                    </Button>
                    <Button className="w-14 h-14 shrink-0">
                        <IoBookmark className="w-5/6 h-5/6 mx-auto" />
                    </Button>
                    <a href={convocatoria.enlace} className="w-full" target="_blank" rel="noopener noreferrer">
                        <Button primary className="w-full" icon={<HiExternalLink className="w-full h-full" />}>Ver Enlace</Button>
                    </a>
                </div>
                {/* Descripción */}
                <h2 className="font-bold">Objetivo de la Convocatoria</h2>
                <p className="opacity-70 mt-4">{convocatoria.descripcion}</p>

                {/* Info adicional (ya no usa grid, usa flex rows con InfoRow) */}
                <div className="mt-6">
                    {convocatoria.criteriosParticipacion && (
                        <InfoRow icon={<HiMiniBookOpen className="w-1/2 h-1/2" />} label="Criterios de Participación" value={convocatoria.criteriosParticipacion} />
                    )}
                    {convocatoria.financiacion && (
                        <InfoRow icon={<FaMoneyBill />} label="Monto de Financiación" value={convocatoria.financiacion} />
                    )}
                    {convocatoria.fechaLimite && (
                        <InfoRow icon={<FaCalendar />} label="Fecha de Inicio y Finalización" value={`${convocatoria.fechaInicio} | ${convocatoria.fechaLimite}`} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConvocatoriaDetalle;