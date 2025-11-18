import Question, { QuestionLabel } from "../forms/Question";
import { Checkbox, CheckboxGroup } from "../forms/Checkbox";
import { useFieldArray } from "react-hook-form";
import Input from "../forms/Input";
import { FaGraduationCap, FaPlus, FaTrash } from "react-icons/fa";
import LanguageSlider from "../forms/LanguageSlider";

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

const SignupPage3 = ({ register, control, watchValues, areasConocimiento, certificaciones }: any) => {

    const { areaConocimientoValue, certificacionValue } = watchValues;

    // 🔥 PREGRADOS
    const {
        fields: pregradoFields,
        append: addPregrado,
        remove: removePregrado
    } = useFieldArray({
        control,
        name: "pregrados"
    });

    // 🔥 POSGRADOS
    const {
        fields: posgradoFields,
        append: addPosgrado,
        remove: removePosgrado
    } = useFieldArray({
        control,
        name: "posgrados"
    });

    return (
        <>
            <img src="/dattapro-logo-white.svg" className="h-10" alt="logo" />

            <p className="mt-20 opacity-60 text-lg">Sección 2</p>
            <h2 className="font-bold text-4xl">Información Académica</h2>

            <div className="text-sm mt-4">
                <b>Objetivo: </b>
                <span className="opacity-70">
                    Identificar la formación, títulos y líneas de investigación del profesor para reconocer su perfil profesional y áreas de especialización.
                </span>
            </div>
            <Question>
                <QuestionLabel>1. Pregrados</QuestionLabel>

                {pregradoFields.map((field: any, index: number) => (
                    <div key={field.id} className="flex gap-3 mb-3">
                        <Input
                            icon={<FaGraduationCap className="w-full h-full" />}
                            {...register(`pregrados.${index}.titulo`, { required: true })}
                            placeholder="Nombre del pregrado"
                        />
                        <button
                            type="button"
                            className="text-primary"
                            onClick={() => removePregrado(index)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={() => addPregrado({ titulo: "" })}
                    className="flex items-center gap-2 mt-3 text-primary"
                >
                    <FaPlus /> Agregar pregrado
                </button>
            </Question>
            <Question>
                <QuestionLabel>2. Posgrados</QuestionLabel>

                {posgradoFields.map((field: any, index: number) => (
                    <div key={field.id} className="flex gap-3 mb-3">
                        <Input
                            icon={<FaGraduationCap className="w-full h-full" />}
                            {...register(`posgrados.${index}.titulo`, { required: true })}
                            placeholder="Nombre del posgrado"
                        />
                        <button
                            type="button"
                            className="text-primary"
                            onClick={() => removePosgrado(index)}
                        >
                            <FaTrash />
                        </button>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={() => addPosgrado({ titulo: "" })}
                    className="flex items-center gap-2 mt-3 text-primary"
                >
                    <FaPlus /> Agregar posgrado
                </button>
            </Question>
            <Question>
                <QuestionLabel>3. Área de Conocimiento</QuestionLabel>
                <CheckboxList
                    name="area_conocimiento"
                    register={register}
                    items={areasConocimiento}
                    selectedValues={areaConocimientoValue || []}
                />
            </Question>
            <Question>
                <QuestionLabel>4. Idiomas</QuestionLabel>

                <LanguageSlider
                    name="idioma_espanol"
                    label="Español"
                    control={control}
                    niveles={["A1", "A2", "B1", "B2", "C1", "C2", "Nativo"]}
                />

                <LanguageSlider
                    name="idioma_ingles"
                    label="Inglés"
                    control={control}
                    niveles={["A1", "A2", "B1", "B2", "C1", "C2", "Nativo"]}
                />
            </Question>
            <Question>
                <QuestionLabel>5. Certificaciones</QuestionLabel>
                <CheckboxList
                    name="certificacion"
                    register={register}
                    items={certificaciones}
                    selectedValues={certificacionValue || []}
                />
            </Question>
        </>
    );
};

export default SignupPage3;