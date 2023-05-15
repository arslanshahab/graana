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
import Wanted from "./Pages/Wanted/Wanted";
import ForgetForm from "./components/forgetModal/ForgetModal";
import Registration from "./components/registerComponent/Registration";
import LoginForm from "./components/loginForm/LoginForm";

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
          <Route path="/wanted" element={<Wanted />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/forget" element={<ForgetForm />}/>
          <Route path="/register" element={<Registration/>} />
        </Routes>
          <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
