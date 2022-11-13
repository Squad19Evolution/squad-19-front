import { Link } from 'react-router-dom';
import LoginButtom from './LoginButtom';

function Header() {
  return (
    <nav className='bg-[#C4D3FD] border-gray-200 px-2 sm:px-4 py-5 sm:py-7 '>
      <div className='container flex flex-wrap justify-between items-center mx-auto '>
        <Link to='/'>
          <div className=' bg-azulFormacao p-2 rounded-md md:rounded-lg ' >
            <a href='' className='flex items-center'>
              <img
                src='https://d335luupugsy2.cloudfront.net/cms/files/107693/1654526197/$g74vm2w5o56'
                className='md:mr-3 h-6 sm:h-9'
                alt='Orange Juice Logo'
              />
              <span className='self-center text-xl font-semibold whitespace-nowrap text-white hidden md:block '>
                Orange Juice
              </span>
            </a>
          </div>
        </Link>
        <div className='flex justify-between items-center gap-10'>
          <Link
            to='/'
            className=' text-azulFormacao text-xs md:text-base font-bold'>
            Home
          </Link>
          <a
            href='https://discord.com'
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
