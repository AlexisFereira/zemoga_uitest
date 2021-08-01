import React, { useContext, useState } from "react";
import {Container} from "./styles";
import moment from "moment";
import DataContext from "../../../store";
import * as helper from "./helpers";


const Card = (props)=>{

    let mainState  =  useContext(DataContext);
    let [localState,setLS] = useState({
        thumbSelected: "",
        voted: false
    });
    
    let {gridList} =  mainState.state;
    let {updateVotes}  =  mainState;
    let {calculateTime,convertPorcent} = helper;

    let {data} = props;
    let {description,name,lastUpdated,category} = data;
    let picture = `img/photos/${data.picture}`;

    let dateAgo = moment().diff(lastUpdated, 'days');

    dateAgo = calculateTime(dateAgo);
        
    let {positive,negative} = data.votes;
    let total = positive + negative;

    let ranges = {
        green:convertPorcent(total,positive),
        orange:convertPorcent(total,negative)
    }

    let voting =()=> {
        if(!localState.voted)
           updateVotes(name,localState.thumbSelected);
        setLS({
            ...localState,
            voted:!localState.voted, 
            thumbSelected: ''
        })
    }

    let largest = ranges.green >= 50 ? 'up':'down';
    
    return (
      <Container 
        bg={picture} 
        ranges={ranges} 
        className="row mx-0 p-0 flex-column justify-content-end"
        thumb={localState.thumbSelected}
        grid={gridList === "true"}
      >
            <div className="sombra"></div>
            <div className="cont row m-0 p-0 position-relative">
                <div className="thumb text-center p-0"> 
                    <em className={`icon-thumbs-${largest}`}></em>
                </div>
                <div className="text row mx-0">
                    <div className="text-area ">
                        <h2>{name}</h2>
                        <p className="description mb-2">{ description}</p>
                    </div>
                    <div className="btns-vote">
                        <small> 
                            {!localState.voted ? 
                            `${dateAgo} in ${category}`:
                            'Thank you for your vote!'
                            }    
                        </small>
                        <div className="col-12 py-3 row mx-0 px-0 justify-content-end align-items-center">
                            {!localState.voted &&
                                <>
                                <button
                                    className="vote-green" 
                                    onClick={()=> setLS({...localState, thumbSelected:'positive'})}
                                >
                                    <em className="icon-thumbs-up"></em>
                                </button>
                                <button 
                                    className="vote-orange" 
                                    onClick={()=> setLS({...localState, thumbSelected:'negative'})}
                                >
                                    <em className="icon-thumbs-down"></em>
                                </button>
                                </>
                            }
                            <button 
                                className="button-vote px-2" 
                                disabled={!localState.thumbSelected && !localState.voted}
                                onClick={()=> voting()}
                            >
                                {localState.voted ? 'Vote Again' : 'Vote Now'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="range-votations d-flex position-relative">
                <div className="colors">
                    <div className="py-1 green"> </div>
                    <div className="py-1 orange">  </div>
                </div>
                
                <span><em className="icon-thumbs-up"></em> {ranges.green} %</span>
                <span>{ranges.orange}% <em className="icon-thumbs-down"></em></span>
            </div>
      </Container>
    )
}

export default React.memo(Card);