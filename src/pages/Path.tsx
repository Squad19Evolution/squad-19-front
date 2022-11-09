import HeaderTwo from '../components/HeaderTwo';

function Path() {
  return (
    <>
      <HeaderTwo />
      <div className='container mx-auto text-black mt-20'>
        <div className='flex shrink justify-between items-center	flex-col sm:flex-row gap-3'>
          <h1 className='font-extrabold text-5xl border border-orange-400 rounded-lg p-5'>
            Título da Trilha
          </h1>
          <div className='max-w-[90%] sm:max-w-[30%]'>
            <p className='border border-orange-400 rounded-lg p-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
              nihil, et provident dolor enim expedita fugit dolorum corrupti.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Path;
