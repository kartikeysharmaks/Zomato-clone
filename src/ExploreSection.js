import React from "react";
import "./ExploreSection.css";
import ExploreCard from "./ExploreCard";

const ExploreSection = ({ collectionName, list }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title"> {collectionName} </div>{" "}
      <div className="explore-grid">
        {" "}
        {list.map((restaurant) => (
          <div>
            <ExploreCard restaurant={restaurant} />{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default ExploreSection;