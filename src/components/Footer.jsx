import React from "react";
import {Link} from "react-router-dom";

function Footer(){
    const country="Pakistan";

    return(
        <footer className="mainFooter">
            <div className="footer">
            <div className="linkColumn1">
                <ul>
                    <Link id="textDecor" to="/"><li>FAQ</li></Link>
                    <Link id="textDecor" to="/"><li>Investor Relations</li></Link>
                    <Link id="textDecor" to="/"><li>Privacy</li></Link>
                    <Link id="textDecor" to="/"><li>Speed Test</li></Link>
                </ul>
            </div>
            <div className="linkColumn1">
                <ul>
                    <Link id="textDecor" to="/"><li>Help Center</li></Link>
                    <Link id="textDecor" to="/"><li>Jobs</li></Link>
                    <Link id="textDecor" to="/"><li>Cookie Preferences</li></Link>
                    <Link id="textDecor" to="/"><li>Legal Notices</li></Link>
                </ul>
            </div>
            <div className="linkColumn1">
                <ul>
                    <Link id="textDecor" to="/"><li>Account</li></Link>
                    <Link id="textDecor" to="/"><li>Ways to Watch</li></Link>
                    <Link id="textDecor" to="/"><li>Corporate Information</li></Link>
                    <Link id="textDecor" to="/"><li>Only on Netflix</li></Link>
                </ul>
            </div>
            <div className="linkColumn1">
                <ul>
                    <Link id="textDecor" to="/"><li>Media Center</li></Link>
                    <Link id="textDecor" to="/"><li>Terms of Use</li></Link>
                    <Link id="textDecor" to="/"><li>Contact Us</li></Link>
                </ul>
            </div>
            </div>
            <div className="country">
                <div>
                    <p>Netflix {country}</p>
                </div>
               
            </div>
        </footer>

        
        
      
    )
}

export default Footer;