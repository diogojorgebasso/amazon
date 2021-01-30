import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./login.css";
import logo from "./amazonLogo.png";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const [showPassword, setShowPassword] = useState(false);

  const singIn = (event) => {
    event.preventDefault();
  };

  const register = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      <img className="loginLogo" alt="amazon's logo" src={logo} />
      <div className="loginContainer">
        <h1>Fazer login</h1>
        <form action="">
          <section id="email">
            <label for="email">Email</label>
            <input
              maxLength="128"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autocomplete="email"
              required
            />
          </section>

          <section>
            <label for="password">Password</label>
            <div id="divPassword">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="new-password"
                minLength="8"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="password-constraints"
                required
              />
              <IconButton aria-label="Show password">
                <VisibilityIcon />
              </IconButton>
            </div>
            <div id="password-constraints">Eight or more characters.</div>
          </section>

          <Button onClick={singIn} variant="contained" color="#FF9900">
            Log-in
          </Button>
          <p>
            Ao continuar, você concorda com as Condições de Uso da FAKE Amazon.
            Por favor verifique a Notificação de Privacidade, Notificação de
            Cookies e a Notificação de Anúncios Baseados em Interesse.
          </p>
          <Button
            onClick={register}
            variant="contained"
            color="secondary"
            startIcon={<AccountCircleIcon />}
          >
            Create an Account
          </Button>
        </form>
      </div>
    </div>
  );
}
