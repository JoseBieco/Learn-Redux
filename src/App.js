import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>Counter = {counter}</p>
      <button onClick={() => {dispatch(increment())}} >+</button>
      <button onClick={() => {dispatch(decrement())}} >-</button>
    </div>
  );
}

export default App;
