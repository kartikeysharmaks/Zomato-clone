import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
// import Register from "./Register";
// import Login from "./Login";
// import Landingpage from "./Landingpage";
import Profile from "./Profile";
import Reset from "./Reset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/register" element={<Register/>}/> */}
        {/* <Route path="/login" element={<Login />}/> */}
        {/* <Route path="/" element={<Landingpage />}/> */}
        <Route path="/" element={<Homepage />} />{" "}
        <Route path="/profile" element={<Profile />} />
        <Route path="reset" element={<Reset />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
};

export default App;
