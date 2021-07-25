import React, { useState } from "react";
import Banner from "./components/banner";
import BlockTwo from "./components/block_two";
import CardsGroup from "./components/CardsGroup";
import * as Data from "./data.json";
import Footer from "./components/footer";
import BlockFour from "./components/block_four";
import Header from "./components/header";
import DataContext from "./store";

function App() {

  const [state,setState] = useState({
    banner   : {},
    persons  : Data.data,
    gridList : false,
  })

  let handler = (data) => setState({...state,...data});
  
  return (
    <DataContext.Provider value={{
      state,handler
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
