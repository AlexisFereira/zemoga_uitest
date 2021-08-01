import React, { useEffect, useState } from "react";
import Banner from "./components/banner";
import BlockTwo from "./components/block_two";
import CardsGroup from "./components/CardsGroup";
import * as Data from "./data.json";
import Footer from "./components/footer";
import BlockFour from "./components/block_four";
import Header from "./components/header";
import DataContext from "./store";
import moment from "moment";

function App() {

  const [state,setState] = useState({
    banner   : {},
    persons  : [],
    gridList : false,
  })

  let DP = "dataPersons";
 
  let handler = (data) => setState({...state,...data});

  let setData = (data) => {
    sessionStorage.setItem(DP,JSON.stringify(data));
    handler({persons:data});
  }

  let updateVotes = (name,vote)=>{
    let newData = state.persons.map((item)=>{
      if(item.name === name ){
        item.votes[vote] = item.votes[vote] + 1
        item.lastUpdated = moment();
        }
      
        return item;
    })
    setData(newData);
  }

  useEffect(()=>{
    if(sessionStorage.getItem(DP)){
      let dataPersons = JSON.parse(sessionStorage.getItem(DP));
      handler({persons:dataPersons});
    }
    else setData(Data.data);
  },[])
  
  return (
    <DataContext.Provider value={{
      state,handler,updateVotes
    }}>
      <div className="App">
        <Header/>
        <Banner/>
        <BlockTwo  />
        <CardsGroup />
        <BlockFour/> 
        <Footer/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
