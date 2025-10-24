import { FaSearch } from "react-icons/fa"
import Input from "../components/Input"
import TeacherCard from "../components/TeacherCard"
import Subtitle from "../components/Subtitle"
import { TbBulbFilled } from "react-icons/tb"

const Search = () => {
  return (
    <div>
      <Input icon={<FaSearch className="w-full h-full" />} placeholder="Buscar perfiles y convocatorias..." className="mt-4" />
      <Subtitle icon={<TbBulbFilled className="w-full h-full" />}>
        Perfiles Recomendados
      </Subtitle>
      <TeacherCard id={1} />
    </div>
  )
}

export default Search