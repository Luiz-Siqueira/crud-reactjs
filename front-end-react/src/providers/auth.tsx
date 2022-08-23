import React,{useState} from "react";
import {ContextType, User} from "../types/@types.todo";
import { api } from '../services/api';

export const authContext = React.createContext<ContextType | null>(null);

export const AuthProvider = (props:any) =>{
    const [userAuth, setUserAuth] = useState<User>();

    function Login(email:string, password:string){
        const userRequest = {
            email: email,
            password:password
        };

        if(email && password){
            api.post(`/login`, { userRequest })
            .then(res => {
                setUserAuth(res.data.status)
                localStorage.setItem("email",email);
            }).catch(err => console.log(err))
        }
    }

    return(
        <authContext.Provider value={{userAuth , Login}}>
            {props.children}
        </authContext.Provider>
    )
}