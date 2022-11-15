function ProgressBar(props) {
  return (
    <div className='w-full bg-zinc-50 rounded-full'>
      <div
        className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full'
        style={{
          width: props.percentage + '%',
        }}>
        {' '}
        {props.percentage}
      </div>
    </div>
  );
}

export default ProgressBar;
