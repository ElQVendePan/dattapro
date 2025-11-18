import type { JSX } from "react";
import { FaBalanceScale, FaBuilding, FaCoins, FaGlobe, FaHandshake, FaLaptopCode, FaTruck, FaUniversity, FaUsers } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiFactory, GiPlantSeed, GiSolarPower } from "react-icons/gi";
import { MdLocalHospital, MdRocketLaunch, MdSchool } from "react-icons/md";

export const areaIcons: Record<number, JSX.Element> = {
    1: <MdSchool className="w-1/2 h-1/2" />,                 // Educación
    2: <MdLocalHospital className="w-1/2 h-1/2" />,          // Salud
    3: <GiFactory className="w-1/2 h-1/2" />,                // Industria
    4: <FaLaptopCode className="w-1/2 h-1/2" />,             // TIC / Software
    5: <MdRocketLaunch className="w-1/2 h-1/2" />,           // Emprendimiento
    6: <FaCoins className="w-1/2 h-1/2" />,                  // Finanzas / Contabilidad
    7: <FaBalanceScale className="w-1/2 h-1/2" />,           // Derecho / Normativo
    8: <GiSolarPower className="w-1/2 h-1/2" />,             // Energía / Sostenibilidad
    9: <GiPlantSeed className="w-1/2 h-1/2" />,              // Agroindustria
    10: <FaPeopleGroup className="w-1/2 h-1/2" />,           // Economía popular y comunitaria
    11: <FaTruck className="w-1/2 h-1/2" />                  // Logística y comercio
};

export const sectoresMap: Record<number, { icon: JSX.Element }> = {
    1: { icon: <FaBuilding className="w-1/3 h-1/3" /> },        // Público
    2: { icon: <FaUsers className="w-1/3 h-1/3" /> },           // Privado
    3: { icon: <FaHandshake className="w-1/3 h-1/3" /> },       // ONG
    4: { icon: <FaUniversity className="w-1/3 h-1/3" /> },      // Académico
    5: { icon: <FaGlobe className="w-1/3 h-1/3" /> },           // Internacional
};