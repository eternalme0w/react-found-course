import React, {useState} from "react";
import "./styles/App.css";
import Counter from "./components/Counter";
import Post from "./components/Post";



function App() {


  return (

    <div className="App">
      
        <Post post={{id: 1, title: "JavaScript", body: "Description"}}/>
    
    </div>
    
  );
}


export default App;
