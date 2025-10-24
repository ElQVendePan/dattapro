import { IoCalendarClearOutline } from "react-icons/io5"
import { FaSearch } from "react-icons/fa"
import Input from "../components/Input"

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
    // 👇 Ejemplo de otro item
    {
        id: 2,
        titulo: "Becas Fulbright para maestrías en EE.UU.",
        categoria: "Investigación",
        descripcion:
            "El programa Fulbright ofrece becas completas para estudios de posgrado en Estados Unidos, fomentando el intercambio académico y cultural entre países.",
        fechaLimite: "30 de marzo de 2026",
        imagenFondo: "/default-bg.jpg",
        imagenLogo: "https://scontent.fcuc1-1.fna.fbcdn.net/v/t39.30808-6/408872709_10159639074516811_7869800180333719582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHsHcvtk4kEs6JYgTYRRljEbjqve8qiesduOq97yqJ6x9ApepranJvev08L2LbZsptBeI9m0FRqzT_DU27HCWJS&_nc_ohc=wbOYOIfu9aYQ7kNvwF--Ms6&_nc_oc=Adk-88NdbdpFFzrVxgpnhkCis-OdYzG2DzCx_-VDk5IrezG3GTX3018Q1QV320usUaU&_nc_zt=23&_nc_ht=scontent.fcuc1-1.fna&_nc_gid=etki-k3IluzXx9kgdJT3Yw&oh=00_Afe8l9n63qrJ9eHc7XKuoB-3JeqSIvgnHZy7iJYU4_xX3w&oe=6900B8FA",
    },
    {
        id: 3,
        titulo: "Swedish Institute Scholarships: becas para profesionales globales 2026",
        categoria: "Educación",
        descripcion:
            "Formarse para transformar. Desde el #BoletíndeOfertaInternacional, te compartimos una de las becas más prestigiosas del mundo para profesionales comprometidos con el cambio social: la Swedish Institute Scholarship for Global Professionals (SISGP), un programa del Gobierno de Suecia que ofrece oportunidades de estudio y liderazgo a quienes impulsan el desarrollo sostenible en sus países.",
        fechaLimite: "15 de enero de 2026",
        imagenFondo: "https://si.se/app/uploads/2017/10/dsc5034_nyhet-4-1650x1100.jpg",
        imagenLogo: "https://culture360.asef.org/media/2011/5/Swedish_Institute.jpeg",
    },
    {
        id: 4,
        titulo: "Becas Fulbright para maestrías en EE.UU.",
        categoria: "Investigación",
        descripcion:
            "El programa Fulbright ofrece becas completas para estudios de posgrado en Estados Unidos, fomentando el intercambio académico y cultural entre países.",
        fechaLimite: "30 de marzo de 2026",
        imagenFondo: "/default-bg.jpg",
        imagenLogo: "https://scontent.fcuc1-1.fna.fbcdn.net/v/t39.30808-6/408872709_10159639074516811_7869800180333719582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHsHcvtk4kEs6JYgTYRRljEbjqve8qiesduOq97yqJ6x9ApepranJvev08L2LbZsptBeI9m0FRqzT_DU27HCWJS&_nc_ohc=wbOYOIfu9aYQ7kNvwF--Ms6&_nc_oc=Adk-88NdbdpFFzrVxgpnhkCis-OdYzG2DzCx_-VDk5IrezG3GTX3018Q1QV320usUaU&_nc_zt=23&_nc_ht=scontent.fcuc1-1.fna&_nc_gid=etki-k3IluzXx9kgdJT3Yw&oh=00_Afe8l9n63qrJ9eHc7XKuoB-3JeqSIvgnHZy7iJYU4_xX3w&oe=6900B8FA",
    },
]

const Convocatorias = () => {
    return (
        <>
            <Input icon={<FaSearch className="w-full h-full" />} placeholder="Buscar perfiles y convocatorias..." className="mt-4" />
            <div className="flex gap-6 mt-6 relative">
                {/* Columna de convocatorias */}
                <div className="w-[30%] grid grid-cols-1 gap-4">
                    {convocatoriasData.map((convocatoria) => (
                        <div
                            key={convocatoria.id}
                            className="bg-bg-secondary p-5 rounded-xl relative overflow-hidden"
                        >
                            <div className="absolute w-full h-36 top-0 left-0 overflow-hidden">
                                <img
                                    src={convocatoria.imagenFondo}
                                    className="w-full h-full object-cover opacity-50"
                                    alt={convocatoria.titulo}
                                />
                                <div className="bg-gradient-to-t from-bg-secondary to-transparent absolute bottom-0 left-0 h-full w-full" />
                                <span className="p-0.5 px-3 absolute top-3 right-3 inline-block rounded-full text-xs bg-[#f4fcff] border-2 border-primary text-primary">
                                    {convocatoria.categoria}
                                </span>
                            </div>
                            <div className="relative">
                                <div className="flex items-end justify-between">
                                    <div className="w-16 h-16 mt-16 rounded-xl border-2 border-bg-third overflow-hidden">
                                        <img
                                            src={convocatoria.imagenLogo}
                                            className="w-full h-full"
                                            alt={`${convocatoria.categoria} logo`}
                                        />
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg mt-6">{convocatoria.titulo}</h3>
                                <p className="mt-4 text-sm line-clamp-3 opacity-80">
                                    {convocatoria.descripcion}
                                </p>
                                <span className="mt-8 inline-flex items-center text-sm font-medium opacity-60">
                                    <IoCalendarClearOutline className="w-5 h-5" />
                                    <p className="ml-2">{convocatoria.fechaLimite}</p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Panel de detalles con sticky */}
                <div className="flex-1">
                    <div className="bg-bg-secondary p-6 rounded-xl sticky top-4 overflow-auto h-[calc(100vh-48px)]">
                        {/* Ajusta top según la altura de los elementos superiores */}
                        <h2 className="font-bold text-xl mb-4">Detalles de la convocatoria</h2>
                        <p className="opacity-80">
                            Selecciona una convocatoria para ver más información aquí.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Convocatorias