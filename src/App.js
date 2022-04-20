import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import Landingpage from "./Landingpage";
import Profile from "./Profile";
import Register from "./Register";
import Reset from "./Reset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Landingpage />}/>
        <Route path="/home" element={<Homepage />}/>{" "}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="reset" element={<Reset/>}/>
       {" "}
      </Routes>{" "}
    </BrowserRouter>
  );
};
export default App;
