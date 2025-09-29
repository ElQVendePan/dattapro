import { FaSearch } from 'react-icons/fa'
import { HiMegaphone } from 'react-icons/hi2'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { RiHome6Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NavbarItem = ({ icon, active }: { icon: React.ReactNode, active?: boolean }) => {
  return (
    <div className={`items-center justify-center flex p-2 rounded-full ${active ? 'bg-primary text-white opacity-100' : 'opacity-30'} duration-200`}>
      <div className='text-2xl'>
        {icon}
      </div>
    </div>
  )
}

const Navbar = ({ currentPath }: { currentPath: string }) => {
  return (
    <div className='bg-white px-4 pb-2 fixed bottom-0 w-full text-center'>
      <div className='grid grid-cols-4 gap-4'>
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