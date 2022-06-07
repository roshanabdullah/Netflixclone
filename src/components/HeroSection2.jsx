import React from "react";
import TV from "../media/images/tv.png";

function HeroSection2(){

    return(
        <div className="Hero2">
            <div className="column1">
                <h1 className="hero2Heading1">Enjoy on your TV.</h1>
                <h1 className="hero2Heading2">Watch on Smart TVs, Playstation, Xbox,<br /> Chromecast, Apple TV, Blu-ray players, and<br /> more.</h1>
            </div>
            <div className="column2" >
                <img src={TV} alt="tv attribute" />
            </div>
        </div>
    )

}
export default HeroSection2;