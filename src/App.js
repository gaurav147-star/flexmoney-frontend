import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ThankYou from "./pages/Thankyou";
import Profile from "./pages/Profile";
import ApplicationStepper from "./pages/ApplicationForm";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/form" exact element={<ApplicationStepper />} />
          <Route path="/thankyou" exact element={<ThankYou />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
