import Question, { QuestionLabel } from "../forms/Question";
import Input from "../forms/Input";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Radio, RadioGroup } from "../forms/Radio";
import TextArea from "../forms/TextArea";

const RadioList = ({ name, register, items, value }: any) => (
    <RadioGroup>
        {items.map((item: any) => (
            <Radio
                key={item.id}
                {...register(name, { required: true })}
                value={item.id}
                isChecked={String(value) === String(item.id)}
            >
                {item.nombre}
            </Radio>
        ))}
    </RadioGroup>
);

const SignupPage2 = ({ register, errors, watchValues, tiposDocumento, facultades, programas }: any) => {

    const {
        tipoDocumentoValue,
        facultadValue,
        programaValue,
        tipoVinculacionValue,
        sedeValue,
    } = watchValues;

    return (
        <>
            <img src="/dattapro-logo-white.svg" className="h-10" alt="logo" />
            <p className="mt-20 opacity-60 text-lg">Sección 1</p>
            <h2 className="font-bold text-4xl">Datos Básicos</h2>
            <div className="text-sm mt-4">
                <b>Objetivo: </b>
                <span className="opacity-70">
                    Obtener información general del profesor para su vinculación en la red y su ubicación en la estructura académica institucional.
                </span>
            </div>

            <Question>
                <QuestionLabel>1. Nombres completos</QuestionLabel>
                <Input icon={<MdDriveFileRenameOutline />} {...register("nombres", { required: true })} placeholder="Primer y Segundo Nombre" />
            </Question>

            <Question>
                <QuestionLabel>2. Apellidos completos</QuestionLabel>
                <Input icon={<MdDriveFileRenameOutline />} {...register("apellidos", { required: true })} placeholder="Primer y Segundo Apellido" />
            </Question>

            <Question>
                <QuestionLabel>3. Tipo de Documento</QuestionLabel>
                <RadioList
                    name="tipo_documento"
                    register={register}
                    items={tiposDocumento}
                    value={tipoDocumentoValue}
                />
            </Question>

            <Question>
                <QuestionLabel>4. Número de Documento</QuestionLabel>
                <Input icon={<FaAddressCard />} type="number" {...register("numero_identificacion", { required: true })} placeholder="Número de Documento" />
            </Question>

            <Question>
                <QuestionLabel>5. Correo Institucional</QuestionLabel>
                <Input
                    icon={<IoIosMail />}
                    type="email"
                    {...register("correo_institucional", {
                        required: true,
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@unisimon\.edu\.co$/,
                            message: "El correo debe terminar con @unisimon.edu.co"
                        }
                    })}
                    placeholder="Correo Institucional"
                />
                {errors.correo_institucional && (
                    <p className="text-primary text-sm mt-2">
                        {errors.correo_institucional.message as string}
                    </p>
                )}
            </Question>

            <Question>
                <QuestionLabel>6. Facultad</QuestionLabel>
                <RadioList
                    name="facultad"
                    register={register}
                    items={facultades}
                    value={facultadValue}
                />
            </Question>

            <Question>
                <QuestionLabel>7. Programa Académico</QuestionLabel>
                <RadioList
                    name="programa_academico"
                    register={register}
                    items={programas}
                    value={programaValue}
                />
            </Question>

            <Question>
                <QuestionLabel>8. Tipo de Vinculación</QuestionLabel>
                <RadioGroup>
                    <Radio {...register("tipo_vinculacion", { required: true })} value="0" isChecked={tipoVinculacionValue === "0"}>
                        Profesor de Planta
                    </Radio>
                    <Radio {...register("tipo_vinculacion", { required: true })} value="1" isChecked={tipoVinculacionValue === "1"}>
                        Profesor de Periodo Académico
                    </Radio>
                </RadioGroup>
            </Question>

            <Question>
                <QuestionLabel>9. Sede</QuestionLabel>
                <RadioGroup>
                    <Radio {...register("sede", { required: true })} value="0" isChecked={sedeValue === "0"}>
                        Cúcuta
                    </Radio>
                    <Radio {...register("sede", { required: true })} value="1" isChecked={sedeValue === "1"}>
                        Barranquilla
                    </Radio>
                </RadioGroup>
            </Question>

            <Question>
                <QuestionLabel>10. Perfil Profesional</QuestionLabel>
                <TextArea {...register("perfil_profesional", { required: true })} placeholder="Descripción breve del perfil profesional" />
            </Question>
        </>
    );
};

export default SignupPage2;