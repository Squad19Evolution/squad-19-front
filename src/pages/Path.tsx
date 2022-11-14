import ContentItem from '../components/ContentItem';
import HeaderThree from '../components/HeaderThree';

function Path() {
  return (
    <>
      <HeaderThree />
      <div className='container mx-auto text-orangeJuice mt-10 flex flex-col sm:flex-row justify-between'>
        <div className='flex flex-col'>
          <h1 className='font-extrabold text-5xl p-5'>
            UX/UI Design Iniciante
          </h1>
          <p className='p-3 w-96 text-2xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            nihil, et provident dolor enim expedita fugit dolorum corrupti.
          </p>
        </div>
        <div className='flex flex-wrap flex-col sm:flex-row gap-5 items-center'>
          <ContentItem />
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </div>
      </div>
    </>
  );
}

export default Path;
