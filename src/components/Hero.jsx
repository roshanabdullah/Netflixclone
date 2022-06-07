import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';








function Hero(){
  
    
   
    
    return(
    <div className="Hero">
        <h1 className="heroHeading1">Unlimited movies, TV<br/> shows, and more.</h1>
        
        <h1 className="heroHeading2">Watch anywhere. Cancel anytime.</h1>
        <p className="heroPara">Ready to watch? Enter your email to create or restart your membership.</p>
        <div id="emailDiv">
        <TextField style={{width:"500px"}} color="primary" placeholder="Email Address" id="fullWidth" />
        <Button  id="heroButton"  variant="outlined">Get Started</Button>
        </div>  
        
        
        
        
    </div>
    )
}
export default Hero;