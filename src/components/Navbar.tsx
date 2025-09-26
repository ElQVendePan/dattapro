import { FaSearch } from 'react-icons/fa'
import { HiMegaphone } from 'react-icons/hi2'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { RiHome6Fill } from 'react-icons/ri'

const NavbarItem = ({ icon, active }: { icon: React.ReactNode, active?: boolean }) => {
  return (
    <div className={`items-center justify-center flex p-2 rounded-full ${active ? 'bg-primary text-white opacity-100' : 'opacity-30'}`}>
      <div className='text-2xl'>
        {icon}
      </div>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className='bg-white px-4 pb-2 fixed bottom-0 w-full text-center'>
      <div className='grid grid-cols-4 gap-4'>
        <NavbarItem active icon={<RiHome6Fill />} />
        <NavbarItem icon={<FaSearch />} />
        <NavbarItem icon={<HiMegaphone />} />
        <NavbarItem icon={<IoPersonCircleSharp />} />
      </div>
    </div>
  )
}

export default Navbar
