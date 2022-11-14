function ContentItem(props: any) {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        <img
          src='/path_img.png'
          alt=''
          className='mb-4 w-28 h-28 rounded-full'
        />
      </div>
      <p className='text-white text-sm font-extrabold bg-blue-800 rounded-lg text-center px-4 py-2'>
        {props.item.name}
      </p>
    </div>
  );
}

export default ContentItem;
