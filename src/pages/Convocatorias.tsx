import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import axios from "axios"
import Input from "../components/Input"
import ConvocatoriaCard from "../components/ConvocatoriaCard"
import ConvocatoriaDetalle from "../components/ConvocatoriaDetalle"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import { Link } from "react-router-dom";

interface Convocatoria {
    id: number
    titulo: string
    categoria: string
    descripcion: string
    fechaInicio: string
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

    useEffect(() => {
        if (id) {
            setSelected(Number(id))
        } else {
            setSelected(null)
        }
    }, [id])

    const handleSelect = (convocatoriaId: number): void => {
        navigate(`/convocatorias/${convocatoriaId}`)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (loading) return <p className="mt-6 text-center text-gray-500">Cargando convocatorias...</p>
    if (error) return <p className="mt-6 text-center text-red-500">{error}</p>

    const selectedConvocatoria = convocatorias.find((c) => c.id == selected)

    if (selectedConvocatoria) {
        return (
            <>
                <Header hasBack title="Convocatoria"></Header>
                <ConvocatoriaDetalle convocatoria={selectedConvocatoria} />
            </>
        )
    }

    return (
        <>
            <Header title="Convocatorias"></Header>
            <Input icon={<FaSearch className="w-full h-full" />} placeholder="Buscar perfiles y convocatorias..." className="mt-16" />
            <div className="flex gap-5 mt-6 relative">
                {/* Lista de convocatorias */}
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 items-start self-start`} >
                    {convocatorias.map((convocatoria) => {
                        return (
                            <Link
                                key={convocatoria.id}
                                to={`/convocatorias/${convocatoria.id}`}
                                onClick={() => window.scrollTo({ top: 0 })}
                            >
                                <ConvocatoriaCard
                                    key={convocatoria.id}
                                    convocatoria={convocatoria}
                                    isSelected={selected == convocatoria.id}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Convocatorias