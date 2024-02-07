import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../slices/counterSlice";

const Counter2 = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default Counter2;
