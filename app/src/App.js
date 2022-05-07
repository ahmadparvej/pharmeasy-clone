import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./Pages/Homepage";
import { HealthCareProducts } from "./Pages/HealthCareProducts";
import Navbar from "./components/Navbar";
import { SingleProdCategory } from "./Pages/SingleProdCategory";
import { AddToCart } from "./Pages/AddToCart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OTP from "./Pages/OTP"

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="healthcare-products" element={<HealthCareProducts />} />
        <Route path="healthcare-products/:id" element={<SingleProdCategory/>}/>
        <Route path="/healthcare-products" element={<HealthCareProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addtocart" element={<AddToCart/>} />
        <Route path="/otp" element={<OTP />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
