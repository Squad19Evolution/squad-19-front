import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function ContentItem(props: any) {
  const { handleComplete, handleNotFinished, completedContents } =
    useContext(GlobalContext);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const content = completedContents.find((el) => el.id === props.item.id);
    if (content) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [completedContents]);

  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex justify-center'>
        <img
          src='/path_img.png'
          alt=''
          className='mb-4 w-28 h-28 rounded-full'
        />
      </div>
      <a
        href={props.item.url}
        className='text-zinc-50 text-sm font-extrabold bg-azulFormacao rounded-lg text-center px-4 py-2'>
        {props.item.name}
      </a>
      <div className=' flex flex-row justify-between gap-x-2 '>
        <button
          onClick={() =>
            completed
              ? handleNotFinished(props.item)
              : handleComplete(props.item)
          }
          className={`text-zinc-50 text-sm font-extrabold ${
            completed ? 'bg-[#1A9926]' : 'bg-azulFormacao'
          } rounded-lg text-center px-4 py-2 flex-1`}>
          Feito
        </button>
        <p className='text-azulFormacao text-sm font-extrabold bg-zinc-50 rounded-lg text-center px-4 py-2 flex-1'>
          {props.item.duration}
        </p>
      </div>
    </div>
  );
}

export default ContentItem;
