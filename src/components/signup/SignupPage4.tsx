import { FaClock } from "react-icons/fa";
import { Checkbox, CheckboxGroup } from "../forms/Checkbox";
import Input from "../forms/Input";
import Question, { QuestionLabel } from "../forms/Question";
import TextArea from "../forms/TextArea";

const CheckboxList = ({ name, register, items, selectedValues }: any) => (
    <CheckboxGroup>
        {items.map((item: any) => (
            <Checkbox
                key={item.id}
                {...register(name, { required: true })}
                value={item.id}
                isChecked={selectedValues?.includes(String(item.id))}
            >
                {item.nombre}
            </Checkbox>
        ))}
    </CheckboxGroup>
);

const SignupPage4 = ({ register, watch, tiposProyecto }: any) => {

    const tiposProyectoValue = watch("tipos_proyecto") || [];

    return (
        <>
            <img src="/dattapro-logo-white.svg" className="h-10" alt="logo" />
            <p className="mt-20 opacity-60 text-lg">Sección 3</p>
            <h2 className="font-bold text-4xl">Experiencia Profesional</h2>

            <div className="text-sm mt-4">
                <b>Objetivo: </b>
                <span className="opacity-70">
                    Registrar la trayectoria profesional y académica del profesor, destacando su experiencia en proyectos de investigación, innovación, emprendimiento o extensión.
                </span>

                {/* Pregunta 1 */}
                <Question>
                    <QuestionLabel>1. Años de Experiencia como Profesor</QuestionLabel>
                    <Input
                        type="number"
                        {...register("experiencia_profesor", { required: true })}
                        icon={<FaClock className="w-full h-full" />}
                        placeholder="Años de experiencia como profesor"
                    />
                </Question>

                {/* Pregunta 2 */}
                <Question>
                    <QuestionLabel>2. Experiencia en Proyectos</QuestionLabel>

                    <CheckboxList
                        name="tipos_proyecto"
                        register={register}
                        items={tiposProyecto}
                        selectedValues={tiposProyectoValue}
                    />
                </Question>

                {/* Pregunta 3 */}
                <Question>
                    <QuestionLabel>3. Descripción breve de los proyectos más relevantes</QuestionLabel>
                    <TextArea
                        {...register("proyectos_text", { required: true })}
                        placeholder="Descripción breve de los proyectos más relevantes"
                    />
                </Question>
            </div>
        </>
    );
};

export default SignupPage4;