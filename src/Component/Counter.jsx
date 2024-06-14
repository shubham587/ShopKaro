import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const clickHandler = () => {
    dispatch(counterAction.increment());
  };
  return (
    <div>
      {/* <input type="number" value={counter} name="" id="" />
      <button onClick={clickHandler}>add +</button> */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Counter;
