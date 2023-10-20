import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  let [count, setCount] = useState(0);
  const increaseCounter = () => {
    setCount(++count);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(--count);
    }
  };
  return (
    <section id="counter">
      <div className="container d-flex justify-content-center align-items-center ">
        <button className="btn btn-danger " onClick={decreaseCount}>
          -
        </button>
        <p className="mx-3 fs-4 my-0">{count}</p>
        <button className="btn btn-success" onClick={increaseCounter}>
          +
        </button>
      </div>
    </section>
  );
}
