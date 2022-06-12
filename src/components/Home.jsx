import React, {useState} from "react";
import Header from "./Header";
import Hero from "./Hero";
import '../App.css';
import '../MediaQuery.css';
import HeroSection2 from "./HeroSection2";
import HeroSection3 from "./HeroSection3";
import HeroSection4 from "./HeroSection4";
import HeroSection5 from "./HeroSection5";
import FAQ from "./FAQ";
import Footer from "./Footer";

function Home({isloggedIn, setLoggedIn, isloggedOut, setLoggedOut}){
    

    return(
        <div className="Home">
            <Header loggedIn={isloggedIn} setLogged={setLoggedIn} loggedOut={isloggedOut} setLoggedOutside={setLoggedOut} />
            <Hero />
            <hr/>
            <HeroSection2 />
            <hr />
            <HeroSection3 />
            <hr />
            <HeroSection4 />
            <hr />
            <HeroSection5 />
            <hr />
            <FAQ />
            <hr />
            <Footer />
        </div>
    )
}

export default Home;