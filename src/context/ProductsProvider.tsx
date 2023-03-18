import { createContext, ReactElement, useState, useEffect } from "react"

export type ProductType = {
  sku: string,
  name: string,
  price: number
}

const initState: ProductType[] = [];


// const initState: ProductType[] = [
//   {
//     "sku": "item 1",
//     "name": "Widget",
//     "price": 9.99
//   },
//   {
//     "sku": "item 2",
//     "name": "Premium Widget",
//     "price": 19.99
//   },
//   {
//     "sku": "item 3",
//     "name": "Deluxe Widget",
//     "price": 29.99
//   }
// ]

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProdcutsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch('http://localhost:3500/products')
        .then(res => {
          return res.json()
        })
        .catch(err => {
          if (err instanceof Error) console.log(err.message)
        }
        )
      return data;
    }

    fetchProducts().then(products => setProducts(products))
  }, [])

  return (
    <ProdcutsContext.Provider value={{ products }}>
      {children};
    </ProdcutsContext.Provider>
  )
}

export default ProdcutsContext