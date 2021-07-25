import React, { useContext } from "react";
import {Container} from "./styles";
import moment from "moment";
import DataContext from "../../../store";


const Card = (props)=>{

    let mainState  =  useContext(DataContext);
    let {gridList} =  mainState.state;
    let {handler}  =  mainState.handler;

    let {data} = props;
    let {description,name,lastUpdated,category} = data;
    let picture = `img/photos/${data.picture}`;

    let dateAgo = moment().diff(lastUpdated, 'days');
    let year  = 366;
    let month = 30;
    let week  = 7;
    
    function calculateTime(time){
        if(time > year){
            if(time > year * 2) return `${(time/year).toFixed.toFixed()} years`;
            return  `1 year`;
        }
        else if(time > month){
            if(time > month * 2) return `${(time/month).toFixed()} months`;
            return  `1 month`;
        }
        else if(time > week ){
            if(time > week * 2) return `${(time/week).toFixed()} weeks`;
            return  `1 week`;
        }
        else{
            if(time > 1) return `${time} days`;
            return  `1 day`;
        }
    }

    dateAgo = calculateTime(dateAgo);
        

    let ranges = {
        green:40,
        orange:60,
    }

    let largest = ranges.green >= 50 ? 'up':'down';
    
    return (
      <Container 
        bg={picture} 
        ranges={ranges} 
        className="row mx-0 p-0 flex-column justify-content-end"
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
                        <p className="description mb-2">{description}</p>
                    </div>
                    <div className="btns-vote">
                        <small> {dateAgo} in {category}</small>
                        <div className="col-12 py-3 row mx-0 px-0 justify-content-end">
                            <button className="vote-green">
                                <em className="icon-thumbs-up"></em>
                            </button>
                            <button className="vote-orange">
                                <em className="icon-thumbs-down"></em>
                            </button>
                            <button className="button-vote px-2">
                                vote Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="range-votations row m-0 p-0  position-relative">
                <div className="py-1 green"> <em className="icon-thumbs-up"></em> {ranges.green} %</div>
                <div className="py-1 orange">  {ranges.orange}% <em className="icon-thumbs-down"></em></div>
            </div>
      </Container>
    )
}

export default React.memo(Card);