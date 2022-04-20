import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Profile.css";
import Footer from "./Footer";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

export default function Profile() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

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
    <div className="pc">
      <Header />
      <div className="pc-contain">
        <div className="profile-container">
          <div className="profile-details">
            <div className="profile">
              <div className="profile-icon">
                <img
                  src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                  alt="profile"
                  className="image-icon"
                />
              </div>{" "}
              <div className="profile-name">
                {" "}
                {name} {error && <div> {error} </div>}{" "}
                <div className="location-profile">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
                    alt=""
                    className="loc-icon"
                  />
                  <div className="loc-name"> Haridwar </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="profile-settings">
              <button className="edit-profile">
                <i className="fi fi-rr-edit"> </i>
                Edit profile{" "}
              </button>{" "}
              <div className="division">
                <div className="review">
                  <div className="number"> 0 </div>{" "}
                  <div className="topic"> Reviews </div>{" "}
                </div>{" "}
                <div className="review">
                  <div className="number"> 0 </div>{" "}
                  <div className="topic"> Photos </div>{" "}
                </div>{" "}
                <div className="review">
                  <div className="number"> 0 </div>{" "}
                  <div className="topic"> Followers </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="activities">
          <div className="profile-activity">
            <div className="activity-heading"> ACTIVITY </div>{" "}
            <div className="activity-content"> Reviews </div>{" "}
            <div className="activity-content"> Followers </div>{" "}
            <div className="activity-content"> Recently Viewed </div>{" "}
            <div className="activity-content"> Bookmarks </div>{" "}
            <div className="activity-content"> Blog Posts </div>{" "}
          </div>{" "}
          <div className="profile-activity">
            <div className="activity-heading"> ONLINE ORDERING </div>{" "}
            <div className="activity-content"> Order History </div>{" "}
            <div className="activity-content"> My Addresses </div>{" "}
            <div className="activity-content"> Favorite Orders </div>{" "}
          </div>{" "}
          <div className="profile-activity">
            <div className="activity-heading"> PAYMENTS </div>{" "}
            <div className="activity-content"> Zomato Credits </div>{" "}
            <div className="activity-content"> Manage Wallets </div>{" "}
            <div className="activity-content"> Manage Cards </div>{" "}
          </div>{" "}
          <div className="profile-activity">
            <div className="activity-heading"> TABLE BOOKING </div>{" "}
            <div className="activity-content"> Your Booking </div>{" "}
          </div>{" "}
          <div className="profile-activity">
            <div className="activity-heading"> Zomato Profile Widget </div>{" "}
            <div className="widget">
              {" "}
              Show case your zomato profile on your blog{" "}
            </div>{" "}
            <img
              src="https://www.zomato.com/widgets/user_widget_img.php?user_id=82033428"
              alt=""
              className="widget-image"
            />
            <div className="widget-note">
              {" "}
              Get this Widget <i className="fi fi-rr-caret-right"> </i>{" "}
            </div>{" "}
          </div>{" "}
          <div className="profile-activity">
            <div className="activity-heading lo" onClick={logout}>
              {" "}
              LOG OUT{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}
