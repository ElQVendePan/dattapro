import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import axios from "axios"
import Input from "../components/Input"
import ConvocatoriaCard from "../components/ConvocatoriaCard"
import ConvocatoriaDetalle from "../components/ConvocatoriaDetalle"
import { useNavigate, useParams } from "react-router-dom"

interface Convocatoria {
    id: number
    titulo: string
    categoria: string
    descripcion: string
    fechaLimite: string
    imagenFondo: string
    entidadLogo: string
}

const API_URL = import.meta.env.VITE_API_BASE_URL

const Convocatorias = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [convocatorias, setConvocatorias] = useState<Convocatoria[]>([])
    const [selected, setSelected] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    // 🔹 Obtener todas las convocatorias
    useEffect(() => {
        const fetchConvocatorias = async () => {
            try {
                const response = await axios.get(`${API_URL}/convocatorias/get-all-convocatorias.php`)
                setConvocatorias(response.data)
            } catch (err) {
                console.error(err)
                setError("Error al cargar las convocatorias.")
            } finally {
                setLoading(false)
            }
        }

        fetchConvocatorias()
    }, [])

    // 🔹 Sincronizar selected con el parámetro de la URL
    useEffect(() => {
        if (id) {
            setSelected(Number(id))
        } else {
            setSelected(null)
        }
    }, [id])

    const handleSelect = (convocatoriaId: number): void => {
        navigate(`/convocatorias/${convocatoriaId}`)
    }

    if (loading) return <p className="mt-6 text-center text-gray-500">Cargando convocatorias...</p>
    if (error) return <p className="mt-6 text-center text-red-500">{error}</p>

    // 🔹 Buscar la convocatoria seleccionada para el detalle
    const selectedConvocatoria = convocatorias.find((c) => c.id == selected)

    return (
        <>
            <Input
                icon={<FaSearch className="w-full h-full" />}
                placeholder="Buscar perfiles y convocatorias..."
                className="mt-4"
            />

            <div className="flex gap-5 mt-6 relative">
                {/* Lista de convocatorias */}
                <div
                    className={`${selected ? "lg:w-[32%] grid-cols-1" : "w-full grid-cols-1 lg:grid-cols-3"} grid gap-6 items-start self-start`}
                >
                    {convocatorias.map((convocatoria) => {
                        return (
                            <ConvocatoriaCard
                                key={convocatoria.id}
                                convocatoria={convocatoria}
                                onSelect={() => handleSelect(convocatoria.id)}
                                isSelected={selected == convocatoria.id}
                            />
                        );
                    })}
                </div>

                {/* Panel de detalles */}
                {selectedConvocatoria && (
                    <div className="flex-1 fixed top-0 left-0 w-full lg:relative lg:block">
                        <ConvocatoriaDetalle convocatoria={selectedConvocatoria} />
                    </div>
                )}
            </div>
        </>
    )
}

export default Convocatorias