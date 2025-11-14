import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobeAmericas, FaShareAlt, FaSuitcase } from "react-icons/fa";
import Button from "../Button";
import { useModal } from "../../hook/useModal";
import { MdCloudDownload } from "react-icons/md";
import { useParams } from "react-router-dom";
import CentroInvestigacionCard from "../CentroInvestigacionCard";

interface Usuario {
    id: number;
    nombres: string;
    apellidos: string;
    foto: string | null;
    tipo_documento: string;
    numero_identificacion: string;
    correo_institucional: string;
    biostatement: string | null;
    tipo_vinculacion: string;
    sede: string;
    centro_investigativo_id: string | null;
    centro_investigativo: string | null;
    centro_investigativo_subtitulo: string | null;
    programa_academico: string;
    facultad: string;
    areas_conocimiento: string | null;
}

const API_URL = import.meta.env.VITE_API_BASE_URL

const PerfilProfesional: React.FC = () => {
    const [profileData, setProfileData] = useState<Usuario | null>(null);
    const [idiomasUsuario, setIdiomasUsuario] = useState<{ idioma_id: number; idioma: string; nivel: string; porcentaje: number; }[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showMore, setShowMore] = useState<boolean>(false);

    const { openModal } = useModal();
    const { id } = useParams();

    const userId = id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/usuarios/get-all-info-usuarios.php?id=${userId}`);

                if (response.data.status === "success") {
                    setProfileData(response.data.data);
                } else {
                    setError(response.data.message);
                }
                const idiomasRes = await axios.get(`${API_URL}/maps/get-usuario-idioma.php?id=${userId}`);
                if (idiomasRes.data.status === "success") {
                    console.log(idiomasRes.data)
                    const idiomasConPorcentaje = idiomasRes.data.data.map((item: { idioma_id: number; nivel_id: number; idioma: any; nivel: any; }) => {
                        const porcentaje = Math.round((item.nivel_id / 7) * 100);
                        return {
                            idioma_id: item.idioma_id,
                            idioma: item.idioma,
                            nivel: item.nivel,
                            porcentaje: porcentaje
                        };
                    });
                    setIdiomasUsuario(idiomasConPorcentaje);
                }
            } catch (err) {
                console.log(err);
                setError("Error al conectar con el servidor");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [userId]);

    if (loading) {
        return (
            <>
                <Header hasBack title="Perfil Profesional" />
                <div className="animate-pulse">
                    <div className="bg-bg-secondary h-48 w-full fixed top-0 left-0 overflow-hidden">
                        <div className="h-full w-full bg-skeleton/30"></div>
                    </div>
                    <div className="mt-32 px-5 relative bg-bg-primary rounded-t-3xl w-screen -ml-5 pb-20">
                        <div className="text-center mb-10 pb-10 border-b-1 border-bg-third">
                            <div className="relative inline-block">
                                <div className="rounded-full -mt-14 w-30 h-30 overflow-hidden inline-block border-4 border-bg-third shadow-2xl shadow-primary/15 bg-skeleton"></div>
                                <div className="absolute bottom-2 right-1 w-8 h-8 border-2 border-primary rounded-full bg-skeleton"></div>
                            </div>
                            <div className="mt-4 mx-auto w-40 h-6 rounded-full bg-skeleton"></div>
                            <div className="mt-2 mx-auto w-28 h-5 rounded-full bg-skeleton opacity-70"></div>
                            <div className="flex items-center justify-center text-sm mt-6 gap-8">
                                <div className="w-28 h-5 bg-skeleton rounded-full"></div>
                                <div className="w-28 h-5 bg-skeleton rounded-full"></div>
                            </div>
                            <div className="flex items-center mt-10 gap-2">
                                <div className="w-14 h-14 bg-skeleton rounded-xl"></div>
                                <div className="flex-1 h-14 bg-skeleton rounded-xl"></div>
                            </div>
                        </div>
                        {/* Perfil Profesional */}
                        <div>
                            <div className="w-40 h-6 bg-skeleton rounded"></div>
                            <div className="mt-4 space-y-3">
                                <div className="w-full h-4 bg-skeleton rounded"></div>
                                <div className="w-full h-4 bg-skeleton rounded"></div>
                                <div className="w-5/6 h-4 bg-skeleton rounded"></div>
                                <div className="w-4/6 h-4 bg-skeleton rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="mb-22">
            <Header hasBack title="Perfil Profesional" />
            <div className="bg-bg-secondary h-48 w-full fixed top-0 left-0 overflow-hidden">
                <img src={profileData?.foto ?? "/default-bg.jpg"} className="h-full w-full object-cover brightness-30 blur-xl" alt={`${profileData?.nombres} ${profileData?.apellidos}`} />
            </div>
            <div className="mt-32 px-5 relative bg-bg-primary rounded-t-3xl w-screen -ml-5">
                <div className="text-center mb-10 pb-10 border-b-1 border-bg-third">
                    <div className="relative inline-block">
                        <div className="rounded-full -mt-14 w-30 h-30 overflow-hidden inline-block border-4 border-bg-third shadow-2xl shadow-primary/15">
                            <img src={profileData?.foto ?? "/default-bg.jpg"} className="h-full w-full object-cover" alt={`${profileData?.nombres} ${profileData?.apellidos}`} />
                        </div>
                        {profileData?.centro_investigativo_id && (
                            <div className="absolute bottom-2 right-1 w-8 h-8 border-2 border-orange-500 rounded-full overflow-hidden">
                                <img className="w-full h-full object-cover" src={`/centro-investigativo/${profileData.centro_investigativo_id}-logo.jpg`} alt={profileData.centro_investigativo ?? ""} />
                            </div>
                        )}
                    </div>
                    <h2 className="font-bold text-2xl mt-4">{profileData?.nombres}</h2>
                    <p className="text-lg opacity-70">{profileData?.apellidos}</p>
                    <div className="flex items-center justify-center text-sm mt-6">
                        <div className="flex items-center justify-center">
                            <FaLocationDot className="inline-block mr-2 text-primary" />
                            <span className="opacity-70">{profileData?.sede}</span>
                        </div>
                        <div className="ml-4 pl-4 border-l-1 border-bg-third flex items-center justify-center">
                            <FaSuitcase className="inline-block mr-2 text-primary" />
                            <span className="opacity-70">{profileData?.facultad}</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-10 gap-2">
                        <Button className="w-14 h-14 shrink-0">
                            <FaShareAlt className="w-5/6 h-5/6 mx-auto" />
                        </Button>
                        <Button primary onClick={() => openModal('export-profile')} className="w-full" icon={<MdCloudDownload className="w-full h-full" />}>Exportar Perfil</Button>
                    </div>
                </div>
                <h2 className="font-bold">Perfil Profesional</h2>
                <p className={`opacity-60 mt-4 mb-2 ${showMore ? '' : 'line-clamp-5'}`}>
                    {profileData?.biostatement ?? "El usuario no ha proporcionado un perfil profesional."}
                </p>
                {profileData?.biostatement && profileData.biostatement.length > 0 && (
                    <p className="text-primary font-bold" onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Mostrar menos" : "Mostrar más"}
                    </p>
                )}
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <b className="block">Areas de Conocimiento</b>
                </div>
                <div className="mt-4 flex flex-wrap gap-y-4 gap-x-2">
                    {profileData?.areas_conocimiento?.length ? (
                        profileData.areas_conocimiento.split(" - ").map((area, index) => (
                            <span key={index} className="border-1 border-primary  bg-primary/10 text-sm font-medium px-5 py-2 rounded-full shadow-sm">{area}</span>
                        ))
                    ) : (
                        <p className="text-gray-500">El usuario no ha proporcionado áreas de conocimiento.</p>
                    )}
                </div>
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <b className="block">Idiomas</b>
                </div>
                <div className="mt-4">
                    <div className="space-y-4">
                        {idiomasUsuario.length > 0 ? (
                            idiomasUsuario.map((item, index) => (
                                <div key={index} className="p-4 bg-bg-secondary rounded-2xl shadow-sm border border-bg-third flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden">
                                        {item.idioma_id > 4 ? <FaGlobeAmericas className="text-primary" /> : <img src={`/idiomas/${item.idioma_id}.jpg`} className="w-full h-full object-cover" alt="" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-bold">{item.idioma}</span>
                                            <span className="text-primary font-medium">{item.nivel}</span>
                                        </div>
                                        <div className="w-full bg-bg-third h-2 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${item.porcentaje}%` }} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="opacity-60 text-sm">Este usuario no ha registrado idiomas.</p>
                        )}
                    </div>
                </div>
                <b className="block mt-10 mb-4">Centro de Investigación</b>
                <CentroInvestigacionCard id={profileData?.centro_investigativo_id ?? ""} nombre={profileData?.centro_investigativo ?? ""} subtitulo={profileData?.centro_investigativo_subtitulo ?? ""}></CentroInvestigacionCard>
            </div>
        </div >
    );
};

export default PerfilProfesional;