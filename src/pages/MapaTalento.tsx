import { FaSearch, FaSlidersH } from "react-icons/fa"
import Header from "../components/Header"
import Input from "../components/Input"
import Button from "../components/Button"
import PerfilSmallCard from "../components/perfil/PerfilSmallCard"
import CentroInvestigacionCard from "../components/CentroInvestigacionCard"
import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_BASE_URL

const MapaTalento = () => {
    const [centros, setCentros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchActive, setSearchActive] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchCentros = async () => {
            try {
                const response = await axios.get(`${API_URL}/centro-investigativo/get_centro_investigativo.php`);

                if (response.data.status === "success") {
                    setCentros(response.data.data);
                    console.log(response.data.data)
                }
            } catch (error) {
                console.error("Error cargando centros:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCentros();
    }, []);

    return (
        <div className="mb-20">
            <div className="relative bg-bg-secondary w-screen -ml-5 p-5 -mt-5 pt-22">
                <img src="/default-bg.jpg" className="w-full h-full object-cover absolute opacity-0 top-0 left-0" alt="" />
                <Header title="Mapa de Talento"></Header>
                <div className="flex items-center gap-2 relative">
                    <Input 
                        onFocus={() => setSearchActive(true)} 
                        onBlur={() => setSearchActive(false)} 
                        icon={<FaSearch className="w-full h-full" />} 
                        placeholder="¿Que es lo que buscas?"
                    />
                    <Button className="w-14 h-14 shrink-0 bg-bg-third">
                        <FaSlidersH className="w-5/6 h-5/6 mx-auto" />
                    </Button>
                </div>
            </div>
            {!searchActive ? (
                <>
                    <div className="mt-6">
                        <h2 className="font-bold mb-1 lg:mb-2">Nuevos Perfiles</h2>
                        <div className="w-screen flex items-stretch gap-4 -ml-5 overflow-x-scroll overflow-y-visible py-4 px-5 cursor-grab active:cursor-grabbing">
                            <div className="inline-block mr-4">
                                <PerfilSmallCard />
                            </div>
                            <div className="inline-block mr-4">
                                <PerfilSmallCard />
                            </div>
                            <div className="inline-block mr-4">
                                <PerfilSmallCard />
                            </div>
                            <div className="inline-block mr-4">
                                <PerfilSmallCard />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="font-bold">Centros de Investigación</h2>
                        <div className="w-screen flex items-stretch gap-4 -ml-5 overflow-x-scroll overflow-y-visible py-4 px-5 cursor-grab active:cursor-grabbing">
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
