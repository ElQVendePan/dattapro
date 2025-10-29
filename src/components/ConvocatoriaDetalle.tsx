type Convocatoria = {
    imagenFondo: string;
    imagenLogo: string;
    titulo: string;
    categoria: string;
    descripcion: string;
    fechaLimite: string;
};

interface ConvocatoriaDetalleProps {
    convocatoria: Convocatoria;
}

const ConvocatoriaDetalle = ({ convocatoria }: ConvocatoriaDetalleProps) => {
    if (!convocatoria) return null

    return (
        <div className="bg-bg-primary lg:bg-bg-secondary p-6 rounded-2xl sticky top-6 overflow-auto h-[calc(100vh-3rem)]">
            <div className="w-full h-64 lg:h-56 absolute top-0 left-0">
                <img src={convocatoria.imagenFondo} className="w-full h-full object-cover" alt={convocatoria.titulo} />
                <div className="bg-gradient-to-t from-transparent to-bg-primary lg:bg-none absolute top-0 left-0 h-[50%] w-full" />
            </div>
            <div className="relative mt-64 lg:mt-40 lg:px-10">
                <div className="w-20 h-20 rounded-2xl border-2 border-bg-third overflow-hidden flex-shrink-0">
                    <img
                        src={convocatoria.imagenLogo}
                        className="w-full h-full object-cover"
                        alt={`${convocatoria.categoria} logo`}
                    />
                </div>
                <h2 className="font-bold text-xl leading-snug mt-4">{convocatoria.titulo}</h2>
                <p className="mt-4 text-sm opacity-80">{convocatoria.descripcion}</p>
                <p className="mt-6 text-sm font-medium text-primary">
                    Fecha límite: {convocatoria.fechaLimite}
                </p>
            </div>
        </div>
    )
}

export default ConvocatoriaDetalle