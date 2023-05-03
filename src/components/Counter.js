import React, { useState } from 'react'

export default function Counter({initialValue}) {
    const [count, setCount] = useState(initialValue??0);

    const handleIncrement = () =>{
        setCount((prevCount) => prevCount+1);
    }

    const handleDecrement = () => {
        setCount((prevCount) => prevCount-1);
    }

  return (
    <div>
        <h1>Counter</h1>
        <h4>{count<0?"Negative numbers NOT ALLOWED":count}</h4>
        <button data-testid = "addition" onClick={handleIncrement}>Add</button>
        <button data-testid = "subtraction" onClick={handleDecrement}>Subtract</button>
    </div>
  )
}

