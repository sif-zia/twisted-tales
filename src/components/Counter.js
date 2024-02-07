import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
};

export default Counter;
