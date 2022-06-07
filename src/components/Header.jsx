import React from "react";
import Logo from "../media/images/netflix.png";
import {useNavigate} from "react-router-dom";

function Header(){
    const navigate=useNavigate();

    function OnClickNavigate(){
        navigate("signup", {replace:false});
    }

    return(
        <div className="header">
            <header>
                <img id="logoIMG"  src={Logo} alt='logo' />
                <button onClick={OnClickNavigate}>Sign In</button>
            </header>
        </div>
    )

}
export default Header;