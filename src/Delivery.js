import "./Delivery.css";
import React from "react";
import Filters from "./Filters.js";
import DeliveryCollections from "./DeliveryCollections";
import TopBrands from "./TopBrands";
import ExploreSection from "./ExploreSection";
import restaurants from "./restaurants";

const deliveryFilters = [
  {
    id: "1",
    title: "filters",
    icon: <i className="fi fi-rr-settings-sliders absolute-center"> </i>,
  },
  {
    id: "2",
    title: "Ratings 4.0+",
  },
  {
    id: "3",
    title: "Safe and hygienic",
  },
  {
    id: "4",
    title: "Pure-veg",
  },
  {
    id: "5",
    title: "Delivery-time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"> </i>,
  },
  {
    id: "6",
    title: "Great Offers",
  },
];

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width filters">
        <Filters filterList={deliveryFilters} />{" "}
      </div>{" "}
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantsList}
        collectionName="Delivery Restaurants in Bangalore"
      />
    </div>
  );
};

export default Delivery;
