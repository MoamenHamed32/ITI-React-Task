import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import ProductDetails from "./Components/Product-Details/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/shop/:name/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
