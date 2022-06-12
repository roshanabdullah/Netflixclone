import React, {useState} from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from "./SignUp";





function App() {

  const [isloggedIn, setLoggedIn]=useState(false);
  const [isloggedOut, setLoggedOut]=useState(false);

  
  return(
    <div className="App">
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Home setLoggedOut={setLoggedOut} isloggedOut={isloggedOut}  isloggedIn={isloggedIn} setLoggedIn={setLoggedIn}  />} />
          <Route exact path="signup" element={<SignUp setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut}  />} />
        </Routes>
      </Router>
   
    </div>
  )
}

export default App;
