function ContentItem(props: any) {
  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex justify-center'>
        <img
          src='/path_img.png'
          alt=''
          className='mb-4 w-28 h-28 rounded-full'
        />
      </div>
      <p className='text-zinc-50 text-sm font-extrabold bg-azulFormacao rounded-lg text-center px-4 py-2'>
        {props.item.name}
      </p>
      <div className=" flex flex-row justify-between gap-x-2 " >
        <p className='text-zinc-50 text-sm font-extrabold bg-azulFormacao rounded-lg text-center px-4 py-2 flex-1'>
          Feito
        </p>
        <p className='text-azulFormacao text-sm font-extrabold bg-zinc-50 rounded-lg text-center px-4 py-2 flex-1'>
          {props.item.duration}
        </p>
      </div>
    </div>
  );
}

export default ContentItem;
