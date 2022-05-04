import Homepage from "./Pages/Homepage";
import {Route,Routes}from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
    <Routes>
      <Route Path={"/Login"}element={<Login />} />
      <Route Path={"/Signup"}element={<Signup />} />
    <Homepage/> 
    </Routes>
    </div>
  );
}

export default App;
