import { FaSearch } from 'react-icons/fa'
import { HiMegaphone } from 'react-icons/hi2'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { RiHome6Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NavbarItem = ({ icon, active }: { icon: React.ReactNode, active?: boolean }) => {
  return (
    <div className={`items-center justify-center flex p-2 py-3 rounded-full relative duration-200`}>
      <div className={`rounded-full absolute mx-auto my-auto ${active ? 'w-full h-full bg-primary opacity-100' : 'w-[60%] h-[60%]'} duration-200`}></div>
      <div className={`text-2xl relative ${active ? 'text-white' : 'opacity-40'} duration-200`}>
        {icon}
      </div>
    </div>
  )
}

const Navbar = ({ currentPath }: { currentPath: string }) => {
  return (
    <div className='bg-white p-4 fixed bottom-0 w-full text-center'>
      <div className='grid grid-cols-4 gap-2'>
        <Link to='/'>
          <NavbarItem icon={<RiHome6Fill />} active={currentPath === '/'} />
        </Link>
        <Link to='/search'>
          <NavbarItem icon={<FaSearch />} active={currentPath === '/search'} />
        </Link>
        <Link to='/notifications'>
          <NavbarItem icon={<HiMegaphone />} active={currentPath === '/notifications'} />
        </Link>
        <Link to='/profile'>
          <NavbarItem icon={<IoPersonCircleSharp />} active={currentPath === '/profile'} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar