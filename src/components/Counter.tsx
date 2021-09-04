import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { counterReducer } from '../store/index.js'

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    // dispatch(function)
    console.log("");
  };
  const toggleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const toggleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <button onClick={toggleIncrement}>Increment</button>
      <button onClick={toggleDecrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </div>
  );
};

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default Counter;
