import { IoCalendarClearOutline } from "react-icons/io5"

type ConvocatoriaCardProps = {
    convocatoria: {
        imagenFondo: string;
        imagenLogo: string;
        titulo: string;
        categoria: string;
        descripcion: string;
        fechaLimite: string;
    };
    onSelect: () => void;
    isSelected: boolean;
};

const ConvocatoriaCard = ({ convocatoria, onSelect, isSelected }: ConvocatoriaCardProps) => {
    return (
        <div onClick={onSelect} className={`bg-bg-secondary p-5 rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-200 ${isSelected ? "ring-2 ring-primary" : "hover:ring-1 hover:ring-primary/50"}`}>
            <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
                <img src={convocatoria.imagenFondo} className="w-full h-full object-cover opacity-25" alt={convocatoria.titulo} />
                <div className="bg-gradient-to-t from-bg-primary to-transparent absolute bottom-0 left-0 h-[150%] w-full" />
                <span className="p-0.5 px-3 absolute top-5 right-5 inline-block rounded-full text-xs bg-[#f4fcff] border-2 border-primary text-primary">
                    {convocatoria.categoria}
                </span>
            </div>
            <div className="relative">
                <div className="w-16 h-16 rounded-xl border-2 border-bg-third overflow-hidden">
                    <img src={convocatoria.imagenLogo} className="w-full h-full" alt={`${convocatoria.categoria} logo`} />
                </div>
                <h3 className="font-bold text-lg mt-4">{convocatoria.titulo}</h3>
                <p className="mt-4 text-sm line-clamp-3 opacity-80">
                    {convocatoria.descripcion}
                </p>
                <span className="mt-8 inline-flex items-center text-sm font-medium opacity-60">
                    <IoCalendarClearOutline className="w-5 h-5" />
                    <p className="ml-2">{convocatoria.fechaLimite}</p>
                </span>
            </div>
        </div>
    )
}

export default ConvocatoriaCard
