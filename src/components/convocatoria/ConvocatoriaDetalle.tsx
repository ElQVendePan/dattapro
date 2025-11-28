import { FaAward, FaShareAlt } from "react-icons/fa";
import Button from "../Button";
import { HiExternalLink } from "react-icons/hi";
import { useEffect, useState } from "react";
import Subtitle from "../Subtitle";
import { MdEditSquare } from "react-icons/md";
import axios from "axios";
import PerfilMatchCard from "../perfil/PerfilMatchCard";

const API_URL = import.meta.env.VITE_API_BASE_URL;

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
    convocatoria: Convocatoria & { id: number };
}

interface InfoRowProps {
    label: string;
    value: string | React.ReactNode;
}

const InfoRow = ({ label, value }: InfoRowProps) => (
    <div className="mt-12">
        <Subtitle>{label}</Subtitle>
        <span className="mt-4 block opacity-70">{value}</span>
    </div>
);

const ConvocatoriaDetalle = ({ convocatoria }: ConvocatoriaDetalleProps) => {
    const [matches, setMatches] = useState<any[]>([]);
    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const res = await axios.get(
                    `${API_URL}convocatorias/get-matches-convocatorias.php?id=${convocatoria.id}`
                );

                if (res.data.status === "success") {
                    setMatches(res.data.matches);
                }
            } catch (error) {
                console.error("Error cargando matches:", error);
            }
        };

        fetchMatches();
    }, [convocatoria.id]);

    if (!convocatoria) return null;

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: document.title,
                    text: "¡Mira esta convocatoria!",
                    url: window.location.href,
                });
            }
        } catch (error) {
            console.error("Error al compartir:", error);
        }
    };

    return (
        <div className="bg-bg-primary -mt-5 rounded-2xl mb-20 p-5">
            {/* Imagen fija de fondo */}
            <div className="w-screen h-64 fixed top-0 left-0">
                <img
                    src={convocatoria.imagenFondo || "/default-bg.jpg"}
                    className="w-full h-full object-cover brightness-50"
                    alt={convocatoria.titulo}
                />
            </div>

            {/* Contenido */}
            <div className="relative bg-bg-primary rounded-t-3xl w-screen -ml-5 p-5 mt-56 lg:px-10">
                <div className="text-center">
                    <div className="w-28 h-28 -mt-16 rounded-2xl border-4 border-bg-third overflow-hidden bg-white inline-block">
                        <img
                            src={convocatoria.entidadLogo}
                            className="w-full h-full object-contain p-2"
                            alt="logo"
                        />
                    </div>

                    <h2 className="font-bold mt-4 text-xl leading-snug">
                        {convocatoria.titulo}
                    </h2>

                    <p className="font-medium mt-2 inline-flex items-center gap-1">
                        <b className="opacity-70">{convocatoria.entidadNombre} |</b>
                        <FaAward className="text-primary" />
                        <span className="text-primary">{convocatoria.categoria}</span>
                    </p>
                </div>

                {/* Botones */}
                <div className="flex items-center gap-2 mt-10">
                    <Button className="w-14 h-14 shrink-0" onClick={handleShare}>
                        <FaShareAlt className="w-10 h-10 mx-auto" />
                    </Button>
                    <Button className="w-14 h-14 shrink-0">
                        <MdEditSquare className="w-10 h-10 mx-auto" />
                    </Button>
                    <a
                        href={convocatoria.enlace}
                        className="w-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button primary className="w-full">
                            <HiExternalLink className="w-6 h-6 mr-2" />
                            Ver Enlace
                        </Button>
                    </a>
                </div>

                {/* Información */}
                <div className="mt-6">
                    {convocatoria.descripcion && (
                        <InfoRow label="Descripción" value={convocatoria.descripcion} />
                    )}
                    {convocatoria.criteriosParticipacion && (
                        <InfoRow
                            label="Criterios de Participación"
                            value={convocatoria.criteriosParticipacion}
                        />
                    )}
                    {convocatoria.financiacion && (
                        <InfoRow
                            label="Monto de Financiación"
                            value={convocatoria.financiacion}
                        />
                    )}
                    {convocatoria.fechaLimite && (
                        <InfoRow
                            label="Fecha de Inicio y Finalización"
                            value={`${convocatoria.fechaInicio} | ${convocatoria.fechaLimite}`}
                        />
                    )}
                </div>

                {matches.length > 0 && (
                    <div className="mt-10">
                        <Subtitle>Perfiles Recomendados</Subtitle>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                            {matches.map((match) => (
                                <PerfilMatchCard
                                    key={match.usuario.id}
                                    usuario={match.usuario}
                                    porcentaje={match.porcentaje}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConvocatoriaDetalle;