import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./Pages/Homepage";
import { HealthCareProducts } from "./Pages/HealthCareProducts";
import Navbar from "./components/Navbar";
import { SingleProdCategory } from "./Pages/SingleProdCategory";
import { AddToCart } from "./Pages/AddToCart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OTP from "./Pages/OTP";
import Success from "./Pages/Success";
import { Payment } from "./Pages/Payment";
import { useDispatch } from "react-redux";
import { getData } from "./Redux/Products/Action";
import { Cart } from "./components/Cart";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/healthcare-products" element={<HealthCareProducts />} />
        <Route
          path="healthcare-products/:id"
          element={<SingleProdCategory />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
