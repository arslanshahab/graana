import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Buy from "./Pages/Buy/Buy";
import Sell from "./Pages/Sell/Sell";
import Rent from "./Pages/Rent/Rent";
import Invest from "./Pages/Invest/Invest";
import {Navbar} from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/buy" element={<Buy />}/>
          <Route path="/sell" element={<Sell />}/>
          <Route path="/rent" element={<Rent />}/>
          <Route path="/invest" element={<Invest />}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
