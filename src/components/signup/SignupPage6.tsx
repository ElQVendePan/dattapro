import { Checkbox, CheckboxGroup } from "../forms/Checkbox";
import Question, { QuestionLabel } from "../forms/Question";
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

const SignupPage6 = ({ register, watch, tiposServicio, areasEspecialidad, sectoresExperiencia, interesesRed }: any) => {

    const experienciaOpciones = [
        { id: 1, nombre: "Sin experiencia externa" },
        { id: 2, nombre: "<1 año" },
        { id: 3, nombre: "1–3 años" },
        { id: 4, nombre: "4–7 años" },
        { id: 5, nombre: ">7 años" }
    ];

    const yesNoOpciones = [
        { id: "1", nombre: "Sí" },
        { id: "0", nombre: "No" }
    ];

    const tiposServicioValue = watch("tipos_servicio") || [];
    const experienciaValue = watch("experiencia_servicios");
    const areasEspecialidadValue = watch("areas_especialidad") || [];
    const sectoresExperienciaValue = watch("sectores_experiencia") || [];
    const interesesRedValue = watch("intereses_red") || [];

    const participaColabValue = watch("participa_colaborativos");
    const lideraProyectosValue = watch("lidera_proyectos");

    return (
        <>
            <img src="/dattapro-logo-white.svg" className="h-10" alt="logo" />
            <p className="mt-20 opacity-60 text-lg">Sección 4</p>
            <h2 className="font-bold text-4xl">Interes de Participación</h2>

            <div className="text-sm mt-4">
                <b>Objetivo: </b>
                <span className="opacity-70">
                    Conocer los intereses del profesor respecto a los espacios o actividades en los que desea participar dentro de la Red de Colaboración Institucional.
                </span>

                {/* Pregunta 1 */}
                <Question>
                    <QuestionLabel>1. Tipo de Servicio que Puede Ofrecer</QuestionLabel>
                    <CheckboxList
                        name="tipos_servicio"
                        register={register}
                        items={tiposServicio}
                        selectedValues={tiposServicioValue}
                    />
                </Question>

                {/* Pregunta 2 */}
                <Question>
                    <QuestionLabel>2. Experiencia en prestación de servicios al mercado</QuestionLabel>

                    <RadioList
                        name="experiencia_servicios"
                        register={register}
                        items={experienciaOpciones}
                        value={experienciaValue}
                    />
                </Question>

                {/* Pregunta 3 */}
                <Question>
                    <QuestionLabel>3. Áreas de Especialidad</QuestionLabel>
                    <CheckboxList
                        name="areas_especialidad"
                        register={register}
                        items={areasEspecialidad}
                        selectedValues={areasEspecialidadValue}
                    />
                </Question>

                {/* Pregunta 4 */}
                <Question>
                    <QuestionLabel>4. Sectores en los que tiene experiencia</QuestionLabel>
                    <CheckboxList
                        name="sectores_experiencia"
                        register={register}
                        items={sectoresExperiencia}
                        selectedValues={sectoresExperienciaValue}
                    />
                </Question>

                {/* Pregunta 5 → #28 */}
                <Question>
                    <QuestionLabel>5. ¿Le gustaría participar en proyectos colaborativos?</QuestionLabel>

                    <RadioList
                        name="participa_colaborativos"
                        register={register}
                        items={yesNoOpciones}
                        value={participaColabValue}
                    />
                </Question>

                {/* Pregunta 6 → #29 */}
                <Question>
                    <QuestionLabel>6. ¿Le gustaría liderar proyectos?</QuestionLabel>

                    <RadioList
                        name="lidera_proyectos"
                        register={register}
                        items={yesNoOpciones}
                        value={lideraProyectosValue}
                    />
                </Question>

                {/* Pregunta 7 → #30 */}
                <Question>
                    <QuestionLabel>7. Intereses en la Red de Colaboración Institucional</QuestionLabel>
                    <CheckboxList
                        name="intereses_red"
                        register={register}
                        items={interesesRed}
                        selectedValues={interesesRedValue}
                    />
                </Question>

                <Question>
                    <QuestionLabel>8. ¿Qué espera lograr al vincularse a la Red de Colaboración Institucional?</QuestionLabel>
                    <TextArea {...register("objetivos_vinculacion", { required: true })} placeholder="¿Qué espera lograr al vincularse a la Red de Colaboración Institucional?" />
                </Question>
            </div>
        </>
    );
}

export default SignupPage6;