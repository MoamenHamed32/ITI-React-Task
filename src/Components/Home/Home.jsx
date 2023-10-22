import { useSelector } from "react-redux/es/hooks/useSelector";
import "./Home.css";
export default function Home() {
  const count = useSelector((state) => state.counter.counter);
  return (
    <section
      id="home"
      className="d-flex justify-content-center align-items-center"
    >
      <h1>Counter is : {count}</h1>
    </section>
  );
}
