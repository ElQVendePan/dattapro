import Header from "../components/Header"
import PerfilSmallCard from "../components/perfil/PerfilSmallCard"
import CentroInvestigacionCard from "../components/CentroInvestigacionCard"
import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_BASE_URL

const MapaTalento = () => {
    const [centros, setCentros] = useState([]);
    const [usuarios, setUsuarios] = useState<{ id: string }[]>([]);
    // const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Perfiles", "Centros de Investigación"];


    useEffect(() => {
        const fetchCentros = async () => {
            try {
                const response = await axios.get(`${API_URL}/centro-investigativo/get_centro_investigativo.php`);

                if (response.data.status === "success") {
                    setCentros(response.data.data);
                    console.log("Centros:", response.data.data);
                }
            } catch (error) {
                console.error("Error cargando centros:", error);
            }
        };

        const fetchNewUsuarios = async () => {
            try {
                const response = await axios.get(`${API_URL}/usuarios/get-usuarios.php`);

                if (response.data.status === "success") {
                    setUsuarios(response.data.data);
                    console.log("Nuevos usuarios:", response.data.data);
                }
            } catch (error) {
                console.error("Error cargando nuevos usuarios:", error);
            }
        };

        // Ejecutar ambas
        Promise.all([fetchCentros(), fetchNewUsuarios()])
            // .finally(() => setLoading(false));

    }, []);

    return (
        <div className="mb-20 p-5">
            <Header title="Mapa de Talento"></Header>
            <div className="text-center py-40">
                <h2 className="font-bold text-3xl">Mapa de Talento</h2>
            </div>
            <div className="flex bg-bg-secondary p-1 rounded-full border border-bg-third w-max mx-auto mb-8">
                {tabs.map((label, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`py-2 rounded-full text-xs font-semibold duration-200 ${activeTab === index ? "bg-primary text-white px-5" : "opacity-50 hover:opacity-100 px-3"}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            {activeTab === 0 && (
                <>
                    <h2 className="font-bold mb-2">Perfiles Profesionales</h2>
                    <div className="grid grid-cols-1 gap-8 select-none mt-8">
                        {usuarios.length > 0 ? (
                            usuarios.map((usuario) => (
                                <div className="w-full" key={usuario.id}>
                                    <PerfilSmallCard id={usuario.id} />
                                </div>
                            ))
                        ) : null}
                    </div>
                </>
            )}
            {activeTab === 1 && (
                <>
                    <h2 className="font-bold mb-2">Centros de Investigación</h2>
                    <div className="grid grid-cols-1 gap-8 select-none mt-8">
                        {centros.map((centro: any) => (
                            <div key={centro.id} className="w-full">
                                <CentroInvestigacionCard
                                    id={centro.id}
                                    nombre={centro.nombre}
                                    subtitulo={centro.subtitulo}
                                />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div >
    )
}

export default MapaTalento
