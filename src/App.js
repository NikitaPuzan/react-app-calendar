import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Information from "./components/Information";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
