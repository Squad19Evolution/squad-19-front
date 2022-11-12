import { Link } from "react-router-dom";

function LoginButtom() {
  return (
    <Link to="/Login" className=" mr-8 md:mr-28 mt-6 " >
      <button className=" bg-azulFormacao h-6 w-14 md:h-12 md:w-24 rounded md:rounded-lg text-zinc-50 text-xs md:text-base " >Entrar</button>
    </Link>
  );
}

export default LoginButtom;