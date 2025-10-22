import React from "react";

type Teacher = {
  id: number;
  nombre: string;
  apellido: string;
  foto: string;
  areas: string[];
  facultad: string;
  departamento: string;
};

// 🔹 Datos genéricos de ejemplo (mock data)
const teachers: Teacher[] = [
  {
    id: 1,
    nombre: "Laura",
    apellido: "Martínez",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    areas: ["Inteligencia Artificial", "Aprendizaje Automático", "Robótica"],
    facultad: "Ingeniería",
    departamento: "Computación",
  },
  {
    id: 2,
    nombre: "Carlos",
    apellido: "Gómez",
    foto: "https://randomuser.me/api/portraits/men/41.jpg",
    areas: ["Educación", "Psicología Cognitiva"],
    facultad: "Humanidades",
    departamento: "Psicología",
  },
  {
    id: 3,
    nombre: "Ana",
    apellido: "Rojas",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
    areas: ["Biotecnología", "Genética"],
    facultad: "Ciencias Naturales",
    departamento: "Biología",
  },
];

interface TeacherCardProps {
  id: number;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ id }) => {
  const teacher = teachers.find((t) => t.id === id);

  if (!teacher) {
    return (
      <div className="p-6 text-center border border-gray-200 rounded-2xl bg-gray-50 text-gray-500">
        Docente no encontrado
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-white shadow-sm border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all duration-200 w-full max-w-sm mx-auto">
      <img
        src={teacher.foto}
        alt={teacher.nombre}
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-100"
      />

      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          {teacher.nombre}{" "}
          <span className="text-gray-500 font-normal">{teacher.apellido}</span>
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          {teacher.facultad} —{" "}
          <span className="text-gray-500">{teacher.departamento}</span>
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {teacher.areas.map((area, i) => (
            <span
              key={i}
              className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;