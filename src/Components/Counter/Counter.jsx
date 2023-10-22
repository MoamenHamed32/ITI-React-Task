import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../Redux/counterSlice";
import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  const [inputValue, setInputValue] = useState(1);
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const handleIncrement = (value) => {
    dispatch(increment(value));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleInputChange = (e) => {
    if (e.target.value > 0) {
      setInputValue(e.target.value);
    }
  };

  return (
    <section id="counter">
      <div className="container">
        <div className="counter-btns d-flex justify-content-center align-items-center h-50">
          <button className="btn btn-danger " onClick={handleDecrement}>
            -
          </button>
          <p className="mx-3 fs-4 my-0">{count}</p>
          <button
            className="btn btn-success"
            onClick={() => handleIncrement(parseInt(inputValue))}
          >
            +
          </button>
        </div>
        <div className="add-by-amount d-flex justify-content-center align-items-center">
          <h3>Increase By :</h3>
          <input
            onChange={handleInputChange}
            className="amount-value"
            type="text"
            placeholder="value"
            value={inputValue}
          />
          <button
            className="btn btn-success"
            onClick={() => handleIncrement(parseInt(inputValue))}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
