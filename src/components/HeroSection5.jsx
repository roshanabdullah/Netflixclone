import React from "react";
import kids from "../media/images/kids.png";


function HeroSection5(){
    return(
        <div className="Hero5">
            <div className="column5">
                <img src={kids} alt="kids attribute" />
            </div>
            <div className="column6">
                <h1 className="hero5Heading1">Create profiles for kids.</h1>
                <h1 className="hero5Heading2">Send kids on adventures with their favorite<br /> characters in a space made just for them—<br />free with your membership.</h1>

            </div>
        </div>
    )
}

export default HeroSection5;