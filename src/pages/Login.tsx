import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='LoginContainer'>
      <div className='box'></div>
      <div className='Break'></div>
      <input type='text' placeholder='E-mail' className='Login' />
      <div className='Break'></div>
      <input type='password' name='' id='' placeholder='Senha' className='Senha' />
      <div className='Break'></div>
      <button className='BotaoLogin' >Entrar</button>
      {/* <Link to='/dashboard'>
      </Link> */}
    </div>
  );
}

export default Login;
