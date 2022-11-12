import ContentItem from '../components/ContentItem';
import HeaderTwo from '../components/HeaderTwo';
import PathItem from '../components/PathItem';

function Path() {
  return (
    <>
      <HeaderTwo />
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

{
  /* <div className='container mx-auto text-black mt-10'>
  <div className='flex shrink justify-between items-center	flex-col gap-3'>
    <h1 className='font-extrabold text-5xl border border-orange-400 rounded-lg p-5'>
      Título da Trilha
    </h1>
    <p className='border border-orange-400 rounded-lg p-3'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nihil, et
      provident dolor enim expedita fugit dolorum corrupti.
    </p>
    <div className='max-w-[90%] sm:max-w-[50%]'>
      <PathItem />
      <PathItem />
      <PathItem />
      <PathItem />
    </div>
  </div>
</div>; */
}
