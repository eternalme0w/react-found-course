import React, {useState} from "react";



function App() {

  const [str, setStr] = useState('zxc');   

  return (

    <div className="App">
      
      <h1>{str}</h1>

      <input 

        type="text"
        value={str}
        onChange={event => setStr(event.target.value)}
        
      />

    </div>
    
  );
}

export default App;
