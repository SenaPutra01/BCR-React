// https://devsaurus.com/add-redux
import LandingPage from "./pages/landingPage";
import Cars from "./pages/displayCar/cars"
import Navbar from "./components/header"
import Footer from "./components/footer"
import "./style/cars.css"
import "./features/counter/counter.css"
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" exact element={<LandingPage/>} />  
          <Route path="/cars" element={<Cars/>} />    
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
