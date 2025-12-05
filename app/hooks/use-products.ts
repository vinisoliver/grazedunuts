import { productsMock } from "../mocks/products"

export function useProducts() {
   function getAll(search: string = "") {
      return productsMock.filter(p => p.title.includes(search))
   }

   function getOne(id: number) {
      return productsMock.find(p => p.id ===  id)
   }

   return { getAll, getOne }
}