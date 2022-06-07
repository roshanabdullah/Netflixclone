import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./SignUp";





function App() {

  

  
  return(
    <div className="App">
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="signup" element={<SignUp />} />
        </Routes>
      </Router>
   
    </div>
  )
}

export default App;
