import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContentItem from '../components/ContentItem';
import HeaderThree from '../components/HeaderThree';
import Progress from '../components/Progress';
import { GlobalContext } from '../context/GlobalContext';

function Path() {
  const params = useParams();
  const { paths } = useContext(GlobalContext);
  const path = paths.find((el) => +params.id === el.id);

  return (
    <>
      <HeaderThree />
      <div className='container mx-auto text-orangeJuice mt-10 flex flex-col md:flex-row justify-between px-4'>
        <div className='flex flex-col items-center md:items-start '>
          <h1 className='font-extrabold text-2xl md:text-5xl'>{path?.name}</h1>
          <div className=' md:flex md:flex-col md:w-[414px] '>
            <p className='text-base text-center md:text-left px-6 md:px-0 md:text-2xl'>
              {path?.description} <br />
              Não esqueça de registrar o seu progresso!
            </p>
            {/* colocar prop nesse progress aqui */}
            <Progress />
          </div>
        </div>
        <div className='flex flex-wrap flex-col md:flex-row gap-5 items-center'>
          {path?.contents.map((el, i) => (
            <ContentItem key={i} item={el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Path;
