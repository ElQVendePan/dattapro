import { useEffect, useState } from "react";
import axios from "axios";
import { useModal } from "../hook/useModal";

const API_URL = import.meta.env.VITE_API_BASE_URL;

interface CentroInvestigacionCardProps {
    id: string;
    nombre: string;
    subtitulo: string;
}

interface UsuarioCentro {
    id: string;
    foto: string;
    nombres: string;
    apellidos: string;
}

const CentroInvestigacionCard = ({ id, nombre, subtitulo }: CentroInvestigacionCardProps) => {
    const { openModal } = useModal();

    const [usuarios, setUsuarios] = useState<UsuarioCentro[]>([]);
    const [loadingUsuarios, setLoadingUsuarios] = useState(true);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const res = await axios.get(
                    `${API_URL}centro-investigativo/get_usuarios_por_centro.php?id=${id}`
                );

                if (res.data.status === "success") {
                    setUsuarios(res.data.data);
                } else {
                    setUsuarios([]);
                }
            } catch (error) {
                console.error("Error cargando usuarios:", error);
                setUsuarios([]);
            } finally {
                setLoadingUsuarios(false);
            }
        };

        fetchUsuarios();
    }, [id]);

    // Mostrar máximo 5 avatares
    const maxAvatars = 5;
    const usuariosToShow = usuarios.slice(0, maxAvatars);
    const remaining = usuarios.length - maxAvatars;

    return (
        <div
            onClick={() => openModal("centro-investigacion", { id })}
            className="bg-bg-secondary w-full p-5 relative rounded-2xl flex items-start gap-4 border-1 border-bg-secondary overflow-hidden hover:brightness-110 hover:scale-98 hover:border-primary duration-200"
        >
            <img className="absolute w-full h-20 object-cover left-0 top-0" src={`/centro-investigativo/${id}-bg.jpg`} alt="" />
            <div className="relative w-full mt-6">
                <div className="w-16 h-16 overflow-hidden rounded-xl shrink-0">
                    <img className="w-full h-full object-cover" src={`/centro-investigativo/${id}-logo.jpg`} alt={nombre} />
                </div>
                <h2 className="font-bold mt-4">{nombre}</h2>
                <p className="text-xs opacity-70 w-full">{subtitulo}</p>
                {/* Perfiles dinámicos */}
                <div className="mt-4 flex items-center">
                    {loadingUsuarios ? (
                        <p className="opacity-60 text-xs">Cargando...</p>
                    ) : usuariosToShow.length === 0 ? (
                        <p className="opacity-60 text-xs">Sin investigadores</p>
                    ) : (
                        <>
                            {usuariosToShow.map((u, idx) => (
                                <div key={u.id} className={`${idx > 0 ? "-ml-3" : ""} w-8 h-8 rounded-full overflow-hidden border-2 border-bg-third`}>
                                    <img className="w-full h-full object-cover" src={u.foto || "/default-user.jpg"} alt={`${u.nombres} ${u.apellidos}`}
                                    />
                                </div>
                            ))}
                            {remaining > 0 && (
                                <div className="-ml-3 w-8 h-8 rounded-full overflow-hidden border-2 border-bg-third bg-bg-third flex items-center justify-center text-xs font-bold opacity-80">
                                    <p>+{remaining}</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CentroInvestigacionCard;