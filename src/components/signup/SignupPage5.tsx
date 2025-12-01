import Question, { QuestionLabel } from "../forms/Question";
import { Radio, RadioGroup } from "../forms/Radio";

interface RadioListProps {
    name: string;
    register: any;
    selectedValue: any;
}

const RadioList = ({ name, register, selectedValue }: RadioListProps) => {
    const opciones = [
        { id: "1", nombre: "1" },
        { id: "2", nombre: "2" },
        { id: "3", nombre: "3" },
        { id: "4", nombre: "4" }
    ];

    return (
        <RadioGroup>
            {opciones.map((item) => (
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

interface Competencia {
    id: string;
    nombre: string;
}

interface SignupPage5Props {
    register: any;
    watch: any;
    errors: any;
    competenciasTransversales: Competencia[];
    competenciasTecnicas: Competencia[];
}

const SignupPage5 = ({
    register,
    watch,
    competenciasTransversales,
    competenciasTecnicas
}: SignupPage5Props) => {
    return (
        <>
            <img src="/dattapro-logo-white.svg" className="h-10" alt="logo" />

            {/* ------------------------- */}
            {/* TRANSVERSALES */}
            {/* ------------------------- */}
            <p className="mt-20 opacity-60 text-lg">Sección 4</p>
            <h2 className="font-bold text-4xl">Competencias Transversales</h2>

            <div className="text-sm mt-4 mb-8">
                <b>Objetivo: </b>
                <span className="opacity-70">
                    Identificar habilidades transversales útiles en proyectos interdisciplinarios dentro de la Red.
                </span>
            </div>

            {competenciasTransversales.map((item, index) => {
                const fieldName = `competencias.transversales.${item.id}`;
                const selectedValue = watch(fieldName);

                return (
                    <Question key={`trans-${item.id}`}>
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

            {/* ------------------------- */}
            {/* TÉCNICAS */}
            {/* ------------------------- */}
            <h2 className="font-bold text-4xl mt-10">Competencias Técnicas</h2>

            <div className="text-sm mt-4 mb-8">
                <b>Objetivo: </b>
                <span className="opacity-70">
                    Evaluar el dominio técnico del profesor en áreas clave que aporten a proyectos tecnológicos o académicos dentro de la Red.
                </span>
            </div>

            {competenciasTecnicas.map((item, index) => {
                const fieldName = `competencias.tecnicas.${item.id}`;
                const selectedValue = watch(fieldName);

                return (
                    <Question key={`tec-${item.id}`}>
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