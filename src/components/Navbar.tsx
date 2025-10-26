import { BsFillPeopleFill } from 'react-icons/bs'
import { HiMegaphone } from 'react-icons/hi2'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { RiHome6Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NavbarItem = ({ icon, active, text }: { icon: React.ReactNode, active?: boolean, text: string }) => {
  return (
    <div className={`items-center justify-center lg:justify-normal flex p-2 py-3 lg:p-4 lg:pl-6 relative duration-200`}>
      <hr className={`${active ? 'bg-primary -left-4' : 'bg-none -left-5'} hidden lg:inline-block border-none absolute h-6 w-1 rounded-r-xl duration-200`} />
      <div className={`rounded-full lg:rounded-none absolute mx-auto my-auto ${active ? 'w-full h-full lg:w-auto lg:h-auto bg-primary opacity-100' : 'w-[60%] h-[60%] lg:w-auto lg:h-auto'} duration-200`}></div>
      <div className={`text-2xl relative ${active ? 'text-white lg:text-primary' : 'opacity-50'} duration-200`}>
        {icon}
      </div>
      <div>
        <h2 className={`hidden lg:inline-block pl-4 text-sm relative ${active ? 'font-semibold' : 'opacity-50 font-medium'} duration-200`}>{text}</h2>
      </div>
    </div>
  )
}

const Navbar = ({ currentPath }: { currentPath: string }) => {
  return (
    <div className='bg-bg-primary p-4 fixed bottom-0 w-full lg:w-[16%] lg:h-screen'>
      {/* solo visible en desktop */}
      <hr className='border-none w-0.5 rounded-full h-full absolute right-0 top-0 bg-bg-secondary' />
      <div className='ml-6 mt-6 mb-8 hidden lg:inline-block'>
        <img src="/dattapro-logo.svg" alt="Logo" className='dark:hidden w-[80%]' />
        <img src="/dattapro-logo-white.svg" alt="Logo" className='hidden dark:inline-block w-[80%]' />
      </div>
      <div className='grid grid-cols-4 lg:grid-cols-1 gap-1'>
        <Link to='/'>
          <NavbarItem text="Dashboard" icon={<RiHome6Fill />} active={currentPath === '/'} />
        </Link>
        <Link to='/search'>
          <NavbarItem text="Mapa de Talento" icon={<BsFillPeopleFill />} active={currentPath === '/search'} />
        </Link>
        <Link to='/convocatorias'>
          <NavbarItem text="Convocatorias" icon={<HiMegaphone />} active={currentPath === '/convocatorias'} />
        </Link>
        <Link to='/profile'>
          <NavbarItem text="Tu Perfil" icon={<IoPersonCircleSharp />} active={currentPath === '/profile'} />
        </Link>
      </div>
    </div>
  )
}

export default Navbar