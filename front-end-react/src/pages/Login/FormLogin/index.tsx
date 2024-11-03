import "./style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../providers/auth";
import { ContextType } from "../../../types/@types.todo";
import { Button } from "../../../components/Button";
import { InputComponent } from "../../../components/InputComponent";

export function FormLogin() {
  const navigate = useNavigate();

  const { userAuth, Login } = React.useContext(authContext) as ContextType;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function verifyLogin() {
    console.log("logado");
    Login(email, password);

    if (userAuth) {
      navigate("./users");
    }
  }

  return (
    <div>
      <div>
        <span>Email:</span>
        <InputComponent
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-2 mb-3">
        <span>Password:</span>
        <InputComponent
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <Button text="SingIn" onClick={verifyLogin} />
      </div>
    </div>
  );
}
