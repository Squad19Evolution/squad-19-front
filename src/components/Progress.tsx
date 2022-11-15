import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import ProgressBar from './ProgressBar';

function Progress(props) {
  const { completedContents } = useContext(GlobalContext);
  const completedPathContents = completedContents.filter(
    (el) => el.path_id === props.path.id,
  );
  const percent = Math.floor(
    (completedPathContents.length / props.path.contents.length) * 100,
  );

  return (
    <div className=' bg-[#C4D3FD] flex flex-col gap-y-2 md:gap-y-4 text-azulFormacao rounded-lg p-3 my-4 w-[100%] '>
      <div>
        <ProgressBar percentage={percent} />
        <span className=' font-bold text-xs md:text-base '>{percent}%</span>
      </div>
      <div className=' flex flex-col gap-y-0 '>
        <span className=' font-semibold md:text-2xl '>
          Tempo para conclusão:
        </span>
        <span className=' font-bold text-xs md:text-base '>
          {props.duration}
        </span>
      </div>
      <div className=' flex flex-col gap-y-0 '>
        <span className=' font-semibold md:text-2xl '>Atualizado em:</span>
        <span className=' font-bold text-xs md:text-base '>10/11/2022</span>
      </div>
    </div>
  );
}

export default Progress;
