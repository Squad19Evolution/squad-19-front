import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <h1>landing</h1>
      <Link to='/login'>
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Landing;
