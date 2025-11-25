import { FaSearch, FaSlidersH } from "react-icons/fa"
import Header from "../components/Header"
import Input from "../components/forms/Input"
import Button from "../components/Button"
import PerfilSmallCard from "../components/perfil/PerfilSmallCard"
import CentroInvestigacionCard from "../components/CentroInvestigacionCard"
import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_BASE_URL

const MapaTalento = () => {
    const [centros, setCentros] = useState([]);
    const [newUsuarios, setNewUsuarios] = useState<{ id: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchActive, setSearchActive] = useState(false);


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
                const response = await axios.get(`${API_URL}/usuarios/get-new-usuarios.php`);

                if (response.data.status === "success") {
                    setNewUsuarios(response.data.data);
                    console.log("Nuevos usuarios:", response.data.data);
                }
            } catch (error) {
                console.error("Error cargando nuevos usuarios:", error);
            }
        };

        // Ejecutar ambas
        Promise.all([fetchCentros(), fetchNewUsuarios()])
            .finally(() => setLoading(false));

    }, []);

    return (
        <div className="mb-20 p-5">
            <div className="relative bg-bg-secondary lg:bg-transparent w-screen lg:w-full -ml-5 lg:ml-0 p-5 lg:px-0 -mt-5 lg:-mt-2 pt-22">
                <Header title="Mapa de Talento"></Header>
                <div className="flex items-center gap-2 relative">
                    <div className="w-120">
                        <Input
                            onFocus={() => setSearchActive(true)}
                            onBlur={() => setSearchActive(false)}
                            icon={<FaSearch className="w-full h-full" />}
                            placeholder="¿Que es lo que buscas?"
                        />
                    </div>
                    <Button className="w-14 h-14 shrink-0 bg-bg-third">
                        <FaSlidersH className="w-5/6 h-5/6 mx-auto" />
                    </Button>
                </div>
            </div>
            {!searchActive ? (
                <>
                    {newUsuarios.length > 0 ? (
                        <div className="mt-6">
                            <h2 className="font-bold mb-2">Nuevos Perfiles</h2>
                            <div className="w-screen lg:w-full flex items-stretch gap-4 -ml-5 lg:ml-0 overflow-x-auto py-4 px-5 lg:px-0 select-none">
                                {newUsuarios.length > 0 ? (
                                    newUsuarios.map((usuario) => (
                                        <div className="inline-block mr-4" key={usuario.id}>
                                            <PerfilSmallCard id={usuario.id} />
                                        </div>
                                    ))
                                ) : null}
                            </div>
                        </div>
                    ) : null}
                    <div className="mt-6">
                        <h2 className="font-bold mb-2">Centros de Investigación</h2>
                        <div className="w-screen lg:w-full flex items-stretch gap-4 -ml-5 lg:ml-0 overflow-x-auto py-4 px-5 lg:px-0 select-none">
                            {centros.map((centro: any) => (
                                <div key={centro.id} className="flex-shrink-0 flex w-80">
                                    <CentroInvestigacionCard
                                        id={centro.id}
                                        nombre={centro.nombre}
                                        subtitulo={centro.subtitulo}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default MapaTalento
