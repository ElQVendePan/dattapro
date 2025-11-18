import { Checkbox, CheckboxGroup } from "../forms/Checkbox";
import Question, { QuestionLabel } from "../forms/Question";
import { Radio, RadioGroup } from "../forms/Radio";

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
            <Checkbox key={item.id} {...register(name, { required: true })} value={item.id} isChecked={selectedValues?.includes(String(item.id))}>
                {item.nombre}
            </Checkbox>
        ))}
    </CheckboxGroup>
);

const SignupPage5 = ({ register, errors, watchValues, tiposServicio, areasEspecialidad }: any) => {
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
                <Question>
                    <QuestionLabel>1. Tipo de Servicio que Puede Ofrecer</QuestionLabel>
                    <CheckboxList
                        name="tipos_servicio"
                        register={register}
                        items={tiposServicio}
                        selectedValues={watchValues.tiposServicioValue || []}
                    />
                </Question>
                <Question>
                    <QuestionLabel>2. Areas de Especialidad</QuestionLabel>
                    <CheckboxList
                        name="areas_especialidad"
                        register={register}
                        items={areasEspecialidad}
                        selectedValues={watchValues.areasEspecialidadValue || []}
                    />
                </Question>
            </div>
        </>
    )
}

export default SignupPage5
