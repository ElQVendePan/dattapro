import { FaAward, FaCalendar, FaMoneyBill } from "react-icons/fa";
import { HiMiniBookOpen } from "react-icons/hi2";
import { LuGlobe } from "react-icons/lu";

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
    icon: JSX.Element;
    label: string;
    value: string | JSX.Element;
}

/**
 * InfoRow: muestra una fila de información con la etiqueta ocupando el 25%
 * y el valor el 75% en pantallas >= sm. En pantallas pequeñas se apilan.
 */
const InfoRow = ({ icon, label, value }: InfoRowProps) => (
    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 py-3">
        {/* Label (25% en sm+, full width en xs) */}
        <div className="w-full sm:w-1/4 flex items-start gap-2 sm:pr-4 sm:border-r-2 border-bg-third text-primary">
            <div className="mt-0.5 flex-shrink-0">{icon}</div>
            <b>{label}</b>
        </div>

        {/* Value (75% en sm+, full width en xs) */}
        <div className="w-full sm:w-3/4">
            <span className="block">{value}</span>
        </div>
    </div>
);

const ConvocatoriaDetalle = ({ convocatoria }: ConvocatoriaDetalleProps) => {
    if (!convocatoria) return null;

    return (
        <div className="bg-bg-primary lg:bg-bg-secondary p-6 rounded-2xl relative lg:sticky lg:top-6 overflow-auto h-[calc(100vh-3rem)] shadow-lg border border-bg-third/20">
            {/* Imagen de fondo con gradiente */}
            <div className="w-full h-80 lg:h-64 absolute top-0 left-0">
                <img src={convocatoria.imagenFondo} className="w-full h-full object-cover opacity-40" alt={convocatoria.titulo} />
                <div className="bg-gradient-to-t from-bg-primary lg:from-bg-secondary via-transparent to-bg-primary lg:to-bg-secondary absolute top-0 left-0 h-full w-full" />
            </div>

            {/* Contenido principal */}
            <div className="relative mt-52 lg:mt-36 lg:px-10">
                {/* Logo entidad */}
                <div className="w-24 h-24 rounded-2xl border border-bg-third overflow-hidden bg-white block">
                    <img src={convocatoria.entidadLogo} className="w-full h-full object-contain p-2" alt={`${convocatoria.categoria} logo`} />
                </div>

                {/* Entidad */}
                <h2 className="font-bold mt-6 text-xl leading-snug">{convocatoria.titulo}</h2>
                {convocatoria.entidadNombre && (
                    <p className="opacity-70 mt-1">{convocatoria.entidadNombre}</p>
                )}
                <p className="text-primary font-medium my-6 flex items-center gap-1">
                    <FaAward className="text-primary" />
                    {convocatoria.categoria}
                </p>

                {/* Descripción */}
                <p className="text-sm leading-relaxed">{convocatoria.descripcion}</p>

                {/* Info adicional (ya no usa grid, usa flex rows con InfoRow) */}
                <div className="mt-6 text-sm">
                    {convocatoria.criteriosParticipacion && (
                        <InfoRow
                            icon={<HiMiniBookOpen />}
                            label="Criterios de Participación"
                            value={convocatoria.criteriosParticipacion}
                        />
                    )}

                    {convocatoria.financiacion && (
                        <InfoRow
                            icon={<FaMoneyBill />}
                            label="Monto de Financiación"
                            value={convocatoria.financiacion}
                        />
                    )}

                    {convocatoria.fechaLimite && (
                        <InfoRow
                            icon={<FaCalendar />}
                            label="Fecha de Inicio y Finalización"
                            value={
                                <>
                                    {new Date(convocatoria.fechaInicio)
                                        .toLocaleDateString('es-ES', {
                                            weekday: 'short',
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })
                                        .toUpperCase()}
                                    {" - "}
                                    {new Date(convocatoria.fechaLimite)
                                        .toLocaleDateString('es-ES', {
                                            weekday: 'short',
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })
                                        .toUpperCase()}
                                </>
                            }
                        />
                    )}
                </div>

                {convocatoria.enlace && (
                    <a
                        href={convocatoria.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 mt-4 transition-colors"
                    >
                        <LuGlobe className="text-primary" />
                        <span>Ver más información</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ConvocatoriaDetalle;