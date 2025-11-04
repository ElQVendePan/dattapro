import { LuCalendarDays, LuAward, LuGlobe, LuBanknote, LuBookOpen } from "react-icons/lu"

type Convocatoria = {
    imagenFondo: string;
    entidadLogo: string;
    titulo: string;
    categoria: string;
    descripcion: string;
    fechaLimite: string;
    criteriosParticipacion?: string;
    financiacion?: string;
    enlace?: string;
    entidadNombre?: string;
};

interface ConvocatoriaDetalleProps {
    convocatoria: Convocatoria;
}

const ConvocatoriaDetalle = ({ convocatoria }: ConvocatoriaDetalleProps) => {
    if (!convocatoria) return null;

    return (
        <div className="bg-bg-primary lg:bg-bg-secondary p-6 rounded-2xl relative lg:sticky lg:top-6 overflow-auto h-[calc(100vh-3rem)] shadow-lg border border-bg-third/20">
            {/* Imagen de fondo con gradiente */}
            <div className="w-full h-64 lg:h-56 absolute top-0 left-0">
                <img
                    src={convocatoria.imagenFondo}
                    className="w-full h-full object-cover opacity-40"
                    alt={convocatoria.titulo}
                />
                <div className="bg-gradient-to-t from-bg-primary via-transparent to-bg-primary lg:bg-none absolute top-0 left-0 h-full w-full" />
            </div>

            {/* Contenido principal */}
            <div className="relative mt-48 lg:mt-40 lg:px-10 space-y-6">
                {/* Logo entidad */}
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl border border-bg-third overflow-hidden flex-shrink-0 shadow-md bg-white">
                        <img
                            src={convocatoria.entidadLogo}
                            className="w-full h-full object-contain p-2"
                            alt={`${convocatoria.categoria} logo`}
                        />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl leading-snug">{convocatoria.titulo}</h2>
                        <p className="text-sm text-primary font-medium mt-1 flex items-center gap-1">
                            <LuAward className="text-primary" />
                            {convocatoria.categoria}
                        </p>
                        {convocatoria.entidadNombre && (
                            <p className="text-xs opacity-70 mt-0.5">{convocatoria.entidadNombre}</p>
                        )}
                    </div>
                </div>

                {/* Descripción */}
                <p className="text-sm opacity-85 leading-relaxed">{convocatoria.descripcion}</p>

                {/* Info adicional */}
                <div className="space-y-3 text-sm">
                    {convocatoria.criteriosParticipacion && (
                        <div className="flex items-start gap-2">
                            <LuBookOpen className="mt-0.5 text-primary flex-shrink-0" />
                            <p>
                                <span className="font-medium">Criterios de participación:</span>{" "}
                                {convocatoria.criteriosParticipacion}
                            </p>
                        </div>
                    )}

                    {convocatoria.financiacion && (
                        <div className="flex items-start gap-2">
                            <LuBanknote className="mt-0.5 text-primary flex-shrink-0" />
                            <p>
                                <span className="font-medium">Financiación:</span>{" "}
                                {convocatoria.financiacion}
                            </p>
                        </div>
                    )}

                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <LuCalendarDays className="text-primary" />
                        <span>Fecha límite: {convocatoria.fechaLimite}</span>
                    </div>

                    {convocatoria.enlace && (
                        <a
                            href={convocatoria.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 mt-2 transition-colors"
                        >
                            <LuGlobe className="text-primary" />
                            <span>Ver más información</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConvocatoriaDetalle;
