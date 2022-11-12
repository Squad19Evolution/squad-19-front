import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Landing() {
  return (
    <div className='  '>
      <Header />
      <div className=' mx-auto container flex flex-col items-center md:flex-row gap-y-6 gap-x-4 mt-36 sm:mt-10 mb-10 '>
        <div className=' md:order-last' >
          <img src="studying 1.png" alt="book" className=' w-[128px] md:w-[512px] ' />
        </div>
        <div className='flex flex-col gap-y-12 ' >
          <h1 className=' text-orangeJuice text-center md:text-left w-80 md:w-auto text-2xl md:text-5xl font-bold '>
            Venha vitaminar o seu conhecimento com a gente!
          </h1>
          <p className=' text-orangeJuice text-center md:text-left w-80 md:w-auto text-base md:text-2xl leading-5 '>
            Estude através de trilhas pré-definidas por mentores da FCamara que
            são especialistas em tecnologia!
          </p>
          <p className=' bg-azulFormacao rounded-lg self-center px-7 md:px-12 py-3 md:py-4 md:text-2xl md:self-start font-bold '>Cadastre-se</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
