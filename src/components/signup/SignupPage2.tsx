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

const SignupPage2 = ({ register, errors, watch, tiposDocumento, facultades, programas, centroInvestigativo }: any) => {

    const tipoDocumentoValue = watch("tipo_documento");
    const facultadValue = watch("facultad");
    const programaValue = watch("programa_academico");
    const tipoVinculacionValue = watch("tipo_vinculacion");
    const sedeValue = watch("sede");
    const centroInvestigacionBooleanValue = watch("centro_investigacion_boolean");
    const centroInvestigacionValue = watch("centro_investigacion");

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
                {programas.length === 0 ? (
                    <p className="text-sm opacity-70 mb-4">
                        Selecciona una facultad para ver los programas académicos disponibles.
                    </p>
                ) : <RadioList
                    name="programa_academico"
                    register={register}
                    items={programas}
                    value={programaValue}
                />}
            </Question>

            <Question>
                <QuestionLabel>8. Tipo de Vinculación</QuestionLabel>
                <RadioGroup>
                    <Radio {...register("tipo_vinculacion", { required: true })} value="1" isChecked={tipoVinculacionValue === "1"}>
                        Profesor de Planta
                    </Radio>
                    <Radio {...register("tipo_vinculacion", { required: true })} value="2" isChecked={tipoVinculacionValue === "2"}>
                        Profesor de Periodo Académico
                    </Radio>
                </RadioGroup>
            </Question>

            <Question>
                <QuestionLabel>9. Sede</QuestionLabel>
                <RadioGroup>
                    <Radio {...register("sede", { required: true })} value="1" isChecked={sedeValue === "1"}>
                        Cúcuta
                    </Radio>
                    <Radio {...register("sede", { required: true })} value="2" isChecked={sedeValue === "2"}>
                        Barranquilla
                    </Radio>
                </RadioGroup>
            </Question>

            <Question>
                <QuestionLabel>10. Perfil Profesional</QuestionLabel>
                <TextArea {...register("perfil_profesional", { required: true })} placeholder="Descripción breve del perfil profesional" />
            </Question>

            <Question>
                <QuestionLabel>11. ¿Pertenece a un centro de investigación?</QuestionLabel>
                <RadioGroup>
                    <Radio {...register("centro_investigacion_boolean", { required: true })} value="1" isChecked={centroInvestigacionBooleanValue === "1"}>
                        Sí
                    </Radio>
                    <Radio {...register("centro_investigacion_boolean", { required: true })} value="0" isChecked={centroInvestigacionBooleanValue === "0"}>
                        No
                    </Radio>
                </RadioGroup>
            </Question>

            {centroInvestigacionBooleanValue === "1" && (
                <Question>
                    <QuestionLabel>12. Centro de Investigación</QuestionLabel>

                    {centroInvestigativo.length === 0 ? (
                        <p className="text-sm opacity-70">
                            No hay centros de investigación disponibles.
                        </p>
                    ) : (
                        <RadioGroup>
                            {centroInvestigativo.map((item: any) => (
                                <Radio key={item.id} {...register("centro_investigacion", { required: true })} value={item.id} isChecked={String(centroInvestigacionValue) === String(item.id)}>
                                    {item.nombre}
                                </Radio>
                            ))}
                        </RadioGroup>
                    )}
                </Question>
            )}
        </>
    );
};

export default SignupPage2;