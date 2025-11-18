import { getNivelColor } from "./perfil.utils";

export function TablaCompetencias({ data }: { data: { id: number; competencia: string; nivel: 1 | 2 | 3 | 4; }[] }) {
    return (
        <table className="w-full">
            <thead>
                <tr className="opacity-40 text-sm font-medium">
                    <th className="py-2 text-left">Competencia</th>
                    <th className="py-2 text-right">Nivel</th>
                </tr>
            </thead>

            <tbody className="divide-y-1 divide-bg-third bg-bg-primary opacity-80">
                {data?.map((c) => (
                    <tr key={c.id} className="hover:bg-gray-50 transition">
                        <td className="py-3 font-medium">{c.competencia}</td>
                        <td className={`py-3 text-right font-bold ${getNivelColor(c.nivel)}`}>
                            {c.nivel}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}