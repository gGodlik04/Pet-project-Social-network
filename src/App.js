import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Wall from "./Components/Wall";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Wall/>
    </div>
  );
}

export default App;
