import React, {useState} from "react";
import "../Signup.css";
import netflix from "../media/images/netflix.png";
import { TextField, Button, Checkbox, FormGroup, FormControlLabel, Typography} from '@mui/material';
import {Link} from "react-router-dom";

function SignUp(){

   const [signIn, setSignIn]=useState({
       email:"",
       password:""
});

   function handleChange(e){
        const {name, value}
            =e.target;
        setSignIn((prevValue)=>{
            return {
                ...prevValue, [name]:value
            };
        });
        
        e.preventDefault();
        
       
   }
   function submitValue(e){
        setSignIn((prevValue)=>{
            return {
                ...prevValue, signIn
            };
        });
         console.log(signIn);
        e.preventDefault();
       
   }


    return(
        <div id="signUpBody">
            <div id="topLogo">
                <img src={netflix} alt="logo" />
            </div>
            <div id="signUpForm">
                <h1>Sign In</h1>
                <form id="myForm1">
                <TextField onChange={handleChange} value={signIn.email} name="email"  placeholder="Enter your email address"  id="bgText1"></TextField>
                <TextField onChange={handleChange} value={signIn.password} name="password" placeholder="Password"  id="bgText1"></TextField>
                <Button onClick={submitValue} id="bgButton1" fullWidth={true}>Sign In</Button>
                </form>
                <div id="needHelp">
                <FormGroup id="checkboxGroup" >
                    <FormControlLabel  control={<Checkbox
                    defaultChecked sx={{color:'#ffffff', '&.Mui-checked': {
                        color: '#ffffff',
                    }, 
                    }}/>} label={<Typography sx={{fontSize:"12px", lineHeight:"normal",
                    color:"#ffffff",fontFamily: 'Roboto Slab'}}>Remember Me</Typography>} />
                    
                </FormGroup>
                <Link id="needLink" to="/">Need Help?</Link>
            </div>
                    <p>New to Netflix? <Link id="lastLink" to="/">Sign Up Now</Link></p>
            </div>
            
        </div>
    )
}

export default SignUp;