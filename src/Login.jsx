import React, { useState } from "react";
import Button from "@material-ui/core/Button";
//import VisibilityIcon from "@material-ui/icons/Visibility";
//import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./login.css";
import { auth, signInWithGoogle } from "./firebase";
import logo from "./amazonLogo.png";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => console.warn(error));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="loginLogo" alt="amazon's logo" src={logo} />
      </Link>
      <div className="loginContainer">
        <h1>Fazer login</h1>
        <form action="">
          <section id="email">
            <label htmlFor="email">Email</label>
            <input
              maxLength="128"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </section>

          <section>
            <label htmlFor="password">Password</label>
            <div id="divPassword">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                minLength="8"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="password-constraints"
                required
              />
              {/*<IconButton aria-label="Show password">
                <VisibilityIcon />
  </IconButton>*/}
            </div>
            <div id="password-constraints">Eight or more characters.</div>
          </section>
          <section>
            <label htmlFor="">Sign In With Google</label>
            <div className="login-buttons">
              <Button
                variant="contained"
                color="secondary"
                onClick={signInWithGoogle}
              >
                Login Google!
              </Button>
            </div>
          </section>
          <Button onClick={singIn} variant="contained" color="primary">
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
