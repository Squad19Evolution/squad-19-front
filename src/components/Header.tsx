import { Link } from 'react-router-dom';
import LoginButtom from './LoginButtom';

function Header() {
  return (
    <nav className='bg-[#C4D3FD] border-gray-200 px-2 sm:px-4 py-5 sm:py-7 '>
      <div className='container flex flex-wrap justify-between items-center mx-auto '>
        <Link to='/'>
          <img src="Ativo.png" alt="logo" className=' w-16 md:w-28 ' />
        </Link>
        <div className='flex justify-between items-center gap-8'>
          <Link
            to='/'
            className=' text-azulFormacao text-xs md:text-base font-bold'>
            Home
          </Link>
          <a
            href='https://discord.com/invite/NtESsDFGx5'
            className=' text-azulFormacao text-xs md:text-base font-bold '>
            Comunidade
          </a>
          <LoginButtom />
        </div>
      </div>
    </nav>
  );
}

export default Header;
