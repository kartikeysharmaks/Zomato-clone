import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <div className="zomato-logo">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
              alt="Zomato-logo"
              className="img"
            />
          </div>{" "}
          <div className="footer-logo">
            <div className="country">
              <div className="flag">
                <img
                  src="https://www.nicepng.com/png/full/244-2448366_the-howl-india-flag.png"
                  alt="Indian-flag"
                  className="flag-img"
                />
              </div>{" "}
              <div className="india"> India </div>{" "}
            </div>{" "}
            <div className="world">
              <div className="web">
                <img
                  src="https://th.bing.com/th/id/OIP.oBr6LTnOLJ3wYlB2z4OPCgHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7"
                  alt="world"
                  className="web-img"
                />
              </div>{" "}
              <div className="language"> English </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="footer-content">
          <div className="content-container">
            <div className="content-heading"> ABOUT ZOMATO </div>{" "}
            <div className="content-matter"> Who We Are </div>{" "}
            <div className="content-matter"> Blog </div>{" "}
            <div className="content-matter"> Work With Us </div>{" "}
            <div className="content-matter"> Investor Relations </div>{" "}
            <div className="content-matter"> Report Fraud </div>{" "}
          </div>{" "}
          <div className="content-container">
            <div className="content-heading"> ZOMAVERSE </div>{" "}
            <div className="content-matter"> Zomato </div>{" "}
            <div className="content-matter"> Feeding India </div>{" "}
            <div className="content-matter"> Hyperpure </div>{" "}
            <div className="content-matter"> Zomaland </div>{" "}
          </div>{" "}
          <div className="content-container">
            <div className="content-heading"> FOR RESTAURANTS </div>{" "}
            <div className="content-matter"> Partner With Us </div>{" "}
            <div className="content-matter"> Apps For You </div>{" "}
            <div className="content-matter"> </div>{" "}
            <div className="content-matter"> </div>{" "}
            <div className="content-heading"> FOR ENTERPRISES </div>{" "}
            <div className="content-matter"> Zomato For Work </div>{" "}
          </div>{" "}
          <div className="content-container">
            <div className="content-heading"> LEARN MORE </div>{" "}
            <div className="content-matter"> Privacy </div>{" "}
            <div className="content-matter"> Security </div>{" "}
            <div className="content-matter"> Terms </div>{" "}
            <div className="content-matter"> Site - map </div>{" "}
          </div>{" "}
          <div className="content-container">
            <div className="social-media"> SOCIAL LINKS </div>{" "}
            <div className="social-icons">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png"
                alt="linked-in"
                className="linked-in"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
                alt="instagram"
                className="instagram"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384017.png"
                alt="twitter"
                className="twitter"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384012.png"
                alt="youtube"
                className="youtube"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/49/49354.png"
                alt="facebook"
                className="facebook"
              />
            </div>{" "}
            <div className="content-heading">
              <img
                src="	https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="appleStore"
                className="appleStore"
              />
            </div>{" "}
            <div className="content-heading">
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="playStore"
                className="playStore"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="footer-details">
          <p>
            {" "}
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies.All trademarks
            are properties of their respective owners .2008 - 2022© Zomato -
            clone™ Ltd.All rights reserved{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Footer;
