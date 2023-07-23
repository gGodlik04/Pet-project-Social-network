import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Dialogs from "./Components/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/Wall" element={<Profile/>} />
            <Route path="/Dialogs" element={<Dialogs/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
