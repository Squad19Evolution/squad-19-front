import HeaderTwo from '../components/HeaderTwo';
import PathItem from '../components/PathItem';

function DashBoard() {
  return (
    <>
      <HeaderTwo />
      <div className='container mx-auto text-black mt-12 grid sm:grid-cols-4 grid-cols-2 gap-y-5'>
        <h1 className='text-4xl font-extrabold col-span-2 justify-self-center sm:justify-self-start'>
          Trilhas de estudo
        </h1>
        <img
          src='/shit.bmp'
          alt=''
          className='justify-self-start invisible sm:visible'
        />
        <PathItem />
        <PathItem />
        <PathItem />
        <PathItem />
      </div>
    </>
  );
}

export default DashBoard;
