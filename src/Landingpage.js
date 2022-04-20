import { useNavigate } from "react-router-dom";
import React from "react";
import "./Landingpage.css";

export default function Landingpage() {
  const navigate = useNavigate();
  const handleClick = aysnc =>{
    navigate("/login");
  };
  const handleSubmit = aysnc =>{
    navigate("/register");
  };

  const getApp = aysnc =>{
    navigate("https://www.zomato.com/mobile")
  }
  return (
    <div className="home">
      <div className="nav-bar-home">
        <div className="gettheapp">
          <i className="fi fi-sr-arrow-small-down"></i>
          <div className="get-text" onClick={getApp}>Get the App</div> 
        </div>
        <div className="login-signup-nav">
          <div className="add-restaurants">Add Restaurants</div>
          <div className="login-link" onClick={handleClick}>Login</div>
          <div className="signup-link" onClick={handleSubmit}>Sign-up</div>
        </div>
      </div>
      <div className="home-image">
        <div className="logo-zomato-home">
          <img
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="login-logo-zomato"
            className="login-logo-zomato"
          />
          <div className="zomato-heading">
            Discover the best foods & drinks in your city
          </div>
          <div className="header-right-home">
            <div className="location-search-bar-container-home">
              <div className="location-wrapper-home">
                <div className="location-icon-name-home">
                  <i className="fi fi-rr-marker absolute-center location-icon-home">
                    {" "}
                  </i>{" "}
                  <div> Bangalore </div>{" "}
                </div>{" "}
                <i className="fi fi-rr-caret-down absolute-center"> </i>{" "}
              </div>{" "}
              <div className="location-search-separator-home"> </div>{" "}
              <div className="header-search-bar-home">
                <i className="fi fi-rs-search absolute-center search-icon"> </i>{" "}
                <input
                  placeholder="Search for restaurant, cuisine or a dish "
                  className="search-input-home"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
