import { useNavigate, useParams } from "react-router-dom";
import SignupPage1 from "../components/signup/SignupPage1";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSignupStore } from "../store/signupStore";
import SignupPage2 from "../components/signup/SignupPage2";
import SignupPage3 from "../components/signup/SignupPage3";
import SignupPage4 from "../components/signup/SignupPage4";
import SignupPage5 from "../components/signup/SignupPage5";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const fetchData = async (url: string) => {
    try {
        const res = await axios.get(url);
        return res.data.status === "success" ? res.data.data : [];
    } catch (error) {
        console.error("Error en la petición:", error);
        return [];
    }
};

const Signup = () => {
    const { register, handleSubmit, watch, control, formState: { errors, isValid } } = useForm({
        mode: "onChange"
    });

    const { id } = useParams();
    const navigate = useNavigate();
    const { setData } = useSignupStore();

    // Watch values
    const tipoDocumentoValue = watch("tipo_documento");
    const facultadValue = watch("facultad");
    const programaValue = watch("programa_academico");
    const tipoVinculacionValue = watch("tipo_vinculacion");
    const sedeValue = watch("sede");
    const areaConocimientoValue = watch("area_conocimiento");
    const certificacionValue = watch("certificacion");
    const tiposProyectoValue = watch("tipos_proyecto");
    const tiposServicioValue = watch("tipos_servicio");
    const areasEspecialidadValue = watch("areas_especialidad");

    // Data
    const [tiposDocumento, setTiposDocumento] = useState([]);
    const [facultades, setFacultades] = useState([]);
    const [programas, setProgramas] = useState([]);
    const [areasConocimiento, setAreasConocimiento] = useState([]);
    const [certificaciones, setCertificaciones] = useState([]);
    const [tiposProyecto, setTiposProyecto] = useState([]);
    const [tiposServicio, setTiposServicio] = useState([]);
    const [areasEspecialidad, setAreasEspecialidad] = useState([]);

    useEffect(() => {
        (async () => {
            setTiposDocumento(await fetchData(`${API_URL}/data/get-tipos-documento.php`));
            setFacultades(await fetchData(`${API_URL}/data/get-facultades.php`));
            setAreasConocimiento(await fetchData(`${API_URL}/data/get-areas-conocimiento.php`));
            setCertificaciones(await fetchData(`${API_URL}/data/get-certificaciones.php`));
            setTiposProyecto(await fetchData(`${API_URL}/data/get-tipos-proyecto.php`));
            setTiposServicio(await fetchData(`${API_URL}/data/get-servicios.php`));
            setAreasEspecialidad(await fetchData(`${API_URL}/data/get-areas-especialidad.php`));
        })();
    }, []);

    useEffect(() => {
        if (!facultadValue) return;

        (async () => {
            setProgramas(
                await fetchData(`${API_URL}/data/get-programa-academico.php?id_facultad=${facultadValue}`)
            );
        })();
    }, [facultadValue]);

    const onSubmit = (data: any) => {
        console.log(data);
        setData(data);

        if (id) {
            navigate(`/signup/${Number(id) + 1}`);
        }
    };

    return (
        <>
            {!id && <SignupPage1 />}

            {id === "2" && (
                <div className="p-5">
                    <form className="mt-5 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                        <SignupPage2
                            register={register}
                            errors={errors}
                            watchValues={{
                                tipoDocumentoValue,
                                facultadValue,
                                programaValue,
                                tipoVinculacionValue,
                                sedeValue
                            }}
                            tiposDocumento={tiposDocumento}
                            facultades={facultades}
                            programas={programas}
                        />
                        <div className="mt-6 grid">
                            <Button primary disabled={!isValid}>Continuar</Button>
                        </div>
                    </form>
                </div>
            )}

            {id === "3" && (
                <div className="p-5">
                    <form className="mt-5 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                        <SignupPage3
                            register={register}
                            control={control}
                            watchValues={{ areaConocimientoValue, certificacionValue }}
                            areasConocimiento={areasConocimiento}
                            certificaciones={certificaciones}
                        />
                        <div className="mt-6 grid">
                            <Button primary disabled={!isValid}>Continuar</Button>
                        </div>
                    </form>
                </div>
            )}

            {id === "4" && (
                <div className="p-5">
                    <form className="mt-5 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                        <SignupPage4
                            register={register}
                            errors={errors}
                            watchValues={{ tiposProyectoValue }}
                            tiposProyecto={tiposProyecto}
                        />
                        <div className="mt-6 grid">
                            <Button primary disabled={!isValid}>Continuar</Button>
                        </div>
                    </form>
                </div>
            )}

            {id === "5" && (
                <div className="p-5">
                    <form className="mt-5 max-w-lg" onSubmit={handleSubmit(onSubmit)}>
                        <SignupPage5
                            register={register}
                            errors={errors}
                            tiposServicio={tiposServicio}
                            areasEspecialidad={areasEspecialidad}
                            watchValues={{ tiposServicioValue, areasEspecialidadValue }}
                        />
                        <div className="mt-6 grid">
                            <Button primary disabled={!isValid}>Continuar</Button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Signup;