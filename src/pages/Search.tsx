import { FaSearch } from "react-icons/fa"
import Header from "../components/Header"
import Input from "../components/Input"
import TeacherCard from "../components/TeacherCard"

const Search = () => {
  return (
    <div>
      <Header title="Perfiles" />
      <Input icon={<FaSearch />} placeholder="Buscar perfiles y convocatorias..." className="mb-4 mt-4" />
      <b>Perfiles Recomendados</b>
      <TeacherCard id={1} />
    </div>
  )
}

export default Search