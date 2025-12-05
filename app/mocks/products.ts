import { Product } from "../types/product"

import dunut_azul from "@/assets/products/dunut-azul.jpeg"
import dunut_marrom from "@/assets/products/dunut-marrom.jpeg"
import dunut_amarelo from "@/assets/products/dunut-amarelo.jpeg"
import dunut_verde from "@/assets/products/dunut-verde.jpeg"
import dunut_rosa from "@/assets/products/dunut-rosa.jpeg"

export const productsMock: Product[] = [
   {
      id: 0,
      title: "Dunut com Cobertura de Mertilo",
      price: 7.90,
      image: dunut_azul,
   },
   {
      id: 1,
      title: "Dunut com Cenoura e Cobertura de Choolate",
      price: 8.90,
      image: dunut_marrom,
   },
   {
      id: 2,
      title: "Dunut com Laranja e Cobertura de Maracujá",
      price: 6.99,
      image: dunut_amarelo,
   },
   {
      id: 3,
      title: "Dunut com Cobertura de Limão",
      price: 5.49,
      image: dunut_verde,
   },
   {
      id: 4,
      title: "Dunut com Cobertura de Morango",
      price: 5.49,
      image: dunut_rosa,
   },
]