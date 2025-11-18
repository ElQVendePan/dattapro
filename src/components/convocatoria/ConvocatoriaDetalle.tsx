import { FaAward, FaShareAlt } from "react-icons/fa";
import Button from "../Button";
import { HiExternalLink } from "react-icons/hi";
import { type ReactNode } from "react";
import Subtitle from "../Subtitle";

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
    label: string;
    value: string | ReactNode
}

const InfoRow = ({ label, value }: InfoRowProps) => (
    <div className="mt-12">
        <Subtitle>{label}</Subtitle>
        <span className="mt-4 block opacity-70">{value}</span>
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
        <div className="bg-bg-primary -mt-5 rounded-2xl mb-20 p-5">
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
                <div className="flex items-center gap-2 mt-10">
                    <Button className="w-14 h-14 shrink-0" onClick={handleShare}>
                        <FaShareAlt className="w-5/6 h-5/6 mx-auto" />
                    </Button>
                    <a href={convocatoria.enlace} className="w-full" target="_blank" rel="noopener noreferrer">
                        <Button primary className="w-full" icon={<HiExternalLink className="w-full h-full" />}>Ver Enlace</Button>
                    </a>
                </div>
                <div className="mt-6">
                    {convocatoria.descripcion && (
                        <InfoRow label="Descripción" value={convocatoria.descripcion} />
                    )}
                    {convocatoria.criteriosParticipacion && (
                        <InfoRow label="Criterios de Participación" value={convocatoria.criteriosParticipacion} />
                    )}
                    {convocatoria.financiacion && (
                        <InfoRow label="Monto de Financiación" value={convocatoria.financiacion} />
                    )}
                    {convocatoria.fechaLimite && (
                        <InfoRow label="Fecha de Inicio y Finalización" value={`${convocatoria.fechaInicio} | ${convocatoria.fechaLimite}`} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConvocatoriaDetalle;