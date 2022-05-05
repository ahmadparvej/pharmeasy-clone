import Footer from "./components/Footer";
import Homepage from "./Pages/Homepage";
import { HealthCareProducts } from "./Pages/HealthCareProducts";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="healthcare-products" element={<HealthCareProducts />} />
      </Routes>
      <Footer />
      
    </div>
  );
}
export default App;
