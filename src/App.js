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
    '“A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.” — George Bernhard Shaw',
    '"Today is gone. Today was fun. Tomorrow is another one." - Dr. Suess',
    '"Get busy living or get busy dying." -Suits & The Shawshank Redemption'
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
      
        <h1>A Collection of Quotes</h1>
        {quotes[selected]}

        <div>
          <Button function={()=>setSelected(getRandomInt(0,quotes.length))} text= "Next Quote"/>
        </div>
    </div>
      
  )
}

export default App
