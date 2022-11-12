import { Link } from "react-router-dom";

function LoginButtom() {
  return (
    <Link to="/Login" className=" ml-auto mr-8 mt-6  " >
      <button className=" bg-azulFormacao h-6 w-14 rounded text-zinc-50 text-xs " >Entrar</button>
    </Link>
  );
}

export default LoginButtom;