import ContentItem from '../components/ContentItem';
import HeaderThree from '../components/HeaderThree';

function Path() {
  let percent = 7;
  let progressBar = ` bg-azulFormacao h-2.5 rounded-full w-[${percent}%] `
  return (
    <>
      <HeaderThree />
      <div className='container mx-auto text-orangeJuice mt-10 flex flex-col sm:flex-row justify-between px-4'>
        <div className='flex flex-col items-center '>
          <h1 className='font-extrabold text-2xl'>
            UX/UI Design Iniciante
          </h1>
          <p className='text-base text-center px-6'>
            Essa trilha é para você que está iniciando a sua trajetória de  aprendizados em UX/UI Design. <br />
            Não esqueça de registrar o seu progresso!
          </p>
        </div>
        <div className=' bg-[#C4D3FD] flex flex-col gap-y-2 text-azulFormacao rounded-lg p-3 my-4 ' >
          <div>
            <div className="w-full bg-zinc-50 rounded-full h-2.5 ">
              <div className={progressBar} ></div>
            </div>
            <span className=' font-bold text-xs '>{percent}%</span>
          </div>
          <div className=' flex flex-col gap-y-0 '>
            <span className=' font-semibold ' >Tempo para conclusão:</span>
            <span className=' font-bold text-xs ' >1h20</span>
          </div>
          <div className=' flex flex-col gap-y-0 '>
            <span className=' font-semibold ' >Atualizado em:</span>
            <span className=' font-bold text-xs ' >10/11/2022</span>
          </div>
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
