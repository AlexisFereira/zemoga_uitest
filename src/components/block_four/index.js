import React from 'react';
import {Container} from "./styles.js";

const BlockFour = () => {
    return ( 
        <div className="container-lg p-3 py-md-4 px-md-4 px-lg-0">
            <Container className="p-3 p-md-4 text-center" bg={'img/Rectangle.png'}>
                <div className="position-relative row mx-0">
                    <h2 className="col-md text-md-start">Is there anyone else you would want us to add ?</h2>
                    <button> Submit a name </button>
                </div>
            </Container>
        </div>
     );
}
 
export default BlockFour;