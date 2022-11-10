import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='bg-slate-50 h-screen'>
      <div className='container mx-auto flex flex-col items-center gap-y-10'>
        <div className='mt-32 lg:px-36 sm:px-28 px-28 lg:py-16 sm:py-14 py-12 rounded-xl shrink bg-azulFormacao'></div>
        <input
          type='text'
          placeholder='E-mail'
          className='border-solid border-b-2 border-orangeJuice placeholder:text-3xl placeholder:text-orangeJuice text-orangeJuice p-3 lg:px-10 bg-slate-50'
        />
        <input
          type='password'
          name=''
          id=''
          placeholder='Senha'
          className='border-solid border-b-2 border-orangeJuice placeholder:text-3xl placeholder:text-orangeJuice text-orangeJuice p-3 lg:px-10 bg-slate-50'
        />
        <Link to='/dashboard'>
          <button className=' bg-azulFormacao px-8 pb-1 rounded-md py-1 text-3xl text-slate-50 font-semibold'>
            Entrar
          </button>
        </Link>
        <button>Cadastre-se</button>
      </div>
    </div>
  );
}

export default Login;
