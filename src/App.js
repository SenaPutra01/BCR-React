// https://devsaurus.com/add-redux
import LandingPage from "./pages/landingPage";
import Cars from "./pages/cars"
import "./style/style.css"
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" exact element={<LandingPage/>} />  
          <Route path="/cars" element={<Cars/>} />    
      </Routes>
    </div>
  );
}

export default App;
