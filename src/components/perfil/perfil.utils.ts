// src/components/PerfilProfesional/perfil.utils.ts

export const getNivelColor = (nivel: number) => {
  switch (nivel) {
    case 1:
      return "text-red-500";
    case 2:
      return "text-orange-500";
    case 3:
      return "text-yellow-500";
    case 4:
      return "text-green-600";
    default:
      return "text-gray-500";
  }
};