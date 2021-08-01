import React, { useContext } from 'react';
import {Container} from "./styles";
import Card from './card';
import DataContext from '../../store';


const CardsGroup = () => {
    
    let state = useContext(DataContext);
    let {persons,gridList} =  state.state;
    let {handler } = state; 
    console.log(persons)
    
    return ( 
        <Container 
            className="container-lg px-3 px-md-4 px-lg-0" 
            mw={ persons.length * 314}
            grid={gridList === "true"}
        >
            <div className=" pb-3 pb-md-4 title row mx-0 justify-content-between">
                <div className="col-auto px-0">
                    Previous Rulings
                </div> 
                <div className="col-auto handler-grid d-none d-md-block"> 
                    <select value={gridList} name="" id="" onChange={({target})=> handler({gridList:target.value})}>
                        <option value={false}>List</option>
                        <option value={true}>Grid</option>
                    </select>
                 </div>    
            </div>
           <div className={"row-cards py-2 row"}>
                <div className="track-cards">
                {persons.map((item,index)=> 
                    <div key={index} className="cont-card">
                        <Card data={item} />
                    </div>
                )}
                </div>
           </div>
        </Container>     
     );
}
 
export default CardsGroup;