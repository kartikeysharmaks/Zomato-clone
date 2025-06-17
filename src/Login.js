// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();
  // const handleClick = (async) => {
  //   navigate("/register");
  // };
  // const handleSubmit = (async) => {
  //   navigate("/reset");
  // };

  // useEffect(() => {
  //   if (loading) {
  //     return;
  //   }
  //   if (user) {
  //     navigate("/home");
  //   }
  // }, [user, loading, navigate]);

  return (
    <div className="login">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
        alt="login-logo-zomato"
        className="login-logo-zomato"
      />
      <div className="login-container">
        <div className="login-title"> Login </div>{" "}
        {/* {error && <div> {error.message} </div>}{" "} */}
        <div className="property"> Email </div>{" "}
        <input
          type="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <div className="property"> Password </div>{" "}
        <input
          type="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <div className="forgot-password-zomato">
          <p className="forgot">
            {" "}
            forgot Password ?{" "}
          </p>{" "}
        </div>{" "}
        <button
          className="login-button"
          type="submit"
          // onClick={() => logInWithEmailAndPassword(email, password)}
        >
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
            alt="mail"
            className="mail-image"
          />{" "}
          Login with Email{" "}
        </button>{" "}
        <button
          className="google-button"
          type="submit"
          // onClick={() => signInWithGoogle()}
        >
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png"
            alt="google"
            className="google-image"
          />{" "}
          Continue with Google{" "}
        </button>{" "}
        <div className="new-zomato">
          <p> New to Zomato ? </p>{" "}
          <button className="create-button" >
            {" "}
            Create a New Account{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
