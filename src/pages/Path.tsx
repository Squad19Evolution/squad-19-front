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
  let seconds = 0;

  function addTime(time) {
    var splited = '';
    splited = time.split(':', 3);
    seconds += parseInt(splited[2]);
    seconds += parseInt(splited[1]) * 60;
    seconds += parseInt(splited[0]) * 60 * 60;
  }

  function calculateTime() {
    var s = seconds % 60;
    var m = Math.floor(seconds / 60) % 60;
    var h = Math.floor(seconds / 60 / 60);
    return `${h.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${m.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${s.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  }

  path.contents.forEach((el) => {
    addTime(el.duration);
  });

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
            <Progress path={path} duration={calculateTime()} />
          </div>
        </div>
        <div className='flex flex-wrap flex-col md:flex-row gap-5 items-center'>
          {path?.contents.map((el, i) => (
            <ContentItem key={i} item={{ path_id: path.id, ...el }} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Path;
