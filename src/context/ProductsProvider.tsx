import { createContext, ReactElement, useState } from "react"

export type ProductType = {
  sku: string,
  name: string,
  price: number
}

const initState: ProductType[] = [
  {
    "sku": "item 1",
    "name": "Widget",
    "price": 9.99
  },
  {
    "sku": "item 2",
    "name": "Premium Widget",
    "price": 19.99
  },
  {
    "sku": "item 3",
    "name": "Deluxe Widget",
    "price": 29.99
  }
]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProdcutsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  return (
    <ProdcutsContext.Provider value={{ products }}>
      {children};
    </ProdcutsContext.Provider>
  )
}

export default ProdcutsContext