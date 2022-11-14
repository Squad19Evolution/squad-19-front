import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='h-screen'>
      <div className='container mx-auto flex flex-col items-center gap-y-10'>
        <div className='mt-32 lg:px-36 sm:px-28 px-28 lg:py-16 sm:py-14 py-12 rounded-xl shrink bg-azulFormacao'></div>
        <input
          type='text'
          placeholder='E-mail'
          className='border-b-[1px] border-orangeJuice placeholder:text-xs md:placeholder:text-lg placeholder:text-orangeJuice text-orangeJuice bg-zinc-50 w-52 md:w-96'
        />
        <input
          type='password'
          name=''
          id=''
          placeholder='Senha'
          className='border-b-[1px] border-orangeJuice placeholder:text-xs md:placeholder:text-lg placeholder:text-orangeJuice text-orangeJuice bg-zinc-50 w-52 md:w-96'
        />
        <Link to='/dashboard' className=' bg-azulFormacao px-14 md:px-32 py-2 md:py-4 rounded-md text-base md:text-3xl text-zinc-50 font-semibold' >
          Entrar
        </Link>
        <Link to="/signup" className=' text-orangeJuice text-xs md:text-base' >
          Não possui uma conta? <span className='font-bold'>Cadastre-se</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
