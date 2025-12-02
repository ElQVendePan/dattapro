import Header from "../components/Header";
import SearchInput from "../components/SearchPageInput";

const Search = () => {

    const handleSearch = (value: string) => {
        console.log("Buscar:", value);
        // aquí haces la petición al backend
    };

    return (
        <div className="mb-20 p-5">
            <Header title="Mapa de Talento"></Header>
            <div className="text-center py-40">
                <h2 className="font-bold text-3xl">Mapa de Talento</h2>
            </div>
            <SearchInput onSearch={handleSearch} />
        </div>
    );
};

export default Search;