// import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import {
//   auth,
//   registerWithEmailAndPassword,
//   signInWithGoogle,
// } from "./firebase";
import "./Register.css";

export default function Register() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [user, loading, error] = useAuthState(auth);
  // const navigate = useNavigate();
  // const handleClick = (async) => {
  //   navigate("/login");
  // };
  // const register = () => {
  //   if (!name) alert("Please enter name");
  //   registerWithEmailAndPassword(name, email, password);
  // };

  // useEffect(() => {
  //   if (loading) return;
  //   if (user) {
  //     navigate("/home");
  //   }
  // }, [user, loading, navigate]);

  return (
    <div className="register">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
        alt="register-logo-zomato"
        className="register-logo-zomato"
      />
      <div className="register-container">
        <div className="register-title"> Register </div>{" "}
        {/* {error && <div> {error.message} </div>}{" "} */}
        <div className="property"> Name </div>{" "}
        <input
          type="text"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />{" "}
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
        <button
          className="register-button"
          type="submit"
          // onClick={() => register(name, email, password)}
        >
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
            alt="mail"
            className="mail-image"
          />{" "}
          Register with Email{" "}
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
        <div className="already-zomato">
          <p> Already have an account ? </p>{" "}
          <button className="login-button-register">
            {" "}
            Login{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
