import { useReducer } from 'react'
import { CounterState } from './interfaces/interfaces'
import { counterReducer } from './state/counterReducer';
import * as actions from './actions/actions';

const INITIAL_STATE : CounterState  = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const CounterReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
      dispatch( actions.doReset() )
    }
  
    const handleIncreaseBy = (value: number) => {
      dispatch( actions.doIncreaseBy(value) )
    }
    return (
      <>
        <h1>Counter Reducer Module: { state.counter }</h1>
        <pre>
         {JSON.stringify(state)} 
        </pre>

        <button onClick={() => handleIncreaseBy(1) }>  +1  </button>
        <button onClick={() => handleIncreaseBy(5) }>  +5  </button>
        <button onClick={() => handleIncreaseBy(10)}> +10 </button>

        <button onClick={ handleReset }> Reset </button>
      </>
  );

};
