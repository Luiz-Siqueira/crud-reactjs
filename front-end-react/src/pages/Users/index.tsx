import "./style.css";
import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { authContext } from "../../providers/auth";
import { ContextType } from "../../types/@types.todo";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  const { userAuth } = React.useContext(authContext) as ContextType;

  const [userInfo, setUserInfo] = useState([] as any);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!userAuth) {
      navigate("/");
    }
    getUser();
  }, []);

  const getUser = async () => {
    await api
      .get("/clients")
      .then((response: any) => {
        setUserInfo(response.data);
        if (response.data.length > 0) setVisible(true);
      })
      .catch((err: string) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  return (
    <div className="container">
      <h3>Usuarios Cadastrados</h3>
      <table className="table table-bordered table-striped mb-0">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {visible ? (
            userInfo!.map((user: any) => {
              return (
                <tr>
                  <td>{user.userid}</td>
                  <td>{user.name}</td>
                  <td>{user.email || "Email não encontrado"}</td>
                </tr>
              );
            })
          ) : (
            <p>Nenhum usuario cadastrado</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
