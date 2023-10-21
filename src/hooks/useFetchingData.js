import { useEffect, useState } from "react";
import axios from "axios";

const useFetchingData = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts((prev) => [...prev, ...res.data]);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);
  console.log(products);
  return [products, error, isLoading];
};

export default useFetchingData;
