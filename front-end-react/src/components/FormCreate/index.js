import './style.css';
import { React, useState } from 'react';
import api from "../../services/api.js";
import { Navigate } from "react-router-dom";
export default function FormCreate() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [redirect, setRedirect] = useState()

    const createUser = async (e) => {
        e.preventDefault()

        let passwordVerify = verifyPassword();
        if(name && email&& password  && passwordRepeat){
            if (passwordVerify) {
                await api.post("/create", {
                    name: name,
                    email: email,
                    password: password
                })
                    .then((response) => {
                        if (response.data.sucess) {
                            alert('Usuário cadastrado com sucesso!')
                            setRedirect(true)
                        } else {
                            alert('Algo deu errado, tente novamente')
                        }
                    })
                    .catch((err) => {
                        console.error("Ops! Ocorreu um erro" + err);
                    });
            } else {
                alert('As senhas não estão iguais!')
            }
        }else{
            alert('Preencha todos os campos')
        }
    }


    const verifyPassword = (e) => {
        if (password !== passwordRepeat) {
            return false
        } else {
            return true
        }
    }

    return (
        <div>
            {redirect ? 
                <Navigate to="/users" replace={true} />
            :
           
            <form onSubmit={createUser}>
                <div className="container-primary">
                    <span>Nome:</span>
                    <input type='text' name="name" onChange={(e) => setName(e.target.value)} />
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
            }
        </div>
    );
}

