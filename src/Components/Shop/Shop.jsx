import useFetchingData from "../../hooks/useFetchingData";
import ProductsList from "../Products-List/Products-List";
import Loading from "../Loading/Loading";

export default function Shop() {
  const [products, error, isLoading] = useFetchingData();
  console.log(useFetchingData());
  console.log(products);

  return (
    <Loading loading={isLoading} error={error}>
      <ProductsList products={products} />
    </Loading>
  );
}
