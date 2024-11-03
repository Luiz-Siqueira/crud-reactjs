import "./style.css";
import { FormLogin } from "./FormLogin";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  function redirectRegister() {
    navigate("/register");
  }
  return (
    <div className="h-screen md:flex ">
      <div className="md:w-3/4 justify-start pt-10 pl-10 md:bg-[url('../src/assets/bg/background.png')] bg-cover ">
        <h3 className="text-6xl font-sans text-[#e74f74] ">
          Lorem ipsum dolor sit amet.
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          labore fugit
        </p>
      </div>
      <div className="md:w-1/4 p-8">
        <FormLogin />
        <div className="container-hr"></div>

        <div className=" text-center">
          Usuário novo?{" "}
          <span
            className="text-[#e74f74] hover:text-[#ea6484] cursor-pointer"
            onClick={redirectRegister}
          >
            Cadastrar
          </span>
        </div>
      </div>
    </div>
  );
}
