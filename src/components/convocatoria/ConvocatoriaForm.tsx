import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Input from "../forms/Input";
import TextArea from "../forms/TextArea";
import Button from "../Button";
import Question, { QuestionLabel } from "../forms/Question";
import { Radio, RadioGroup } from "../forms/Radio";

interface Categoria {
    id: number;
    nombre: string;
}

interface Entidad {
    id: number;
    nombre: string;
    logo: string;
}

interface FormConvocatoria {
    titulo: string;
    categoria_id: string;
    descripcion: string;
    criterios_participacion: string;
    financiacion: string;
    fecha_inicio: string;
    fecha_limite: string;
    enlace: string;
    entidad_id: string;
    imagen_fondo: FileList;
}

const API_URL = import.meta.env.VITE_API_BASE_URL;

const ConvocatoriaForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
        trigger,
    } = useForm<FormConvocatoria>();

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [entidades, setEntidades] = useState<Entidad[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const categoriaValue = watch("categoria_id");
    const entidadValue = watch("entidad_id");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [catRes, entRes] = await Promise.all([
                    axios.get(`${API_URL}/convocatorias/get-categorias.php`),
                    axios.get(`${API_URL}/convocatorias/get-entidades.php`),
                ]);

                setCategorias(catRes.data?.data || []);
                setEntidades(entRes.data?.data || []);
            } catch (error) {
                console.error("Error cargando datos del formulario:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const onSubmit = async (data: FormConvocatoria) => {
        setSaving(true);

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (key === "imagen_fondo") {
                if (value && value[0]) {
                    formData.append("imagen_fondo", value[0]);
                }
            } else {
                formData.append(key, value as string);
            }
        });

        try {
            await axios.post(`${API_URL}/convocatorias/create-convocatoria.php`, formData);
            reset();
            alert("Convocatoria creada correctamente 🎉");
        } catch (error) {
            console.error("Error al crear convocatoria:", error);
            alert("Hubo un error guardando la convocatoria.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <p className="p-6 text-center">Cargando datos del formulario...</p>;
    }

    return (
        <>
            <div className="text-center pt-40 pb-10">
                <h2 className="font-bold text-3xl">Nueva Convocatoria</h2>
                <p className="opacity-70 mb-6 w-2/3 mx-auto mt-4">
                    Completa la información básica para registrar una nueva convocatoria.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="p-5 pb-28 max-w-4xl mx-auto">
                {/* DATOS GENERALES */}
                <Question>
                    <QuestionLabel>1. Datos generales de la convocatoria</QuestionLabel>
                    <div className="space-y-6">
                        <Input
                            label="Título"
                            placeholder="Ej: Convocatoria Nacional 2025"
                            {...register("titulo", { required: "El título es obligatorio" })}
                        />
                        {errors.titulo && (
                            <p className="text-red-500 text-sm ml-4">{errors.titulo.message}</p>
                        )}
                        <Input
                            type="url"
                            label="Enlace o sitio web"
                            placeholder="https://..."
                            {...register("enlace", { required: "El enlace es obligatorio" })}
                        />
                        {errors.enlace && (
                            <p className="text-red-500 text-sm ml-4">{errors.enlace.message}</p>
                        )}
                    </div>
                </Question>

                {/* CATEGORÍA (RADIOS) */}
                <Question>
                    <QuestionLabel>2. Categoría de la convocatoria</QuestionLabel>

                    <p className="opacity-70 text-sm mb-3 ml-1">
                        Selecciona la categoría que mejor describa esta convocatoria.
                    </p>

                    {/* Registramos la validación en RHF */}
                    <input type="hidden" {...register("categoria_id", { required: "Debes seleccionar una categoría" })} />

                    <RadioGroup>
                        {categorias.map((cat) => {
                            const checked = categoriaValue === String(cat.id);

                            return (
                                <Radio
                                    key={cat.id}
                                    name="categoria_id"
                                    value={cat.id}
                                    isChecked={checked}
                                    onClick={() => {
                                        setValue("categoria_id", String(cat.id));
                                        trigger("categoria_id");
                                    }}
                                >
                                    {cat.nombre}
                                </Radio>
                            );
                        })}
                    </RadioGroup>

                    {errors.categoria_id && (
                        <p className="text-red-500 text-sm mt-2 ml-1">
                            {errors.categoria_id.message}
                        </p>
                    )}
                </Question>

                {/* ENTIDAD (LISTA VISUAL + BOTÓN NUEVA) */}
                <Question>
                    <QuestionLabel>3. Entidad responsable</QuestionLabel>

                    <p className="opacity-70 text-sm mb-8 ml-1">
                        Elige la entidad que organiza o respalda esta convocatoria.
                    </p>

                    {/* Registro de validación */}
                    <input type="hidden" {...register("entidad_id", { required: "Debes seleccionar una entidad" })} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {entidades.map((ent) => {
                            const checked = entidadValue === String(ent.id);

                            return (
                                <label
                                    key={ent.id}
                                    className={`cursor-pointer rounded-2xl border-1 p-4 flex items-center gap-3 duration-200 ${checked ? "border-primary bg-bg-third/40" : "border-bg-third bg-bg-secondary"
                                        }`}
                                    onClick={() => {
                                        setValue("entidad_id", String(ent.id));
                                        trigger("entidad_id");
                                    }}
                                >
                                    <span className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                                        <span
                                            className={`w-3 h-3 rounded-full bg-primary ${checked ? "scale-100 opacity-100" : "scale-0 opacity-0"
                                                } duration-200`}
                                        ></span>
                                    </span>

                                    <input type="radio" name="entidad_id" value={ent.id} className="hidden" readOnly />

                                    <div className="flex items-center gap-3">
                                        {ent.logo && (
                                            <img
                                                src={ent.logo}
                                                alt={ent.nombre}
                                                className="w-10 h-10 rounded-full object-cover flex-shrink-0 bg-white"
                                            />
                                        )}
                                        <p className="font-semibold">{ent.nombre}</p>
                                    </div>
                                </label>
                            );
                        })}
                    </div>

                    {errors.entidad_id && (
                        <p className="text-red-500 text-sm mt-2 ml-1">
                            {errors.entidad_id.message}
                        </p>
                    )}

                    <div className="w-full text-right mt-4">
                        <Button
                            type="button"
                            className="text-sm px-4 py-2 inline-block"
                            onClick={() => console.log("Agregar nueva entidad")}
                        >
                            + Agregar entidad
                        </Button>
                    </div>
                </Question>

                {/* DESCRIPCIÓN / CRITERIOS / FINANCIACIÓN */}
                <Question>
                    <QuestionLabel>4. Contenido de la convocatoria</QuestionLabel>

                    <div className="space-y-6">
                        <TextArea
                            label="Descripción"
                            placeholder="Descripción general de la convocatoria"
                            {...register("descripcion", { required: true })}
                        />

                        <TextArea
                            label="Criterios de participación"
                            placeholder="Reglas, requisitos y condiciones de participación"
                            {...register("criterios_participacion")}
                        />

                        <TextArea
                            label="Financiación"
                            placeholder="Información sobre financiación, montos, becas o apoyos económicos"
                            {...register("financiacion")}
                        />
                    </div>
                </Question>

                {/* FECHAS */}
                <Question>
                    <QuestionLabel>5. Fechas de la convocatoria</QuestionLabel>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Input
                            type="date"
                            label="Fecha de inicio"
                            placeholder=""
                            {...register("fecha_inicio", { required: true })}
                        />

                        <Input
                            type="date"
                            label="Fecha límite"
                            placeholder=""
                            {...register("fecha_limite", { required: true })}
                        />
                    </div>
                </Question>
                {/* IMAGEN DE FONDO */}
                <Question>
                    <QuestionLabel>6. Imagen de portada</QuestionLabel>

                    <div className="space-y-3">
                        <p className="opacity-70 text-sm ml-1 mb-8">
                            Esta imagen se usará como fondo en la tarjeta y en el detalle de la convocatoria.
                        </p>
                        <div>
                            <label className="block font-medium ml-4 mb-2">Imagen de fondo</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="bg-bg-secondary border-1 border-bg-third p-4 rounded-2xl w-full text-sm"
                                {...register("imagen_fondo")}
                            />
                        </div>
                    </div>
                </Question>
                {/* BOTÓN GUARDAR */}
                <Button primary className="w-full mt-6" type="submit">
                    {saving ? "Guardando..." : "Guardar convocatoria"}
                </Button>
            </form>
        </>
    );
};

export default ConvocatoriaForm;
