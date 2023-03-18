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