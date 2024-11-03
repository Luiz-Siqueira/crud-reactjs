import "./style.css";
import FormCreate from "./FormCreate";
import { useNavigate } from "react-router-dom";
export default function RegisterUser() {
  const navigate = useNavigate();

  function navigateLogin() {
    navigate("/");
  }
  return (
    <div className="container">
      <h3>Cadastrar</h3>
      <FormCreate />

      <div className="container-hr"></div>
      <div className="text-login">
        <p>
          Tem uma conta? <span onClick={navigateLogin}>Entre</span>
        </p>
      </div>
    </div>
  );
}
