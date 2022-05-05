import Footer from "./components/Footer";
import Homepage from "./Pages/Homepage";
import { HealthCareProducts } from "./Pages/HealthCareProducts";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";



function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/healthcare-products" element={<HealthCareProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />

    </div>
  );
}
export default App;
