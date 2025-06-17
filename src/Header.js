import "./Header.css";
// import { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import { auth, db, logout } from "./firebase";
// import { query, collection, getDocs, where } from "firebase/firestore";

const Header = () => {
  // const [user, loading, error] = useAuthState(auth);
  // const [name, setName] = useState("");
  // const navigate = useNavigate();
  // const handleClick = (async) => {
  //   navigate("/profile");
  // };
  // const handleSubmit = (async) => {
  //   navigate("/home");
  // };

  // useEffect(() => {
  //   const fetchUserName = async () => {
  //     try {
  //       const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  //       const doc = await getDocs(q);
  //       const data = doc.docs[0].data();
  //       setName(data.name);
  //     } catch (err) {
  //       console.error(err);
  //       alert("An error occurred while fetching user data");
  //     }
  //   };
  //   if (loading) {
  //     return;
  //   }
  //   if (!user) {
  //     return navigate("/login");
  //   }
  //   fetchUserName();
  // }, [user, loading, navigate]);

  return (
    <div className="max-width header">
      <img
     
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
      </div>{" "}
    </div>
  );
};

export default Header;
