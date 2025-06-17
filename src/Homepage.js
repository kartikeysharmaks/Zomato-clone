import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TabOptions from "./TabOptions";
import Delivery from "./Delivery";
import DiningOut from "./DiningOut";
import NightLife from "./NightLife";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      {" "}
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />{" "}
      {getCorrectScreen(activeTab)} 
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut/>;
    case "Nightlife":
      return <NightLife/>;
    default:
      return <div>Delivery</div>;
  }
};

export default Homepage;