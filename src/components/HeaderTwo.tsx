import { Link } from "react-router-dom";
import LoginButtom from "./LoginButtom";

function HeaderTwo() {
  return (
    <nav className='bg-[#C4D3FD] border-gray-200 w-full'>
      <div className='flex flex-wrap w-full '>
        <div className="bg-azulFormacao md:w-48 w-20 h-7 md:h-14 rounded-lg my-5 md:my-6 ml-7 md:ml-28 " ></div>
        <Link to="/" className=" ml-auto text-azulFormacao text-xs md:text-base mr-4 md:mr-12 mt-7 md:mt-10 font-bold " >Home</Link>
        <a href="https://discord.com" className=" text-azulFormacao text-xs md:text-base mr-4 md:mr-8 mt-7 md:mt-10 font-bold " >Discord</a>
        <LoginButtom />
      </div>
    </nav>
  );
}

export default HeaderTwo;
