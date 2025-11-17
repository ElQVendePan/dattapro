import React, { useEffect } from "react"
import type { PageProps } from "../../pages/Signup_old";
import RadioGroup from "../RadioGroup";

const authOptions = [
    { value: 'si', label: 'Sí, autorizo' },
    { value: 'no', label: 'No autorizo' }
];

const SignupPage1: React.FC<PageProps> = ({ 
    onValidationChange, 
    formData, 
    handleChange 
}) => {
    const { autorizacion } = formData;
    useEffect(() => {
        const isValid = autorizacion !== null;
        onValidationChange(isValid);
    }, [autorizacion, onValidationChange]);


    return (
        <>
            <div className="relative mt-6">
                <p className="mt-4"><b>Propósito:</b> <span className="opacity-70">Recopilar información clave de los profesores de la Universidad Simón Bolívar para su vinculación a la Red de Colaboración Institucional, facilitando la identificación de capacidades, experiencias, intereses y habilidades que promuevan la participación en proyectos de formación, investigación, innovación y extensión.</span></p>
            </div>
            <div className="border-t-2 border-bg-third mt-8 pt-8">
                <div>
                    <b className="opacity-70 text-sm">SECCIÓN 1. </b>
                    <h2 className="text-xl font-bold">AUTORIZACIÓN PARA USO DE INFORMACIÓN</h2>
                </div>
                <p className="mt-8"><b>Objetivo:</b> <span className="opacity-70">Obtener la autorización del profesor para el tratamiento de sus datos personales conforme a la normatividad vigente.</span></p>
                <p className="mt-4"><b>Protección de datos:</b> <span className="opacity-70">En cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios en calidad de titular de la información registrada en el presente formulario, de manera libre, expresa e informada, autorizo a <b>LA UNIVERSIDAD SIMÓN BOLÍVAR</b> y/o  a la persona natural o jurídica a quien este encargue, a recolectar, almacenar, utilizar, circular, suprimir y  en general, a usar mis datos personales para el cumplimiento de las siguientes finalidades: (i) Gestión de PQR, (ii) publicidad y prospección comercial, (iii) Procedimientos del CEC. (v) Demás finalidades señaladas en la Política de Protección de datos y/o aviso de privacidad publicada por la Universidad Simón Bolívar. Declaro que he conocido la Política de tratamiento de datos personales publicada en <a href="https://bit.ly/POLITICA_TRATAMIENTO_DE_INFORMACION" target="_blank" rel="noopener" className="text-primary underline">Política de Tratamiento de Información</a></span></p>

                <div className="mt-8 space-y-4">
                    <h3 className="font-bold text-base opacity-90">
                        1. ¿Autoriza el tratamiento de datos personales?
                    </h3>
                    <RadioGroup
                        // 4. Importante: 'name' debe coincidir con la clave en el objeto FormData
                        name="autorizacion" 
                        options={authOptions}
                        selectedValue={autorizacion} // Usa el valor extraído
                        onChange={handleChange} // Pasa el handler genérico
                    />
                </div>
            </div>
        </>
    )
}

export default SignupPage1;