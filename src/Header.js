import "./Header.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleClick = (async) => {
    navigate("/profile");
  };
  const handleSubmit = (async) => {
    navigate("/home");
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occurred while fetching user data");
      }
    };
    if (loading) {
      return;
    }
    if (!user) {
      return navigate("/login");
    }
    fetchUserName();
  }, [user, loading, navigate]);
  return (
    <div className="max-width header">
      <img
        onClick={handleSubmit}
        src="https://theme.zdassets.com/theme_assets/219316/ca65d4b0417dec6fa903cc5fadfd0ad9bbc93ce0.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right-app">
        <div className="location-search-bar-container-app">
          <div className="location-wrapper-app">
            <div className="location-icon-name-app">
              <i className="fi fi-rr-marker absolute-center location-icon-app">
                {" "}
              </i>{" "}
              <div> Bangalore </div>{" "}
            </div>{" "}
            <i className="fi fi-rr-caret-down absolute-center"> </i>{" "}
          </div>{" "}
          <div className="location-search-separator-app"> </div>{" "}
          <div className="header-search-bar-app">
            <i className="fi fi-rs-search absolute-center search-icon-app"> </i>{" "}
            <input
              placeholder="Search for restaurant, cuisine or a dish "
              className="search-input-app"
            />
          </div>{" "}
        </div>{" "}
        <div className="profile-wrapper">
          <img
            onClick={handleClick}
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
            className="profile-image"
          />
          <div className="profile-name-header">
            {" "}
            {name} {error && <div> {error} </div>}{" "}
          </div>{" "}
          <img
            src="https://www.bing.com/th?id=OIP.J-yOD3FXyMLlNt6pcGY_eAHaHa&w=104&h=102&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt=""
            className="logout-icon"
            onClick={logout}
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
