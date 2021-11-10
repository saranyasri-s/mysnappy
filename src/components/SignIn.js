import React, { useState, useContext } from "react";
import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "./store/AuthContext";

function SignIn() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [pwd, setPwd] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
    setEmailTouched(true);
  };
  const validateEmail = (val) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
      setEmailError(false);
      return false;
    } else {
      setEmailError(true);
      return true;
    }
  };

  const pwdInputHandler = (e) => {
    setPwd(e.target.value);
    validatepassword(e.target.value);
    setPasswordTouched(true);
  };
  const validatepassword = (val) => {
    const a =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;
    let b = a.test(val);
    if (!b) {
      setPasswordError(true);
      return true;
    } else {
      setPasswordError(false);
      return false;
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const isInputValid = true;
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
      setPasswordError(false);
      setPasswordTouched(false);
      setEmailTouched(false);
      setEmailError(false);
    }
  };
  const allfieldsOk =
    !emailError && emailTouched && !passwordError && passwordTouched;
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

            {emailError && (
              <p style={{ color: "red", margin: "0" }}>
                Enter valid email address
              </p>
            )}
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
            {passwordError && (
              <p style={{ color: "red", margin: "0" }}>
                Password must include min 8 char, one symbol, small alphabet,
                big alphabet, and number
              </p>
            )}
          </div>

          <button
            disabled={!allfieldsOk}
            type="submit"
            className={classes.button}
          >
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
