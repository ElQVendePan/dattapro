import { FaAward, FaCalendar, FaMoneyBill, FaShareAlt } from "react-icons/fa";
import { HiMiniBookOpen } from "react-icons/hi2";
import { LuGlobe } from "react-icons/lu";
import Button from "./Button";
import { HiExternalLink } from "react-icons/hi";
import { IoBookmark } from "react-icons/io5";
import { useEffect, useState, type ReactNode } from "react";
import { GoGoal } from "react-icons/go";
import { useModal } from "../hook/useModal";

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

    const [opacity, setOpacity] = useState(0.35);

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const fadePoint = 180;

            // Empieza en 0.6 y va bajando hasta 0
            const newOpacity = Math.max(0, 0.35 - (scrollY / fadePoint) * 0.35);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-bg-primary -mt-5 rounded-2xl">
            {/* Imagen de fondo con gradiente */}
            <div className="w-screen h-96 fixed top-0 left-0">
                <img src={convocatoria.imagenFondo} className="w-full h-full object-cover" style={{ opacity }} alt={convocatoria.titulo} />
                <div className="bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/60 absolute top-0 left-0 h-full w-full" />
            </div>
            {/* Contenido principal */}
            <div className="relative pt-48 lg:px-10">
                {/* Logo entidad */}
                <div className="w-24 h-24 rounded-2xl border border-bg-third overflow-hidden bg-white block">
                    <img src={convocatoria.entidadLogo} className="w-full h-full object-contain p-2" alt={`${convocatoria.categoria} logo`} />
                </div>
                {/* Entidad */}
                <h2 className="font-bold mt-6 text-xl leading-snug">{convocatoria.titulo}</h2>
                <p className="font-medium mt-2 mb-6 flex items-center gap-1">
                    <b className="opacity-70">{convocatoria.entidadNombre} |</b>
                    <FaAward className="text-primary" />
                    <span className="text-primary">{convocatoria.categoria}</span>
                </p>
                {/* Buttons */}
                <div className="flex items-center gap-2">
                    <a href={convocatoria.enlace} className="w-full" target="_blank" rel="noopener noreferrer">
                        <Button primary className="w-full" icon={<HiExternalLink className="w-full h-full" />}>Ver Enlace</Button>
                    </a>
                    <Button className="w-14 h-14 shrink-0" onClick={handleShare}>
                        <FaShareAlt className="w-5/6 h-5/6 mx-auto" />
                    </Button>
                    <Button className="w-14 h-14 shrink-0">
                        <IoBookmark className="w-5/6 h-5/6 mx-auto" />
                    </Button>
                </div>
                {/* Descripción */}
                <div className="mt-12">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 flex items-center bg-primary text-white rounded-xl justify-center">
                            <GoGoal className="w-1/2 h-1/2" />
                        </div>
                        <h2 className="font-bold">Objetivo de la Convocatoria</h2>
                    </div>
                    <p className="opacity-70">{convocatoria.descripcion}</p>
                </div>

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