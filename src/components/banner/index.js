import React from "react";
import {Container} from "./styles";
import pope from "./../../images/pope-francis.@2x.png"

const Banner = (props) => {

    return ( 
        <Container bg={pope}>
            <div className="shadow-up "></div> 
            <div className="container-lg px-0">
            <div className="content p-3 position-relative py-md-4 px-lg-0">
                <div className="cont-text ">
                    <div className="wrapper-text row mx-0">
                        <div className="blur"></div>
                        <div className="text py-3 p-md-4">
                            <p className="mb-2">What’s your opinion on</p>
                            <h1>Pope Francis?</h1>
                            <p>
                            He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
                            </p>
                            <div className="row p-0 mb-3 text-start link">
                                <a href="#dasfgsdf"> <em className="icon-wikipedia me-3 "></em> <small>More information</small> </a>
                            </div>
                            <strong>What’s Your Veredict?</strong>  
                        </div> 
                    </div>
                    <div className="row votations mx-0">
                        <button className="col-6 green">
                            <em className="icon-thumbs-up"></em>
                        </button>
                        <button className="col-6 orange">
                        <em className="icon-thumbs-down"></em>
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div className="row bar-white align-items-center">
                <div className="closing py-1 py-sm-2 py-md-3">CLOSING IN</div>
                <div className="number">
                    <strong>22</strong>  days
                    <div className="arrow"></div>
                </div>
            </div>
        </Container>
     );
}
 


export default React.memo(Banner);