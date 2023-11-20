
import Home from "./Components/Home";
import Advertise from "./Components/Advertise";
import Navbar from "./Components/Navbar";
import { Route,Routes } from "react-router-dom";




function App() {
 
  
  return (
    <div>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/advertise" element={<Advertise/>}></Route>
    </Routes>
    
   
    
   
    
    </div>
  );
}

export default App;
