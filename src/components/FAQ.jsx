import React, {useState, useEffect} from "react";
import {config, styles} from "./FAQdata";
import data from "./FAQdata";
import Faq from "react-faq-component";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function FAQ(){
   
    const [rows, setRowsOption] = useState(null);

    useEffect(() => {
        if (rows) {
            setTimeout(() => {
                rows[0].expand();
            }, 2500);

            setTimeout(() => {
                rows[0].close();
            }, 5000);

            setTimeout(() => {
                rows[0].scrollIntoView();
                // rows[0].scrollIntoView(true);
            }, 10000);
        }
    }, [rows]);
  

  
    
    return(
        <div className="FAQ">
            <div>
                <h1 className="faqHeading">Frequently Asked Questions</h1>
            </div>
            <div className="faq-style-wrapper">
                <Faq data={data} styles={styles} config= {config} getRowOptions={setRowsOption} />
            </div>
            <div className="faqGetStarted">
                <h1 className="getStartedPara">Ready to watch? Enter your email to create or restart your membership.</h1>
            </div>
            <div id="emailDiv">
                <TextField style={{width:"500px"}} color="primary" placeholder="Email Address" id="fullWidth" />
                <Button  id="heroButton"  variant="outlined">Get Started</Button>
            </div> 

        </div>
    )
}
export default FAQ;