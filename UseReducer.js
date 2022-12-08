import { useReducer } from 'react';
import './App.css';

function App() {
const initState = 10;

const reducer = (state,action) => {
  if(action.type ==="Increase"){
    return state+1;
  }
  else if(action.type === "Decrease"){
    return state-1;
  }
}

  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <h2>Counter</h2>
      <code>{state}</code>
      <br/>
      <button onClick={()=> dispatch({type:"Increase"})}>Increase</button>
      <button onClick={()=> dispatch({type:"Decrease"})}>Decrease</button>
    </div>
  );
}

export default App;
