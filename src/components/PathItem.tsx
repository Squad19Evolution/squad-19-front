import { Link } from 'react-router-dom';

function PathItem() {
  return (
    <div className='col-span-2 justify-self-center sm:justify-self-start'>
      <Link to='/path'>
        <img
          src='/whatever.bmp'
          alt=''
          className='border border-orange-500 rounded-lg mb-2'
        />
      </Link>
      <p className='font-extrabold'>Nome da Trilha</p>
    </div>
  );
}

export default PathItem;
