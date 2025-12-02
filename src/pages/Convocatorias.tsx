import { useEffect, useState } from "react"
import axios from "axios"
import ConvocatoriaCard from "../components/convocatoria/ConvocatoriaCard"
import ConvocatoriaDetalle from "../components/convocatoria/ConvocatoriaDetalle"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { Link } from "react-router-dom";
import Button from "../components/forms/Button"
import { IoAdd } from "react-icons/io5"
import ConvocatoriaForm from "../components/convocatoria/ConvocatoriaForm"

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
    const { id, mode } = useParams()

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

    if (loading) return <p className="mt-6 text-center text-gray-500">Cargando convocatorias...</p>
    if (error) return <p className="mt-6 text-center text-red-500">{error}</p>

    // MODO: agregar convocatoria
    if (mode === "add") {
        return (
            <>
                <Header hasBack title="Agregar Convocatoria" />
                <ConvocatoriaForm />
            </>
        );
    }

    const selectedConvocatoria = convocatorias.find((c) => c.id == selected)

    // MODO: ver convocatoria
    if (mode === "view" && selectedConvocatoria) {
        return (
            <>
                <Header hasBack title="Agregar convocatoria" />
                <ConvocatoriaDetalle convocatoria={selectedConvocatoria} />
            </>
        );
    }

    return (
        <div className="p-5">
            <Header title="Convocatorias"></Header>
            <div className="text-center py-40">
                <h2 className="font-bold text-3xl">Convocatorias</h2>
                <div className="mt-6 text-center flex justify-center items-center gap-4">
                    <Link to={`/convocatorias/add`} onClick={() => window.scrollTo({ top: 0 })}>
                        <Button icon={<IoAdd className="w-6 h-6 mr-2" />}>Agregar</Button>
                    </Link>
                </div>
            </div>
            <h2 className="font-bold mb-2">Convocatorias</h2>
            <div className="flex gap-5 mt-6 relative mb-20">
                {/* Lista de convocatorias */}
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 items-start self-start`} >
                    {convocatorias.map((convocatoria) => {
                        return (
                            <Link key={convocatoria.id} to={`/convocatorias/view/${convocatoria.id}`} onClick={() => window.scrollTo({ top: 0 })}>
                                <ConvocatoriaCard key={convocatoria.id} convocatoria={convocatoria} isSelected={selected == convocatoria.id} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Convocatorias