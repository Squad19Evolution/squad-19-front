import LoginButtom from "./LoginButtom";

function HeaderTwo() {
  return (
    <nav className='bg-[#C4D3FD] border-gray-200 w-full '>
      <div className='flex flex-wrap w-full '>
        <div className="bg-azulFormacao md:w-48 w-20 h-7 md:h-14 rounded-lg my-5 md:my-6 ml-7 md:ml-28 " ></div>
        <LoginButtom />
      </div>
    </nav>
  );
}

export default HeaderTwo;
