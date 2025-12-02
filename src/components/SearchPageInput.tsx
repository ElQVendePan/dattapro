import { useState, useEffect } from "react";
import Input from "../components/forms/Input";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
    onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
    const [query, setQuery] = useState("");
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        // Si está vacío, limpiar resultados y NO mostrar loader
        if (!query.trim()) {
            setTyping(false);
            onSearch("");
            return;
        }

        setTyping(true);

        const timeout = setTimeout(() => {
            onSearch(query);
            setTyping(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);

    return (
        <div className="w-full">
            <Input
                icon={<FaSearch className="w-full h-full" />}
                placeholder="Escribe para buscar..."
                value={query}
                onChange={(e: any) => setQuery(e.target.value)}
            />

            {/* Loader circular SOLO si hay texto y está escribiendo */}
            {typing && query.trim() !== "" && (
                <div className="flex justify-center py-10">
                    <span className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                </div>
            )}
        </div>
    );
};

export default SearchInput;