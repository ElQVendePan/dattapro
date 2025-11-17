import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../Header";
import Input from "../Input";

const SignupPage1 = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div>
            <Header title="Vinculación a Dattapro" />
            <form className="mt-20 gap-4 grid grid-cols-1" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <Input {...register("nombres")} label='Nombres' placeholder='Escribe tu nombre' />
                <Input {...register("apellidos")} label='Apellidos' placeholder='Escribe tus apellidos' />
                <p>{data}</p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default SignupPage1