export interface Usuario {
    id: number;
    nombres: string;
    apellidos: string;
    foto: string | null;
    tipo_documento: string;
    numero_identificacion: string;
    correo_institucional: string;
    biostatement: string | null;
    proyectos_text: string | null;
    años_prof: number | null;
    colaborativos: boolean | null;
    liderar: boolean | null;
    tipo_vinculacion: string;
    sede: string;
    centro_investigativo_id: string | null;
    centro_investigativo: string | null;
    centro_investigativo_subtitulo: string | null;
    programa_academico: string;
    facultad: string;
    areas_conocimiento: string | null;

    // Formación académica
    formacion: {
        id: number;
        nivel_formacion: string;
        titulo: string;
    }[];

    // Certificaciones
    certificaciones: {
        id: number;
        certificacion: string;
        fecha_registro?: string;
    }[];

    // Proyectos
    proyectos_experiencia: {
        id: number;
        proyecto_id: number;
        proyecto: string;
        fecha_registro: string;
    }[];

    // Competencias del usuario (solo lo que corresponde al usuario)
    competencias: {
        tecnicas: {
            id: number;
            usuario_id: number;
            competencia_id: number;
            competencia: string; // viene del JOIN
            nivel: 1 | 2 | 3 | 4;
        }[];
        transversales: {
            id: number;
            usuario_id: number;
            competencia_id: number;
            competencia: string; // viene del JOIN
            nivel: 1 | 2 | 3 | 4;
        }[];
    };

    // Experiencia en Servicios
    servicios: {
        id: number;
        servicio_id: number;
        servicio: string;
        fecha_registro: string;
    }[];

    // Áreas de especialidad
    areas_especialidad: {
        id: number;
        usuario_id: number;
        area_id: number;
        area: string;
        fecha_registro: string;
    }[];

    // Sectores de experiencia
    sectores_experiencia: {
        id: number;
        sector_id: number;
        sector: string;
        fecha_registro: string;
    }[];

    // Intereses en la red
    intereses_red: {
        id: number;
        interes_id: number;
        interes: string;
        fecha_registro: string;
    }[];
}