import React, { useEffect } from "react";
import type { PageProps } from "../../pages/Signup_old";
import Input from "../../components/Input";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import RadioGroup from "../RadioGroup";

const tipoIdentidadOptions = [
    { value: 'cc', label: 'Cédula de Ciudadanía' },
    { value: 'ce', label: 'Cédula de Extranjería' },
    { value: 'ti', label: 'Tarjeta de Identidad' }
];

const SignupPage2: React.FC<PageProps> = ({
    onValidationChange,
    formData,
    handleChange,
}) => {
    const { nombre, apellido, tipo_identidad, email } = formData;

    useEffect(() => {
        const isNombreValid = nombre.trim().length >= 3;
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        onValidationChange(isNombreValid && isEmailValid);
    }, [nombre, email, onValidationChange]);

    return (
        <div className="relative mt-6 space-y-6">
            <b className="opacity-70 text-sm">SECCIÓN 2. </b>
            <h2 className="text-xl font-bold">DATOS BÁSICOS</h2>
            <p className="mt-4">
                <b>Objetivo:</b>{" "}
                <span className="opacity-70">
                    Obtener información general del profesor para su vinculación en la
                    red y su ubicación en la estructura académica institucional.
                </span>
            </p>
            <Input
                label="Nombres"
                placeholder="Escribe tus nombres..."
                name="nombre"
                value={nombre}
                onChange={handleChange}
                icon={<FaUser className="w-full h-full" />}
            />
            <Input
                label="Apellidos"
                placeholder="Escribe tus apellidos..."
                name="apellido"
                value={apellido}
                onChange={handleChange}
                icon={<FaUser className="w-full h-full" />}
            />
            <hr className="border-none h-0.5 rounded-full w-full bg-bg-third" />
            <p className="font-medium opacity-70">Tipo de documento de identidad</p>
            <RadioGroup
                name="tipo_identidad"
                options={tipoIdentidadOptions}
                selectedValue={tipo_identidad}
                onChange={handleChange}
            />
            <Input
                type="email"
                label="Correo Electrónico"
                placeholder="Escribe tu correo..."
                name="email"
                value={email}
                onChange={handleChange}
                icon={<IoIosMail className="w-full h-full" />}
            />
        </div>
    );
};

export default SignupPage2;