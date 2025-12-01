// src/pages/SignupComplete.tsx

import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button";

const SignupComplete = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary">
            <div className="flex flex-col items-center text-center p-6 rounded-3xl shadow-lg max-w-md w-full">
                <FaCheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h1 className="text-2xl font-bold mb-2">
                    ¡Registro completado!
                </h1>
                <p className="opacity-70 text-sm mb-6">
                    Hemos recibido tu información correctamente.
                    Pronto podrás hacer parte del mapa de talento de la Red.
                </p>
                <Link
                    to="/"
                    className="grid grid-cols-1"
                >
                    <Button primary>Volver a Inicio</Button>
                </Link>
            </div>
        </div>
    );
};

export default SignupComplete;