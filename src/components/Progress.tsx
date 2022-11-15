import ProgressBar from './ProgressBar';

function Progress() {
  let percent = 90;

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
        <span className=' font-bold text-xs md:text-base '>1h20</span>
      </div>
      <div className=' flex flex-col gap-y-0 '>
        <span className=' font-semibold md:text-2xl '>Atualizado em:</span>
        <span className=' font-bold text-xs md:text-base '>10/11/2022</span>
      </div>
    </div>
  );
}

export default Progress;
