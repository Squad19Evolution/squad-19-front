import { Link } from 'react-router-dom';
import BookLogo from '../components/BookLogo';
import Header from '../components/Header';

function Landing() {
  return (
    <div className='  '>
      <Header />
      <div className=' mx-auto flex flex-col items-center gap-y-6 mt-36 sm:mt-10 mb-10 '>
        <BookLogo />
        <h1 className=' text-orangeJuice text-center w-80 text-2xl font-bold '>
          Venha vitaminar o seu conhecimento com a gente!
        </h1>
        <p className=' text-orangeJuice text-center w-80 text-base leading-5 '>
          Estude através de trilhas pré-definidas por mentores da FCamara que
          são especialistas em tecnologia!
        </p>
        <button className=' bg-azulFormacao w-40 h-10 '>Cadastre-se</button>
      </div>
    </div>
  );
}

export default Landing;
