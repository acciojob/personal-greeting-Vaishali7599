
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  return (
    <div>
         <label>Enter your name:</label>
            <br></br>
            <br></br>
            <input
                type='text'
                value={name}
                onChange={(e) => {setName(e.target.value)}}
            />
            <br></br>
            {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
