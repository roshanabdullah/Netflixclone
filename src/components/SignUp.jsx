import React, {useState} from "react";
import "../Signup.css";
import netflix from "../media/images/netflix.png";
import { TextField, Button, Checkbox, FormGroup, FormControlLabel, Typography} from '@mui/material';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../firebase-config";
import {signInWithEmailAndPassword} from 'firebase/auth';


function SignUp({setLoggedIn,setLoggedOut}){
    const initialState={email:"", password:""}
    const [signIn, setSignIn]=useState(initialState);
    const [validation, setValidation]=useState({});
    const [showError, setShowError]=useState(false);
    const [remember, setRemember]=useState(false);
    
       

    const navigate=useNavigate();



    

    const validate=(values)=>{
        const errors={};
        if(!values.email){
            errors.email="Email Address is Required";
        }
        else if(!values.email.includes('@')){
            errors.email="Enter a valid email address";
        }
        
        
        if(!values.password){
            errors.password="Enter a password";
        }
        else if(values.password.length<8 && values.password.length>1 ){
            errors.password="Your password must be between 8 and 1";
        }
        
        
        
        return errors;  
    }
   function handleChange(e){
        const {name, value}=e.target;
        setSignIn((prevValue)=>{
            return {
                ...prevValue, [name]:value
            };
        });
        e.preventDefault();
    }
    function handleCheck(e){
        setRemember(!remember);
        e.preventDefault();
    }
    
    
    

   const submitValue = async (e) => {
        setValidation(validate(signIn));
        
        try {
            const user=await signInWithEmailAndPassword(auth, signIn.email, signIn.password);
            setLoggedIn(true);
            setLoggedOut(true);
            navigate('/', {replace:true});
            console.log(user);
        } catch (error){
            setShowError(true);
            console.log(error.message);
        }
        
        

        console.log(signIn)
      
        
        
        e.preventDefault();
        
   }

   

    return(
        <div id="signUpBody">
            <div id="topLogo">
                <img src={netflix} alt="logo" />
            </div>
            <div id="signUpForm">
            {showError===true ? <p>Invalid Credentials</p> : null}
                
                <h1>Sign In</h1>
                <form id="myForm1">
                <TextField  onChange={handleChange} value={signIn.email} name="email"  placeholder="Enter your email address"  id="bgText1"></TextField>
                
                <div style={{color:"#ffffff", fontFamily: 'Roboto Slab', fontSize:"10px", fontWeight:"500", lineHeight:"5px"}}>{validation.email}</div>
                
                <TextField  onChange={handleChange} value={signIn.password} name="password" placeholder="Password"  id="bgText1"></TextField>
                
                <div style={{color:"#ffffff", fontFamily: 'Roboto Slab', fontSize:"10px", fontWeight:"500", lineHeight:"5px"}}>{validation.password}</div>
                
                <Button onClick={submitValue}  id="bgButton1" fullWidth={true}>Sign In</Button>
                </form>
                <div id="needHelp">
                <FormGroup id="checkboxGroup" >
                    <FormControlLabel  control={<Checkbox
                    checked={remember} onChange={handleCheck} sx={{color:'#ffffff', '&.Mui-checked': {
                        color: '#ffffff',
                    }, 
                    }}  />} label={<Typography sx={{fontSize:"12px", lineHeight:"normal",
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