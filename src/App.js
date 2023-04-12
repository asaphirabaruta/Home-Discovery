import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Houses from "./Pages/Houses";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/homes" component={Houses} />
        <Route path="/home-details" component={Details} />
      </div>
    </>
  );
}

export default App;
