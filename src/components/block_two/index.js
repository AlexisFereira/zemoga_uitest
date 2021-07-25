import React from "react";
import { Container } from "./styles";

const BlockTwo = ()=> {
    return(
    <div className="container-lg p-3 p-md-4 px-lg-0">
        <Container className="p-3">
                <div className="row align-items-center">
                    <div className="col-auto  text-center">
                        <p className="mb-0">Speak out. Be heard. </p>
                        <h2>Be counted</h2>
                    </div>
                    <div className="col">
                        <p className="mb-0 paragraph ">
                            Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
                        </p>
                    </div>
                </div>
        </Container>  
    </div>   
    )
}

export default React.memo(BlockTwo);