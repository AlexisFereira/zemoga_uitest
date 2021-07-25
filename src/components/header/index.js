import React, { useState } from "react";
import {HeaderStyle} from "./styles";

const Header = ()=>{

    const [open,setopen] = useState(false);
    
    return (
        <HeaderStyle className="p-3 text-end" open={open}>
           <div className="container-lg px-lg-0">
                <div className="row mx-0 px-0 justify-content-between">
                    <div className="name col-auto px-0">Rule of thumb.</div>
                    <div className="menu ">
                        <div className="row mx-0 p-0">
                            <a href="">Past trials</a>
                            <a href="">How it works</a>
                            <a href="">Login/Sign UP</a>
                            <button>
                                <em className="icon-search"></em>
                            </button>
                        </div>
                    </div>
                    <div className="col-auto d-lg-none menu-icon">
                        <button onClick={()=> setopen(!open)}> <em className="icon-hamburger"></em></button>
                    </div>
                </div>
           </div>
        </HeaderStyle>
    )
}

export default React.memo(Header);