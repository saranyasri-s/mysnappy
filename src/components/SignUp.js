import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const [firstName, setFirstNamne] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState("");

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
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
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    validatepassword(e.target.value);
  };
  const validatepassword = (val) => {
    if (val.trim().length <= 6) {
      setPasswordError(true);
      return true;
    } else {
      setPasswordError(false);
      return false;
    }
  };
  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
    validateConfirmPassword(e.target.value);
  };
  const validateConfirmPassword = (val) => {
    if (val.trim() !== password) {
      setConfirmPasswordError(true);
      return true;
    } else {
      setConfirmPasswordError(false);
      return false;
    }
  };
  const firstnameChangeHandler = (e) => {
    setFirstNamne(e.target.value);
    validateFirstname(e.target.value);
  };
  const validateFirstname = (val) => {
    if (val.trim().length <= 0) {
      setFirstNameError(true);
      return true;
    } else {
      setFirstNameError(false);
      return false;
    }
  };
  const lastNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
    addressValidate(e.target.value);
  };
  const addressValidate = (val) => {
    if (val.trim().length <= 0) {
      setAddressError(true);
      return true;
    } else {
      setAddressError(false);
      return false;
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      !emailError &&
      !passwordError &&
      !confirmPasswordError &&
      !firstNameError &&
      !addressError
    ) {
      console.log(email);
      console.log(password);
      console.log(confirmPassword);
      console.log(firstName);
      console.log(lastName);
      console.log(address);
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmrKm9DzSb4KKXMS1xYqNktzIudRi8g6c",
        {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        alert("something went wrong");
      } else {
        const data = await response.json();
        alert("Sign up successful ,Log in using your credentials");
      }
      setPassword("");
      setEmail("");
      setConfirmPassword("");
      setFirstNamne("");
      setLastName("");
      setAddress("");
    } else {
      alert("Enter required information");
    }
  };
  return (
    <>
      <div className={classes.background}></div>

      <form className={classes.SignUp} onSubmit={submitHandler}>
        <h3>Sign Up</h3>
        <p>
          <span style={{ color: "red" }}>*</span>Email
        </p>
        <input
          required
          type="text"
          onChange={emailInputHandler}
          value={email}
          placeholder="Email"
        ></input>
        {emailError && (
          <p style={{ color: "red", margin: "0" }}>Enter valid email address</p>
        )}
        <p>
          <span style={{ color: "red" }}>*</span>Password
        </p>
        <input
          required
          type="password"
          onChange={passwordChangeHandler}
          value={password}
          placeholder="Password"
        ></input>
        {passwordError && (
          <p style={{ color: "red", margin: "0" }}>
            Enter password of more than 6 characters
          </p>
        )}
        <p>
          <span style={{ color: "red" }}>*</span>Confirm password
        </p>
        <input
          required
          type="password"
          onChange={confirmPasswordChangeHandler}
          value={confirmPassword}
          placeholder="Reenter password"
        ></input>
        {confirmPasswordError && (
          <p style={{ color: "red", margin: "0" }}>Enter the same password</p>
        )}
        <p>
          <span style={{ color: "red" }}>*</span>First name
        </p>
        <input
          required
          type="text"
          onChange={firstnameChangeHandler}
          value={firstName}
        ></input>
        {firstNameError && (
          <p style={{ color: "red", margin: "0" }}>
            First name cannot be empty
          </p>
        )}
        <p>Last name</p>
        <input
          type="text"
          onChange={lastNameChangeHandler}
          value={lastName}
        ></input>
        <p>
          <span style={{ color: "red" }}>*</span>Address
        </p>
        <textarea
          required
          onChange={addressChangeHandler}
          value={address}
          type="text"
        ></textarea>
        {addressError && (
          <p style={{ color: "red", margin: "0" }}>
            Address field cannot be empty
          </p>
        )}
        <div style={{ margin: "0.8rem 0rem" }} className={classes.tandc}>
          <input required type="checkbox"></input>
          <span style={{ margin: "0 0 0 0.2rem" }}>
            I agree to <Link to="/TandC">Terms and conditions</Link>
          </span>
        </div>
        <div className={classes.button}>
          <div>
            <button type="submit">Sign Up</button>
          </div>
          <div>
            Already have an account? <Link to="/auth/Login">Log in</Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
