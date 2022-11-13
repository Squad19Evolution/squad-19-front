import Header from '../components/Header';
import PathItem from '../components/PathItem';

function DashBoard() {
  return (
    <>
      <Header />
      <div className='container mx-auto mt-14'>
        <div className='flex flex-wrap flex-col gap-y-3 sm:flex-row items-center justify-between'>
          <h1 className='text-orangeJuice text-5xl font-extrabold'>
            Trilhas de estudo
          </h1>
          {/* <img src='/shit.bmp' alt='' className='' /> */}
        </div>
        <div className='flex flex-wrap flex-col sm:flex-row gap-x-5 items-center mt-10'>
          <PathItem />
          <PathItem />
          <PathItem />
          <PathItem />
        </div>
      </div>
    </>
  );
}

export default DashBoard;
