import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='bg-black h-screen'>
      <div className='container mx-auto flex flex-col items-center gap-y-10'>
        <div className='mt-32 lg:px-36 sm:px-28 px-28 lg:py-16 sm:py-14 py-12 rounded-xl shrink bg-orange-600'></div>
        <input
          type='text'
          placeholder='E-mail'
          className='border-solid border-b-2 border-b-white placeholder:text-3xl text-white p-3 lg:px-10 bg-black'
        />
        <input
          type='password'
          name=''
          id=''
          placeholder='Senha'
          className='border-solid border-b-2 border-b-white placeholder:text-3xl text-white p-3 lg:px-10 bg-black'
        />
        <Link to='/dashboard'>
          <button className=' bg-orange-600 px-8 pb-1 rounded-md py-1 text-3xl text-black font-semibold'>
            Entrar
          </button>
        </Link>
        <button>Cadastre-se</button>
      </div>
    </div>
  );
}

export default Login;
