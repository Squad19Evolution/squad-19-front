import { Link } from 'react-router-dom';

function LogoutButtom() {
  return (
    <Link to='/'>
      <button className=' bg-azulFormacao h-6 w-14 md:h-12 md:w-24 rounded md:rounded-lg text-zinc-50 text-xs md:text-base '>
        Sair
      </button>
    </Link>
  );
}

export default LogoutButtom;
