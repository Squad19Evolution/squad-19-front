import { Link } from 'react-router-dom';
import PathItem from '../components/PathItem';

function DashBoard() {
  return (
    <div className='container mx-auto text-black mt-12'>
      <div className='flex justify-around mb-12'>
        <h1 className='text-4xl font-extrabold'>Trilhas de estudo</h1>
        <div className='p-6 bg-orange bg-orange-600 rounded-xl'></div>
      </div>
      <div className='flex gap-2 ml-[19%]'>
        <PathItem />
        <PathItem />
      </div>
    </div>
  );
}

export default DashBoard;
