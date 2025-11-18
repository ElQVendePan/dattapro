import Question, { QuestionLabel } from "../forms/Question";
import { Radio, RadioGroup } from "../forms/Radio";

const RadioList = ({ name, register, selectedValue }: any) => {
    const opciones = [
        { id: 1, nombre: "1" },
        { id: 2, nombre: "2" },
        { id: 3, nombre: "3" },
        { id: 4, nombre: "4" }
    ];

    return (
        <RadioGroup>
            {opciones.map((item: any) => (
                <Radio
                    key={item.id}
                    {...register(name, { required: true })}
                    value={item.id}
                    isChecked={String(selectedValue) === String(item.id)}
                >
                    {item.nombre}
                </Radio>
            ))}
        </RadioGroup>
    );
};

const SignupPage5 = ({ register, competenciasTransversales, competenciasTecnicas, watch }: any) => {
    return (
        <>
            <img src="/dattapro-logo-white.svg" className="h-10" alt="logo" />

            {/* ------------------------- */}
            {/* BLOQUE 1 - TRANSVERSALES */}
            {/* ------------------------- */}
            <p className="mt-20 opacity-60 text-lg">Sección 4</p>
            <h2 className="font-bold text-4xl">Competencias Transversales</h2>

            <div className="text-sm mt-4 mb-8">
                <b>Objetivo: </b>
                <span className="opacity-70">
                    Identificar las competencias transversales que facilitan la participación en proyectos interdisciplinarios dentro de la Red.
                </span>
            </div>

            {competenciasTransversales.map((item: any, index: number) => {
                const fieldName = `competencia_transversal_${item.id}`;
                const selectedValue = watch(fieldName);

                return (
                    <Question key={item.id}>
                        <QuestionLabel>
                            {index + 1}. {item.nombre}
                        </QuestionLabel>

                        <RadioList
                            name={fieldName}
                            register={register}
                            selectedValue={selectedValue}
                        />
                    </Question>
                );
            })}

            {/* --------------------- */}
            {/* BLOQUE 2 - TÉCNICAS */}
            {/* --------------------- */}
            <h2 className="font-bold text-4xl mt-10">Competencias Técnicas</h2>

            <div className="text-sm mt-4 mb-8">
                <b>Objetivo: </b>
                <span className="opacity-70">
                    Evaluar el dominio técnico del profesor en áreas específicas que aporten a proyectos tecnológicos o académicos dentro de la Red.
                </span>
            </div>

            {competenciasTecnicas.map((item: any, index: number) => {
                const fieldName = `competencia_tecnica_${item.id}`;
                const selectedValue = watch(fieldName);

                return (
                    <Question key={item.id}>
                        <QuestionLabel>
                            {index + 1}. {item.nombre}
                        </QuestionLabel>

                        <RadioList
                            name={fieldName}
                            register={register}
                            selectedValue={selectedValue}
                        />
                    </Question>
                );
            })}
        </>
    );
};

export default SignupPage5;