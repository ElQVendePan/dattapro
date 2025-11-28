import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_BASE_URL;

interface CentroInvestigativo {
    id: number;
    nombre: string;
    subtitulo: string;
}

interface UsuarioCentro {
    id: number;
    foto: string;
    nombres: string;
    apellidos: string;
}

const CentroInvestigacionModal = ({ setCanDrag }: { setCanDrag: (v: boolean) => void }) => {
    const [params] = useSearchParams();
    const centroId = params.get("id");

    const [centro, setCentro] = useState<CentroInvestigativo | null>(null);
    const [usuarios, setUsuarios] = useState<UsuarioCentro[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingUsuarios, setLoadingUsuarios] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCentro = async () => {
            try {
                const response = await axios.get(
                    `${API_URL}centro-investigativo/get_centro_investigativo.php?id=${centroId}`
                );

                if (response.data.status === "success") {
                    setCentro(response.data.data);
                } else {
                    setError("No se encontraron datos del centro.");
                }
            } catch (err) {
                console.error("Error:", err);
                setError("Ocurrió un error al cargar la información.");
            } finally {
                setLoading(false);
            }
        };

        fetchCentro();
    }, []);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get(`${API_URL}centro-investigativo/get_usuarios_por_centro.php?id=${centroId}`);
                if (response.data.status === "success") {
                    setUsuarios(response.data.data);
                } else {
                    setUsuarios([]); // No hay usuarios
                }
            } catch (err) {
                console.error("Error usuarios:", err);
            } finally {
                setLoadingUsuarios(false);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <>
            {loading && (
                <>
                    <h2 className="text-lg font-semibold mb-2">Cargando...</h2>
                    <p className="opacity-70 text-sm">
                        Obteniendo información del centro de investigación.
                    </p>
                </>
            )}

            {!loading && error && (
                <>
                    <h2 className="text-lg font-semibold mb-2">Centro de investigación</h2>
                    <p className="opacity-70 text-sm">{error}</p>
                </>
            )}

            {!loading && centro && (
                <>
                    <img
                        src={`/centro-investigativo/${centro.id}-bg.jpg`}
                        className="absolute top-0 left-0 w-full h-1/3 object-center"
                        alt={centro.nombre}
                    />
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/60 to-bg-primary" />
                    <div className="relative mt-6">
                        <div className="w-20 h-20 mx-auto overflow-hidden rounded-full">
                            <img
                                src={`/centro-investigativo/${centro.id}-logo.jpg`}
                                alt={centro.nombre}
                            />
                        </div>
                        <h2 className="text-2xl font-bold mt-4 mb-1">{centro.nombre}</h2>
                        <p className="opacity-70 text-sm w-2/3 mx-auto mb-4">
                            {centro.subtitulo}
                        </p>
                        <h3 className="font-semibold mt-6 mb-2">Investigadores</h3>
                        <div className="backdrop-blur-2xl bg-bg-secondary px-4 rounded-xl border-1 border-bg-third">
                            {loadingUsuarios ? (
                                <p className="opacity-70 text-sm py-4">Cargando investigadores…</p>
                            ) : usuarios.length === 0 ? (
                                <p className="opacity-70 text-sm py-4">No hay usuarios registrados.</p>
                            ) : (
                                <div className="divide-y divide-bg-third max-h-82 overflow-y-auto no-scrollbar"
                                    onScroll={(e) => {
                                        const el = e.currentTarget;
                                        if (el.scrollTop <= 0) {
                                            setCanDrag(true);   // ⬅ drag habilitado
                                        } else {
                                            setCanDrag(false);  // ⬅ drag deshabilitado cuando haya scroll interno
                                        }
                                    }}
                                >
                                    {usuarios.map((u) => (
                                        <>
                                            <div key={u.id} className="flex items-center gap-4 py-4">
                                                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                                                    <img
                                                        src={u.foto || "/default-user.jpg"}
                                                        alt={u.nombres}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-medium opacity-70">{u.nombres} {u.apellidos}</p>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CentroInvestigacionModal;