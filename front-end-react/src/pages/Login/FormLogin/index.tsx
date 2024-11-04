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
      <InputComponent
        label="Email"
        type="email"
        name="email"
        onChange={(value) => {
          setEmail(value);
        }}
        value={email}
      />
      <InputComponent
        label="Password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="flex justify-center">
        <Button text="SingIn" onClick={verifyLogin} />
      </div>
    </div>
  );
}
