import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobeAmericas, FaLink, FaShareAlt, FaSuitcase } from "react-icons/fa";
import Button from "../Button";
import { useModal } from "../../hook/useModal";
import { MdCloudDownload, MdInsights, MdWorkOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import CentroInvestigacionCard from "../CentroInvestigacionCard";
import Error from "../Error";
import { FiBook, FiCheckCircle, FiFileText, FiHash, FiMail } from "react-icons/fi";
import type { Usuario } from "../../types/Usuario";
import { areaIcons, sectoresMap } from "./perfil.constants";
import { ProfileInfoItem } from "./ProfileInfoItem";
import { TablaCompetencias } from "./TablaCompetencias";

const API_URL = import.meta.env.VITE_API_BASE_URL

const PerfilProfesional: React.FC = () => {
    const [profileData, setProfileData] = useState<Usuario | null>(null);
    const [idiomasUsuario, setIdiomasUsuario] = useState<{ idioma_id: number; idioma: string; nivel: string; porcentaje: number; }[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showMore, setShowMore] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<"transversales" | "tecnicas">("transversales");

    const tabs: { key: "transversales" | "tecnicas"; label: string }[] = [
        { key: "transversales", label: "Transversales" },
        { key: "tecnicas", label: "Técnicas" },
    ];

    const { openModal } = useModal();
    const { id } = useParams();

    const userId = id;

    const getAreaIcon = (area_id: number) => {
        return areaIcons[area_id] || <MdWorkOutline />; // fallback profesional
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/usuarios/get-all-info-usuarios.php?id=${userId}`);

                if (response.data.status === "success") {
                    console.log(response.data.data)
                    setProfileData(response.data.data);
                } else {
                    setError(response.data.message);
                }
                const idiomasRes = await axios.get(`${API_URL}/maps/get-usuario-idioma.php?id=${userId}`);
                if (idiomasRes.data.status === "success") {
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
                setError((err as Error)?.name + " - " + (err as Error)?.message || "Unknown error.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [userId]);

    if (error) {
        return (
            <Error error={error} />
        );
    }

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
                        <Button className="w-14 h-14 shrink-0" onClick={() => openModal('external-profile')}>
                            <FaLink className="w-5/6 h-5/6 mx-auto" />
                        </Button>
                        <Button primary onClick={() => openModal('export-profile')} className="w-full" icon={<MdCloudDownload className="w-full h-full" />}>Exportar Perfil</Button>
                    </div>
                </div>
                {/* Perfil Profesional */}
                <h2 className="font-bold">Perfil Profesional</h2>
                <p className={`opacity-80 mt-4 mb-2 ${showMore ? '' : 'line-clamp-5'}`}>
                    {profileData?.biostatement ?? "El usuario no ha proporcionado un perfil profesional."}
                </p>
                {profileData?.biostatement && profileData.biostatement.length > 0 && (
                    <p className="text-primary font-bold" onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Mostrar menos" : "Mostrar más"}
                    </p>
                )}
                <h2 className="font-medium mt-8">Areas de Especialidad</h2>
                <div className="mt-4 w-full bg-bg-secondary rounded-2xl border-1 border-bg-third divide-y divide-bg-third">
                    {profileData?.areas_especialidad.map((a) => (
                        <div key={a.id} className="flex items-center gap-4 p-4">
                            <span className="flex items-center bg-primary/5 text-primary justify-center h-12 w-12 rounded-xl">
                                {getAreaIcon(a.area_id)}
                            </span>
                            <span className="font-medium opacity-80">
                                {a.area}
                            </span>
                        </div>
                    ))}
                </div>
                <details className="mt-6 p-4 bg-bg-secondary border-1 border-bg-third rounded-xl group">
                    <summary className="cursor-pointer opacity-80 font-semibold group-open:text-primary group-open:opacity-100">Información Adicional</summary>
                    <ul className="mt-8 space-y-3">
                        <ProfileInfoItem
                            icon={<FiFileText />}
                            label="Tipo documento"
                            value={profileData?.tipo_documento}
                        />

                        <ProfileInfoItem
                            icon={<FiHash />}
                            label="Número ID"
                            value={profileData?.numero_identificacion}
                        />

                        <ProfileInfoItem
                            icon={<FiMail />}
                            label="Correo institucional"
                            value={profileData?.correo_institucional}
                            breakWord={true}
                        />

                        <ProfileInfoItem
                            icon={<FiBook />}
                            label="Programa Académico"
                            value={profileData?.programa_academico}
                        />
                    </ul>
                </details>
                {/* Servicios */}
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <h2 className="font-bold">Servicios</h2>
                </div>
                <div className="mt-4 flex gap-4 overflow-x-auto w-screen -ml-5 px-5 no-scrollbar">
                    {profileData?.servicios?.map((s) => (
                        <div key={s.id} className="min-w-36 p-4 rounded-xl border-2 border-bg-third bg-bg-secondary">
                            <div className="bg-primary/20 w-10 h-10 flex items-center justify-center rounded-xl">
                                <FiCheckCircle className="text-primary w-1/2 h-1/2" />
                            </div>
                            <span className="mt-8 block font-bold text-sm opacity-80">
                                {s.servicio}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Formacion Academica */}
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <h2 className="font-bold">Formación Académica</h2>
                </div>
                <div className="mt-8 relative border-l border-primary ml-3">
                    {profileData?.formacion?.map((f) => (
                        <div key={f.id} className="mb-6 ml-4">
                            <div className="w-3 h-3 bg-primary rounded-full absolute -left-1.5 mt-1.5" />
                            <p className="text-sm font-medium text-primary">{f.nivel_formacion}</p>
                            <p className="text-base opacity-80">{f.titulo}</p>
                        </div>
                    ))}
                </div>
                {/* Certificaciones */}
                <div className="mt-10 space-y-4">
                    {profileData?.certificaciones?.map((c) => (
                        <div key={c.id} className="flex items-center justify-between p-3 border border-bg-third rounded-xl hover:shadow-sm transition">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="opacity-80 font-medium">{c.certificacion}</span>
                            </div>
                            <span className="text-xs opacity-60 font-medium">
                                Certificación
                            </span>
                        </div>
                    ))}
                </div>
                {/* Areas de Conocimiento */}
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <h2 className="font-bold">Areas de Conocimiento</h2>
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
                {/* Idiomas */}
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <h2 className="font-bold">Idiomas</h2>
                </div>
                <div className="mt-4 space-y-4">
                    {idiomasUsuario.length > 0 ? (
                        idiomasUsuario.map((item, index) => (
                            <div key={index} className="p-4 bg-bg-secondary rounded-2xl border border-bg-third flex items-start gap-4">
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
                        <p className="opacity-80 text-sm">Este usuario no ha registrado idiomas.</p>
                    )}
                </div>
                {/* Centros de Investigación */}
                <h2 className="font-bold mt-10 mb-4">Centros de Investigación</h2>
                <CentroInvestigacionCard id={profileData?.centro_investigativo_id ?? ""} nombre={profileData?.centro_investigativo ?? ""} subtitulo={profileData?.centro_investigativo_subtitulo ?? ""}></CentroInvestigacionCard>
                {/* Experiencia en Proyectos */}
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <h2 className="font-bold">Experiencia en Proyectos</h2>
                </div>
                <p className="mt-4 opacity-80">"{profileData?.proyectos_text ?? "El usuario no ha proporcionado una descripción de su experiencia en proyectos."}"</p>
                <b className="mt-8 block font-semibold">Categorias de Proyectos</b>
                <div className="mt-4 flex flex-wrap gap-y-4 gap-x-2">
                    {profileData?.proyectos_experiencia?.length ? (
                        profileData.proyectos_experiencia.map((proyecto, index) => (
                            <span key={index} className="border-1 border-primary  bg-primary/10 text-sm font-medium px-5 py-2 rounded-full shadow-sm">{proyecto.proyecto}</span>
                        ))
                    ) : (
                        <p className="text-gray-500">El usuario no ha proporcionado experiencias en proyectos.</p>
                    )}
                </div>
                <b className="mt-8 block font-semibold">Sectores de Experiencia</b>
                <div className="space-y-4 mt-6">
                    {profileData?.sectores_experiencia?.map((s) => (
                        <div key={s.id} className="flex items-center gap-4 p-2 rounded-2xl border border-bg-third bg-bg-secondary relative overflow-hidden">
                            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary">
                                {sectoresMap[s.sector_id]?.icon}
                            </div>
                            <span className="font-semibold opacity-80">{s.sector}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <div className="flex flex-row items-center justify-between gap-3">
                        <h2 className="font-bold">Competencias</h2>
                        {/* SWITCHER */}
                        <div className="flex bg-bg-secondary p-1 rounded-full border border-bg-third w-max">
                            {tabs.map((t) => (
                                <button
                                    key={t.key}
                                    onClick={() => setActiveTab(t.key)}
                                    className={`py-2 rounded-full text-xs font-semibold duration-200 ${activeTab === t.key ? "bg-primary text-white px-4" : "opacity-50 hover:opacity-100 px-3"}`}>
                                    {t.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {activeTab === "transversales" && (
                        <TablaCompetencias data={profileData?.competencias?.transversales ?? []} />
                    )}
                    {activeTab === "tecnicas" && (
                        <TablaCompetencias data={profileData?.competencias?.tecnicas ?? []} />
                    )}
                </div>
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <h2 className="font-bold">Intereses</h2>
                </div>
                <div className="mt-4 w-full bg-bg-secondary rounded-2xl border border-bg-third">
                    <ul className="divide-y divide-bg-third">
                        {profileData?.intereses_red?.map((i) => (
                            <li key={i.id} className="flex items-center gap-4 p-4">
                                {/* Un ícono más sutil */}
                                <span className="text-primary text-xl">
                                    <MdInsights />
                                </span>
                                <span className="text-sm font-medium opacity-80">
                                    {i.interes}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default PerfilProfesional;