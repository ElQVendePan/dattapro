import { useState } from "react"
import { FaSearch } from "react-icons/fa"
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
    imagenLogo: string
}

const convocatoriasData = [
    {
        id: 1,
        titulo: "Swedish Institute Scholarships: becas para profesionales globales 2026",
        categoria: "Educación",
        descripcion:
            "Formarse para transformar. Desde el #BoletíndeOfertaInternacional, te compartimos una de las becas más prestigiosas del mundo para profesionales comprometidos con el cambio social: la Swedish Institute Scholarship for Global Professionals (SISGP), un programa del Gobierno de Suecia que ofrece oportunidades de estudio y liderazgo a quienes impulsan el desarrollo sostenible en sus países.",
        fechaLimite: "15 de enero de 2026",
        imagenFondo: "https://si.se/app/uploads/2017/10/dsc5034_nyhet-4-1650x1100.jpg",
        imagenLogo: "https://culture360.asef.org/media/2011/5/Swedish_Institute.jpeg",
    },
    {
        id: 2,
        titulo: "Becas Fulbright para maestrías en EE.UU.",
        categoria: "Investigación",
        descripcion:
            "El programa Fulbright ofrece becas completas para estudios de posgrado en Estados Unidos, fomentando el intercambio académico y cultural entre países.",
        fechaLimite: "30 de marzo de 2026",
        imagenFondo: "/default-bg.jpg",
        imagenLogo: "https://scontent.fcuc1-1.fna.fbcdn.net/v/t39.30808-6/408872709_10159639074516811_7869800180333719582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHsHcvtk4kEs6JYgTYRRljEbjqve8qiesduOq97yqJ6x9ApepranJvev08L2LbZsptBeI9m0FRqzT_DU27HCWJS&_nc_ohc=okinbAU4oQwQ7kNvwGRIVOe&_nc_oc=AdmaX82iQj0snNWLBcoYxBij6lOueYKoamDpf2lzhFQ7YoPQ9ZxXuQ-4gPcdkg7rR50&_nc_zt=23&_nc_ht=scontent.fcuc1-1.fna&_nc_gid=j8RjW4gksQuFi3QUcQWmhQ&oh=00_AfeeWzUbGOLGnfQt2WVj_YPnu-nywgVur2Vk9AKL5kUITw&oe=6906A7BA",
    },
    {
        id: 3,
        titulo: "Becas Fulbright para maestrías en EE.UU.",
        categoria: "Investigación",
        descripcion:
            "El programa Fulbright ofrece becas completas para estudios de posgrado en Estados Unidos, fomentando el intercambio académico y cultural entre países.",
        fechaLimite: "30 de marzo de 2026",
        imagenFondo: "/default-bg.jpg",
        imagenLogo: "https://scontent.fcuc1-1.fna.fbcdn.net/v/t39.30808-6/408872709_10159639074516811_7869800180333719582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHsHcvtk4kEs6JYgTYRRljEbjqve8qiesduOq97yqJ6x9ApepranJvev08L2LbZsptBeI9m0FRqzT_DU27HCWJS&_nc_ohc=okinbAU4oQwQ7kNvwGRIVOe&_nc_oc=AdmaX82iQj0snNWLBcoYxBij6lOueYKoamDpf2lzhFQ7YoPQ9ZxXuQ-4gPcdkg7rR50&_nc_zt=23&_nc_ht=scontent.fcuc1-1.fna&_nc_gid=j8RjW4gksQuFi3QUcQWmhQ&oh=00_AfeeWzUbGOLGnfQt2WVj_YPnu-nywgVur2Vk9AKL5kUITw&oe=6906A7BA",
    },
    {
        id: 4,
        titulo: "Becas Fulbright para maestrías en EE.UU.",
        categoria: "Investigación",
        descripcion:
            "El programa Fulbright ofrece becas completas para estudios de posgrado en Estados Unidos, fomentando el intercambio académico y cultural entre países.",
        fechaLimite: "30 de marzo de 2026",
        imagenFondo: "/default-bg.jpg",
        imagenLogo: "https://scontent.fcuc1-1.fna.fbcdn.net/v/t39.30808-6/408872709_10159639074516811_7869800180333719582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHsHcvtk4kEs6JYgTYRRljEbjqve8qiesduOq97yqJ6x9ApepranJvev08L2LbZsptBeI9m0FRqzT_DU27HCWJS&_nc_ohc=okinbAU4oQwQ7kNvwGRIVOe&_nc_oc=AdmaX82iQj0snNWLBcoYxBij6lOueYKoamDpf2lzhFQ7YoPQ9ZxXuQ-4gPcdkg7rR50&_nc_zt=23&_nc_ht=scontent.fcuc1-1.fna&_nc_gid=j8RjW4gksQuFi3QUcQWmhQ&oh=00_AfeeWzUbGOLGnfQt2WVj_YPnu-nywgVur2Vk9AKL5kUITw&oe=6906A7BA",
    },
    {
        id: 5,
        titulo: "Becas Fulbright para maestrías en EE.UU.",
        categoria: "Investigación",
        descripcion:
            "El programa Fulbright ofrece becas completas para estudios de posgrado en Estados Unidos, fomentando el intercambio académico y cultural entre países.",
        fechaLimite: "30 de marzo de 2026",
        imagenFondo: "/default-bg.jpg",
        imagenLogo: "https://scontent.fcuc1-1.fna.fbcdn.net/v/t39.30808-6/408872709_10159639074516811_7869800180333719582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHsHcvtk4kEs6JYgTYRRljEbjqve8qiesduOq97yqJ6x9ApepranJvev08L2LbZsptBeI9m0FRqzT_DU27HCWJS&_nc_ohc=okinbAU4oQwQ7kNvwGRIVOe&_nc_oc=AdmaX82iQj0snNWLBcoYxBij6lOueYKoamDpf2lzhFQ7YoPQ9ZxXuQ-4gPcdkg7rR50&_nc_zt=23&_nc_ht=scontent.fcuc1-1.fna&_nc_gid=j8RjW4gksQuFi3QUcQWmhQ&oh=00_AfeeWzUbGOLGnfQt2WVj_YPnu-nywgVur2Vk9AKL5kUITw&oe=6906A7BA",
    },
]

const Convocatorias = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const selected = convocatoriasData.find((c) => c.id === Number(id))

    const handleSelect = (convocatoria: Convocatoria): void => {
        navigate(`/convocatorias/${convocatoria.id}`)
    }

    return (
        <>
            <Input icon={<FaSearch className="w-full h-full" />} placeholder="Buscar perfiles y convocatorias..." className="mt-4" />
            <div className="flex gap-5 mt-6 relative">
                {/* Columna de convocatorias */}
                <div className={`${selected ? "lg:w-[35%] grid-cols-1" : "w-full grid-cols-1 lg:grid-cols-3"} grid gap-6 items-start self-start`}>
                    {convocatoriasData.map((convocatoria) => (
                        <ConvocatoriaCard
                            key={convocatoria.id}
                            convocatoria={convocatoria}
                            onSelect={() => handleSelect(convocatoria)}
                            isSelected={selected?.id === convocatoria.id}
                        />
                    ))}
                </div>

                {/* Panel de detalles */}
                {selected && (
                    <div className="flex-1 fixed top-0 left-0 w-full lg:relative lg:block">
                        <ConvocatoriaDetalle convocatoria={selected} />
                    </div>
                )}
            </div>
        </>
    )
}

export default Convocatorias