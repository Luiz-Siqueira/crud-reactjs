import './style.css';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../providers/auth';
import { ContextType } from '../../types/@types.todo';

export function FormLogin() {
    const navigate = useNavigate();
    
    const { userAuth,Login } = React.useContext(authContext) as ContextType;

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function verifyLogin(e: { preventDefault: () => void; }){
        e.preventDefault();
        // console.log('logado')
        Login(email,password)

        if(userAuth){
            navigate('./users')
        }
    }

    return (
        <div onSubmit={verifyLogin}>
        <form >
            <div className="container-primary">
                <span>email:</span>
                <input type='text' name="name" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="container-primary">
                <span>Password:</span>
                <input type='password' name="password" onChange={(e) =>setPassword(e.target.value)}/>
            </div>
            <input className='button' type='submit' value="SingIn" />
        </form>
    </div>
    );
}