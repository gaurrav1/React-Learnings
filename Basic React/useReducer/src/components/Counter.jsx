import { useReducer } from "react"

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
    PLUS_FIVE: "plusfive"
}

function reducer(state, action) {
    console.log(action)
    switch (action.type) {
        case ACTIONS.DECREMENT:
            return state - 1
        case ACTIONS.INCREMENT:
            return state + 1
        case ACTIONS.RESET:
            return 0
        case ACTIONS.PLUS_FIVE:
            return state + action.payload.value
        default:
            return state
    }
}

const Counter = ({ intialCount = 0 }) => {
    const [count, dispatch] = useReducer(reducer, intialCount, (count) => {
        return count + 1;
    });

    return (
      <>
        <button onClick={ () => dispatch( {type: ACTIONS.DECREMENT} )}> - </button>
        {count}
        <button onClick={ () => dispatch( {type: ACTIONS.INCREMENT} )}> + </button>
        <br /><br />
        <button onClick={ () => dispatch( {type: ACTIONS.RESET} )}>Reset</button>
        <button onClick={ () => dispatch( {type: ACTIONS.PLUS_FIVE, payload: { value: 5}} )}>+5</button>
      </>
    );
  };
  
  export default Counter