import { useContext } from "react";
import ProdcutsContext from "../context/ProductsProvider";
import { UseProductsContextType } from "../context/ProductsProvider";

const useProducts = (): UseProductsContextType => {
  return useContext(ProdcutsContext);
}

export default useProducts;