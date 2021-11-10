import React, { useState, useContext } from "react";
import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "./store/AuthContext";

function SignIn() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [pwd, setPwd] = useState("");
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const pwdInputHandler = (e) => {
    setPwd(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailError("* Enter valid email");
    }
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailError("");
    }

    if (pwd.trim().length < 7) {
      setPwdError("* Enter password of more than 7 characters");
    }
    if (pwd.trim().length >= 7) {
      setPwdError("");
    }
    let isInputValid =
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
      pwd.trim().length >= 7;
    if (isInputValid) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmrKm9DzSb4KKXMS1xYqNktzIudRi8g6c",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: pwd,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        alert(
          "Authentication failed! Please enter correct email id and password"
        );
      } else {
        const data = await response.json();
        console.log(data);

        authCtx.logIn(data.idToken);
        alert("authentication successfull");
        navigate("/");
      }
      setPwd("");
      setEmail("");
    }
  };

  return (
    <div className={classes.SignIn}>
      <div className={classes.background}></div>
      <div className={classes.LogIn}>
        <form onSubmit={submitHandler} className={classes.form}>
          <div>
            <label htmlFor="#email">
              <span style={{ color: "red" }}>*</span>Email Address
            </label>
            <input
              id="#email"
              type="text"
              value={email}
              onChange={emailInputHandler}
              autocomplete="off"
            ></input>
            <p
              style={{
                color: "red",
                margin: "0.1rem 0 1rem 0",
                textAlign: "left",
              }}
            >
              {emailError}
            </p>
          </div>
          <div>
            <label htmlFor="#pwd">
              <span style={{ color: "red" }}>*</span>Password
            </label>
            <input
              id="#pwd"
              type="password"
              value={pwd}
              onChange={pwdInputHandler}
            ></input>
            <p
              style={{
                color: "red",
                margin: "0.1rem 0 1rem 0",
                textAlign: "left",
              }}
            >
              {pwdError}
            </p>
          </div>

          <button type="submit" className={classes.button}>
            LOG IN
          </button>

          <section className={classes.switching}>
            <span>New User?</span>
            <Link className={classes.link} to="/auth/SignUp">
              SignUp
            </Link>
          </section>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
