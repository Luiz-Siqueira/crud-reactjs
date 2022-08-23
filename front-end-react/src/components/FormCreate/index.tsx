import './style.css';
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import {api} from '../../services/api';
export default function FormCreate() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const createUser = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        let passwordVerify = verifyPassword();
        if(name && email&& password  && passwordRepeat){
            if (passwordVerify) {

                const user = {
                    nome: name,
                    email:email,
                    password: password
                }

                await api.post("/register", {user})
                    .then((response:any) => {
                        if (response.data.sucess) {
                            //fazer toast mais bonito com mensage do backend
                            alert('Usuário cadastrado com sucesso!')
                            navigate('/')
                        } else {
                            alert('Algo deu errado, tente novamente')
                        }
                    })
                    .catch((err:any) => {
                        console.error("Ops! Ocorreu um erro" + err);
                    });
            } else {
                alert('As senhas não estão iguais!')
            }
        }else{
            alert('Preencha todos os campos')
        }
    }


    const verifyPassword = () => {
        if (password !== passwordRepeat) {
            return false
        } else {
            return true
        }
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div className="container-primary">
                    <span>Nome:</span>
                    <input className='form-control' type='text' name="name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="container-primary">
                    <span>Email:</span>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="container-flex">
                    <div className="container-secondary">
                        <span>Senha:</span>
                        <input type='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="container-secondary">
                        <span>Repetir Senha:</span>
                        <input type='password' onChange={(e) => setPasswordRepeat(e.target.value)} />
                    </div>
                </div>
                <input className='button' type='submit' value="Cadastrar" />
            </form>
        </div>
    );
}

