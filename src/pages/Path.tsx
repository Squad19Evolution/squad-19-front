import ContentItem from '../components/ContentItem';
import HeaderThree from '../components/HeaderThree';
import Progress from '../components/Progress';

function Path() {
  let percent = 7;
  let progressBar = ` bg-azulFormacao h-2.5 rounded-full w-[${percent}%] `
  return (
    <>
      <HeaderThree />
      <div className='container mx-auto text-orangeJuice mt-10 flex flex-col md:flex-row justify-between px-4'>
        <div className='flex flex-col items-center md:items-start '>
          <h1 className='font-extrabold text-2xl md:text-5xl'>
            UX/UI Design Iniciante
          </h1>
          <div className=' md:flex md:flex-col md:w-[414px] ' >
            <p className='text-base text-center md:text-left px-6 md:px-0 md:text-2xl'>
              Essa trilha é para você que está iniciando a sua trajetória de  aprendizados em UX/UI Design. <br />
              Não esqueça de registrar o seu progresso!
            </p>
            {/* colocar prop nesse progress aqui */}
            <Progress />
          </div>
        </div>
        <div className='flex flex-wrap flex-col md:flex-row gap-5 items-center'>
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
