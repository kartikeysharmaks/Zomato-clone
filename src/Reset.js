import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "./Reset.css";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handleClick = async => {
    navigate("/register");
};
  useEffect(() => {
    if (loading){ 
        return
    };
    if (user) {
         navigate("/home");
        }
  }, [user, loading, navigate]);
  return (
    <div className="reset">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
        alt="reset-logo-zomato"
        className="reset-logo-zomato"
      />
      <div className="reset-container">
        <div className="reset-title">Reset Password</div>{" "}
        {error && <div> {error.message} </div>}{" "}
        <div className="property"> Email </div>{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <button
          className="reset-button"
          type="submit"
          onClick={() => sendPasswordReset(email)}
        >
         Reset Password 
        </button>{" "}
        <div className="new-zomato">
           <p>New to Zomato?</p>
           <button className="create-button" onClick={handleClick}>Create a New Account</button>
        </div>
      </div>{" "}
    </div>
  );
};
