import './index.css'

import { useState } from 'react'

function Prompt(props){

    const [initialPromptValue, setInitialPromptValue] = useState(0)
    
    function simple (){
        const givenValue = prompt("How old are you?")  
        setInitialPromptValue(givenValue)
    }
    
    return (
        <div>
            <p>{initialPromptValue}</p>
            <button 
            onClick={() => simple()}>prompt</button>
            </div>
    )
}
function Counter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Increase
        </button>  
        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>
      </div>
    );
  }

  

export {Prompt, Counter};