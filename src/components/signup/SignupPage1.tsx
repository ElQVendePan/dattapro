import { useForm } from "react-hook-form";
import Subtitle from "../Subtitle";
import Question, { QuestionLabel } from "../forms/Question";
import { Radio, RadioGroup } from "../forms/Radio";
import Button from "../forms/Button";
import { useModal } from "../../hook/useModal";
import { useNavigate } from "react-router-dom";

const SignupPage1 = () => {
    const { register, handleSubmit, watch, formState: { isValid } } = useForm({
        mode: "onChange"
    });
    const autorizacionValue = watch("autorizacion");
    const { openModal } = useModal();
    const navigate = useNavigate();

    const onSubmit = () => {
        if (autorizacionValue === "1") {
            // openModal('validate-id');
            navigate('2');
            return;
        } else {
            openModal('unauthorized-data-use');
        }
    };

    return (
        <>
            <div className="bg-primary/10 relative p-5 w-screen left-0 top-0">
                <img src="/default-bg.jpg" className="absolute w-full h-full object-cover top-0 left-0" alt="" />
                <img src="/dattapro-icon-white.svg" className="w-8 relative" alt="Logo" />
                <h1 className="font-bold text-2xl mt-20 relative">Vinculación a la Red de Colaboración Institucional</h1>
            </div>
            <div className="mb-6 relative px-5">
                <div className="mt-10">
                    <b>Proposito: </b>
                    <span className="opacity-60">Recopilar información clave de los profesores de la Universidad Simón Bolívar para su vinculación
                        a la Red de Colaboración Institucional, facilitando la identificación de capacidades, experiencias, intereses y habilidades
                        que promuevan la participación en proyectos de formación, investigación, innovación y extensión.</span>
                </div>
                <Subtitle>Autorización para Uso de Información</Subtitle>
                <div className="mt-6">
                    <b className="">Objetivo: </b>
                    <span className="opacity-60">Obtener la autorización del profesor para el tratamiento de sus datos personales conforme
                        a la normatividad vigente.</span>
                </div>
                <div className="mt-6">
                    <b className="">Protección de Datos: </b>
                    <span className="opacity-60">En cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios en calidad
                        de titular de la información registrada en el presente formulario, de manera libre, expresa e informada, autorizo a <b>LA UNIVERSIDAD SIMÓN BOLÍVAR</b> y/o
                        a la persona natural o jurídica a quien este encargue, a recolectar, almacenar, utilizar, circular, suprimir y en general, a usar mis datos personales
                        para el cumplimiento de las siguientes finalidades: (i) Gestión de PQR, (ii) publicidad y prospección comercial, (iii) Procedimientos del CEC. (v) Demás
                        finalidades señaladas en la Política de Protección de datos y/o aviso de privacidad publicada por la Universidad Simón Bolívar. Declaro que he conocido
                        la Política de tratamiento de datos personales publicada en </span>
                    <a href="https://bit.ly/POLITICA_TRATAMIENTO_DE_INFORMACION" className="break-words text-primary underline" target="_blank" rel="noopener noreferrer">https://bit.ly/POLITICA_TRATAMIENTO_DE_INFORMACION</a>
                </div>
                <form className="gap-4 grid grid-cols-1" onSubmit={handleSubmit(onSubmit)}>
                    <Question>
                        <QuestionLabel>1. ¿Autorizas a la Universidad Simón Bolívar para el tratamiento de tus datos personales conforme a la normatividad vigente?</QuestionLabel>
                        <RadioGroup>
                            <Radio {...register("autorizacion", { required: true })} name="autorizacion" isChecked={autorizacionValue === "1"} value={1}>Si, autorizo</Radio>
                            <Radio {...register("autorizacion", { required: true })} name="autorizacion" isChecked={autorizacionValue === "0"} value={0}>No, no autorizo</Radio>
                        </RadioGroup>
                    </Question>
                    <Button className="mt-4" primary disabled={!isValid}>Continuar</Button>
                </form>
            </div>
        </>
    )
}

export default SignupPage1