import React from 'react';
import {Container} from "./styles.js"

const Footer = () => {
    return ( 
         <Container className={"px-3 px-md-4"}>
             <div className="container-lg px-md-0 py-3">
                <div className="row align-items-center">
                    <div className="links row mx-0">
                        <a href="#dfgsd">Terms and Conditions</a>
                        <a href="#dfg">Privacy Policy</a>
                        <a href="#dfgdf">Contact Us</a>
                    </div>    
                    <div className="social">
                        <small>Follow is</small>
                        <button> <em className={"icon-facebook"}></em></button>
                        <button> <em className={"icon-twitter"}></em></button>
                    </div>
                </div>   
             </div>
         </Container>
     );
}
 
export default Footer;