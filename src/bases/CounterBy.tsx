import { useState } from 'react'

interface Props {
    initialValue?: number,
    clicks?: number,
}

export const CounterBy = ({ initialValue = 5 } : Props) => {
    const [counterState, setCounter] = useState({ 
      counter: initialValue,
      clicks: 0,
    })

    const handleClick = (value = 1) => {
        setCounter(prev => ({
          counter: prev.counter + value,
          clicks: prev.clicks + 1,
        })
        )
    }
  
    return (
      <>
        <h1>Counter By: { counterState.counter }</h1>
        <h1>Clicks: { counterState.clicks }</h1>

        <button onClick={ () => handleClick() }> +1 </button>
        <button onClick={ () => handleClick(5) }> +5 </button>
      </>
  );

};
