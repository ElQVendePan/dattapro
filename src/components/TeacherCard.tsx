import axios from "axios";
import React, { useEffect, useState } from "react";

type Teacher = {
  id: number;
  nombres: string;
  apellidos: string;
  foto: string;
  tipo_documento: string;
  numero_identificacion: string;
  correo_institucional: string;
  tipo_vinculacion: string;
  sede: string;
  centro_investigativo: string | null;
  programa_academico: string;
  facultad: string;
};

interface TeacherCardProps {
  id: number;
}

const API_URL = import.meta.env.VITE_API_BASE_URL

const TeacherCard: React.FC<TeacherCardProps> = ({ id }) => {
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    const fetchTeacher = async () => {
      try {
        const res = await axios.get(`${API_URL}/usuarios/get-all-info-usuarios.php`, {
          params: { id },
          signal: controller.signal,
        });

        if (res.data.status === "success") {
          setTeacher(res.data.data);
        } else {
          console.error("Error en respuesta:", res.data.message);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Error al obtener datos del usuario:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTeacher();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 bg-[var(--color-bg-secondary)] border border-[var(--color-bg-third)] rounded-2xl shadow-sm animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-xl"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="w-16 h-4 bg-gray-200 rounded"></div>
          <div className="w-20 h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!teacher) {
    return (
      <div className="p-6 text-center border border-gray-200 rounded-2xl bg-gray-50 text-gray-500">
        Docente no encontrado
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-bg-secondary duration-300">
    </div>
  );
};

export default TeacherCard;
