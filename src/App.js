import "./App.css";
import { Route, Redirect } from "react-router-dom";
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
        <Route path="/home-details" component={Details} />
        <Route path="/" exact component={Houses} />
      </div>
    </>
  );
}

export default App;
