import React from "react";
import mobile from "../media/images/mobile.jpg";


function HeroSection3(){

    return(
        <div className="Hero3">
            <div className="column3">
                <img src={mobile} alt="mobile netflix" />
            </div>
            <div className="column4">
                <h1 className="hero3Heading1">Download your shows<br /> to watch offline.</h1>
                <h1 className="hero3Heading2">Save your favorites easily and always have<br /> something to watch.</h1>
            </div>
        </div>
    )

}
export default HeroSection3;