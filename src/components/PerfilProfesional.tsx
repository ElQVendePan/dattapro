import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { FaLocationDot } from "react-icons/fa6";
import { FaFileExport, FaShareAlt, FaSuitcase } from "react-icons/fa";
import Button from "./Button";
import { IoBookmark } from "react-icons/io5";
import { useModal } from "../hook/useModal";
import { MdCloudDownload } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

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
    centro_investigativo: string | null;
    centro_investigativo_subtitulo: string | null;
    programa_academico: string;
    facultad: string;
}

const API_URL = import.meta.env.VITE_API_BASE_URL

const PerfilProfesional: React.FC = () => {
    const [profileData, setProfileData] = useState<Usuario | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showMore, setShowMore] = useState<boolean>(false);

    const { openModal } = useModal();

    const userId = 1;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/usuarios/get-all-info-usuarios.php?id=${userId}`);
                if (response.data.status === "success") {
                    setProfileData(response.data.data);
                } else {
                    setError(response.data.message);
                }
            } catch (err) {
                setError("Error al conectar con el servidor");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return (
        <div className="mb-22">
            <Header hasBack title="Perfil Profesional" />
            <div className="bg-bg-secondary h-48 w-full fixed top-0 left-0 overflow-hidden">
                <img src={profileData?.foto ?? "/default-bg.jpg"} className="h-full w-full object-cover brightness-30 blur-xl" alt={`${profileData?.nombres} ${profileData?.apellidos}`} />
            </div>
            <div className="mt-32 px-5 relative bg-bg-primary rounded-t-3xl w-screen -ml-5">
                <div className="text-center mb-10 pb-10 border-b-1 border-bg-third">
                    <div className="rounded-full -mt-14 w-30 h-30 overflow-hidden inline-block border-4 border-bg-third shadow-2xl shadow-primary/15">
                        <img src={profileData?.foto ?? "/default-bg.jpg"} className="h-full w-full object-cover" alt={`${profileData?.nombres} ${profileData?.apellidos}`} />
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
                <b className="block mt-10">Centro de Investigación</b>
                <div className="bg-bg-secondary p-5 relative rounded-2xl mt-6 text-white flex items-center gap-4 overflow-hidden">
                    <img className="absolute w-full h-20 object-cover left-0 top-0" src="/bgs/macondolab-bg.jpg" alt="" />
                    <div className="relative mt-4 w-full">
                        <div className="w-20 h-20 overflow-hidden rounded-2xl shrink-0">
                            <img className="w-full h-full object-cover" src="https://scontent.fcuc1-1.fna.fbcdn.net/v/t39.30808-6/258686794_3077033822509106_6833670069354995515_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHdh8iB2Xe86DzqXwkK9FPd09av4cb4L7bT1q_hxvgvtoH5kFKQjwESIxXfG3kMdNiI2SIjJJ-KTg7MDNhP_veP&_nc_ohc=HfhMXw4lqUoQ7kNvwFtnjch&_nc_oc=Adn0lnAH5NywBowXe6F6jPAqgQcgivx4yEVBvkCAJQ7CXxVE28aiAxyqEYNfZzXX1Gg&_nc_zt=23&_nc_ht=scontent.fcuc1-1.fna&_nc_gid=WmALrkM9Wia2fKTunkJJcw&oh=00_AfhNscvTxiJzPHnUkMKnS3_LB6qkpb-TUw-QizzdIOSS_A&oe=691C7A9D" alt="" />
                        </div>
                        <h2 className="font-bold text-lg mt-5">{profileData?.centro_investigativo}</h2>
                        <p className="text-sm opacity-70">{profileData?.centro_investigativo_subtitulo}</p>
                        {/* <IoIosArrowForward className="absolute right-2 top-0" /> */}
                    </div>
                </div>
                <div className="mt-10 pt-10 border-t-2 border-bg-third">
                    <b className="block">Información Profesional y Académica</b>
                </div>
            </div>
        </div>
    );
};

export default PerfilProfesional;