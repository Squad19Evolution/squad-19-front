import { Link } from 'react-router-dom';
import HeaderTwo from '../components/HeaderTwo';

function Landing() {
  return (
    <div className='text-black '>
      <HeaderTwo />
      <h1>landing</h1>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Landing;
