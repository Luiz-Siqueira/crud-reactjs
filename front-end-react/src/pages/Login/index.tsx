import './style.css';
import { FormLogin } from "../../components/FormLogin"
import { useNavigate } from "react-router-dom";

export function Login() {

    const navigate = useNavigate()

    function redirectRegister() {
        navigate('/register')
    }
    return (
        <div className='wrapper-login'>
            <div className='container-writer'>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum labore fugit</p>
            </div>
            <div className='container-login'>
                <FormLogin />
                <div className="container-hr"></div>


            <div className="register-button">
                Usuário novo? <span onClick={redirectRegister}>Cadastrar</span>
            </div>
            </div>
        </div>
    )
}