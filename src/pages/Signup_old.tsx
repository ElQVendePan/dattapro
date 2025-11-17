import Button from "../components/Button"
import { useNavigate, useSearchParams } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"
import React, { useState, useEffect } from "react"
import SignupPage2 from "../components/signup/SignupPage2";
import SignupPage1 from "../components/signup/SignupPage1_old";
import { IoChevronBack } from "react-icons/io5";

export interface FormData {
    autorizacion: 'si' | 'no' | null;
    nombre: string;
    apellido: string;
    tipo_identidad: string;
    email: string;
}

export interface PageProps {
    onValidationChange: (isValid: boolean) => void;
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Signup: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const page = searchParams.get('page');

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [isCurrentPageValid, setIsCurrentPageValid] = useState(false);
    const isContinuarDisabled = !isCurrentPageValid;

    const [formData, setFormData] = useState<FormData>({
        autorizacion: null,
        nombre: '',
        apellido: '',
        tipo_identidad: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData, // Copia todos los datos antiguos
            [name]: value // Sobrescribe solo el campo que cambió
        }));
    };

    // Reseteo de validación (sigue igual)
    useEffect(() => {
        setIsCurrentPageValid(false);
    }, [page]);

    // --- Handlers de Navegación ---
    const handleBack = () => {
        if (page === '2') navigate('/signup');
        else navigate(-1);
    };

    const handleContinue = () => {
        if (page === null) {
            navigate('/signup?page=2');
        }
        if (page === '2') {
            // 5. Al finalizar, simplemente enviamos el objeto 'formData'
            console.log('Formulario completado:', formData);
        }
    };

    return (
        <>
            <div className={`fixed top-0 left-0 w-full px-5 py-5 z-10 transition-all duration-300 ${scrolled ? "bg-bg-primary/80 backdrop-blur-lg" : "bg-transparent"}`}>
                <div className="w-10 h-10 flex items-center cursor-pointer shrink-0" onClick={() => window.history.back()}>
                    <IoChevronBack className="w-6 h-6" />
                </div>
                <div className="absolute text-center w-full h-full top-0 left-0 flex items-center justify-center">
                    <h1 className={`${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} text-sm font-bold duration-150`}>Vinculación a Dattapro</h1>
                </div>
            </div>
            <div className="w-screen p-5 relative h-auto -ml-5 -mt-5">
                <img src="default-bg.jpg" className="w-full h-full absolute top-0 left-0 object-cover" alt="Default Background" />
                <img src="/dattapro-icon-white.svg" className='w-9 relative' alt='' />
                <h2 className="text-xl font-bold relative mt-24">Formulario para la Vinculación a la Red de Colaboración Institucional</h2>
            </div>
            {
                page === '2'
                    ? <SignupPage2
                        // 6. Pasamos el objeto, el handler y la validación
                        onValidationChange={setIsCurrentPageValid}
                        formData={formData}
                        handleChange={handleChange}
                    />
                    : <SignupPage1
                        // 6. Pasamos las *mismas* props
                        onValidationChange={setIsCurrentPageValid}
                        formData={formData}
                        handleChange={handleChange}
                    />
            }
            <div className="flex items-center gap-2 mt-4">
                {page === '1' && <Button className="w-14 h-14 shrink-0 bg-bg-secondary" onClick={handleBack}>
                    <IoIosArrowBack className="w-full h-full mx-auto" />
                </Button>}
                <Button
                    primary
                    className={"w-full disabled:opacity-30"}
                    disabled={isContinuarDisabled}
                    onClick={handleContinue}
                >
                    {page === '2' ? 'Finalizar' : 'Continuar'}
                </Button>
            </div>
        </>
    )
}

export default Signup;