import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Information from "./components/Information";
import Profile from "./components/Profile";
import LoginContainer from "./components/Login/LoginContainter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes>
    </div>
  );
}

export default App;
