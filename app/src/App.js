import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./Pages/Homepage";
import { HealthCareProducts } from "./Pages/HealthCareProducts";
import Navbar from "./components/Navbar";
import { SingleProdCategory } from "./Pages/SingleProdCategory";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="healthcare-products" element={<HealthCareProducts />} />
        <Route path="healthcare-products/:id" element={<SingleProdCategory/>}/>
      </Routes>
      <Footer />
      
    </div>
  );
}
export default App;
