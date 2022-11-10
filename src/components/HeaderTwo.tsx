function HeaderTwo() {
  return (
    <nav className='bg-[#C4D3FD] border-gray-200 px-2 sm:px-4 py-2.5 '>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='' className='flex items-center'>
          <img
            src='https://d335luupugsy2.cloudfront.net/cms/files/107693/1654526197/$g74vm2w5o56'
            className='mr-3 h-6 sm:h-9'
            alt='Orange Juice Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Orange Juice
          </span>
        </a>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center'>
            <li>
              <a
                href='#'
                className='block py-2 pr-4 pl-3 rounded md:border-0 md:p-0'>
                Logout
              </a>
            </li>
            <li>
              <div className='overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600'>
                <svg
                  className='absolute -left-1 w-12 h-12 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clip-rule='evenodd'></path>
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderTwo;
