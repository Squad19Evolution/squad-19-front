import { useContext } from 'react';
import HeaderTwo from '../components/HeaderTwo';
import PathItem from '../components/PathItem';
import { GlobalContext } from '../context/GlobalContext';

function DashBoard() {
  const { paths } = useContext(GlobalContext);

  return (
    <>
      <HeaderTwo />
      <div className='container mx-auto mt-14'>
        <div className='flex flex-wrap flex-col gap-y-3 sm:flex-row items-center justify-between'>
          <h1 className='text-orangeJuice text-2xl md:text-5xl font-extrabold'>
            Trilhas de estudo
          </h1>
        </div>
        <div className='flex flex-wrap flex-col sm:flex-row gap-x-5 items-center mt-10'>
          {paths.map((el) => (
            <PathItem key={el.id} item={el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DashBoard;
