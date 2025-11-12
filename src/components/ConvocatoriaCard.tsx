import { FaAward } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5"

type ConvocatoriaCardProps = {
    convocatoria: {
        imagenFondo: string;
        entidadLogo: string;
        titulo: string;
        categoria: string;
        descripcion: string;
        fechaLimite: string;
        entidadNombre?: string;
    };
    onSelect?: () => void;
    isSelected: boolean;
};

const ConvocatoriaCard = ({ convocatoria, onSelect, isSelected }: ConvocatoriaCardProps) => {
    return (
        <div onClick={onSelect} className={`bg-bg-secondary p-5 rounded-3xl relative overflow-hidden cursor-pointer transition-all duration-200 ${isSelected ? "ring-2 ring-primary" : "hover:ring-1 hover:ring-primary/50"}`}>
            <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
                <img src={convocatoria.imagenFondo} className="w-full h-full object-cover opacity-15" alt={convocatoria.titulo} />
                <div className="bg-gradient-to-t from-bg-primary/80 to-transparent absolute bottom-0 left-0 h-[150%] w-full" />
            </div>
            <div className="relative">
                <div className="w-18 h-18 rounded-xl border-2 border-bg-third overflow-hidden">
                    <img src={convocatoria.entidadLogo} className="w-full h-full bg-white" alt={`${convocatoria.categoria} logo`} />
                </div>
                <h3 className="font-bold text-lg mt-4">{convocatoria.titulo}</h3>
                <p className="mt-6 text-sm line-clamp-3 opacity-80">
                    {convocatoria.descripcion}
                </p>
                <div className="flex justify-between items-center mt-8">
                    <div className="bg-primary text-white inline-flex items-center gap-1 p-1 px-4 rounded-full">
                        <FaAward />
                        <span>{convocatoria.categoria}</span>
                    </div>
                    <span className="inline-flex items-center text-sm font-medium opacity-60">
                        <IoCalendarClearOutline className="w-5 h-5" />
                        <p className="ml-2">{convocatoria.fechaLimite}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ConvocatoriaCard
