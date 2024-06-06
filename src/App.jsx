import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
// import Info from "./components/Info";
// import AboutPage from "./components/";
// import AbitryentPage from "./components/AbitryentPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/abitryent" element={<AbitryentPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
