import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;