import { MdCloudDownload } from "react-icons/md"
import axios from "axios"
import * as XLSX from "xlsx"
import { PiFileCsvFill } from "react-icons/pi"

const API_URL = import.meta.env.VITE_API_BASE_URL

const ExportProfile = () => {

    const userId = 1;

    const fetchData = async () => {
        const res = await axios.get(`${API_URL}/usuarios/get-all-info-usuarios.php?id=${userId}`);
        if (res.data.status === "success") {
            return res.data.data;
        } else {
            throw new Error("No se encontró el usuario");
        }
    };

    const exportCSV = async () => {
        const data = await fetchData();

        const headers = Object.keys(data).join(",");
        const values = Object.values(data).map(v => `"${v ?? ""}"`).join(",");

        const csvContent = headers + "\n" + values;

        // --- Agregar BOM para que Excel reconozca UTF-8 ---
        const BOM = "\uFEFF";

        const blob = new Blob([BOM + csvContent], {
            type: "text/csv;charset=utf-8;"
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `perfil_profesional_${userId}.csv`;
        a.click();

        URL.revokeObjectURL(url);
    };

    const exportXLSX = async () => {
        const data = await fetchData();

        const ws = XLSX.utils.json_to_sheet([data]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Perfil");

        XLSX.writeFile(wb, `perfil_profesional_${userId}.xlsx`);
    };

    return (
        <>
            <div className='w-14 h-14 text-primary mx-auto mb-6'>
                <MdCloudDownload className='w-full h-full' />
            </div>
            <h2 className='text-lg font-semibold mb-2'>Exportar Perfil Profesional</h2>
            <p className='opacity-70'>Selecciona el formato en el que deseas generar y descargar la información.</p>
            <div className="grid grid-cols-1 gap-4 mt-6">
                <div className="bg-bg-secondary p-4 rounded-2xl flex gap-4" onClick={exportCSV}>
                    <div className="w-14 h-14 flex items-center bg-primary text-white justify-center rounded-xl shrink-0">
                        <PiFileCsvFill className="w-1/2 h-1/2 mx-auto" />
                    </div>
                    <div className="text-left">
                        <h2 className="font-medium">Exportar como .CSV</h2>
                        <p className="text-sm opacity-70 mt-1">Archivo compatible con Excel, Google Sheets o Power BI.</p>
                    </div>
                </div>
                <div className="text-white bg-gradient-to-br from-[#1D6F42] to-[#0E472A] p-4 rounded-2xl flex gap-4" onClick={exportXLSX}>
                    <div className="bg-white w-14 h-14 flex items-center justify-center rounded-xl shrink-0">
                        <img className="w-1/2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg/995px-Microsoft_Office_Excel_%282025%E2%80%93present%29.svg.png" alt="" />
                    </div>
                    <div className="text-left">
                        <h2 className="font-medium">Exportar como .XLSX</h2>
                        <p className="text-sm opacity-70 mt-1">Genera un archivo Excel con toda la información del perfil profesional.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExportProfile;