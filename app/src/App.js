import Footer from "./components/Footer";
import Homepage from "./Pages/Homepage";
import { HealthCareProducts } from "./Pages/HealthCareProducts";
function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <Homepage />
      <HealthCareProducts/>
      <Footer />
    </div>
  );
}
export default App;
