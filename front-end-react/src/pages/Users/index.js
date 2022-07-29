import './style.css';
import { useState, useEffect } from 'react';

import api from '../../services/api.js'
export default function Users() {

    const [userInfo, setUserInfo] = useState();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getUser()
    }, []);

    const getUser = async () => {
        await api.get("/getUser")
            .then((response) => {
                setUserInfo(response.data)
                if(response.data.length > 0)
                    setVisible(true)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    return (
        <div className="container">
            <h3>Usuarios Cadastrados</h3>
            {visible ?
                userInfo.map((user, index) => (
                    <div className="row-user">
                        <div className='row-item'>
                            <p>{user.nome}</p>
                        </div>
                        <div className='row-item'>
                            <p>{user.email}</p>
                        </div>
                    </div>
                )) :
                <p>Nenhum usuario cadastrado</p>
            }
        </div>
    );
}

