import { useState } from 'react'
import "./App.css";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.function} className="App-button"> {props.text} </button>
    </div>
  )
}


const App = () => {
  const quotes = [
    '"More tea, please!" - Uncle Iroh, Avatar the Last Airbender',
    '"Delight is like the butterflies flying around and landing on the flower that is joy." -Ross Gay, This American Life',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let final= Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    while(final===selected){
      final= Math.floor(Math.random() * (max - min) + min);
    }
    return final;
  }

  return (
    <div className= "App-header">
      
        <h1>Quote of the Day</h1>
        {quotes[selected]}

        <div>
          <Button function={()=>setSelected(getRandomInt(0,quotes.length))} text= "Next Quote"/>
        </div>
    </div>
      
  )
}

export default App