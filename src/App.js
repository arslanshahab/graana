import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Sale } from "./pages/sale";
import { SignIn } from "./pages/login";
import { Property } from "./pages/property";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { BuyWant } from "./components/BuyWant/BuyWant";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<PrivateRoute />}>
            <Route path="/sale" element={<Sale />} />
          </Route>

          <Route path="/rent" element={<PrivateRoute />}>
            <Route path="/rent" element={<BuyWant />} />
          </Route>

          <Route path="/login" element={<SignIn />} />
          <Route path="/property/:id" element={<Property />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
