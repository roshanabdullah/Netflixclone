import React from "react";
import Logo from "../media/images/netflix.png";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase-config";
import {signOut} from 'firebase/auth';

function Header({loggedIn, setLogged, loggedOut, setLoggedOutside}){
    const navigate=useNavigate();

    function OnClickNavigate(){
        navigate("signup", {replace:false});
       
        
    }
    const logout = async (e) =>{
        await signOut(auth);
        if(signOut(auth)){
            setLogged(false);
            setLoggedOutside(false);
        }
        
        e.preventDefault();

    }

    return(
        <div className="header">
            <header>
                <img id="logoIMG"  src={Logo} alt='logo' />
                {loggedIn ? null : (
                <button onClick={OnClickNavigate}>Sign In</button>
                )}
                {loggedOut ? (<button onClick={logout}>Sign Out</button>): null}
            </header>
        </div>
    )

}
export default Header;