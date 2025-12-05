import { useProducts } from "@/app/hooks/use-products"
import { Text, View } from "react-native"
import { ProductCard } from "./card"

type CatalogueListProps = {
   search: string,
}

export function CatalogueList({ search }: CatalogueListProps) {
   const { getAll } = useProducts()

   const products = getAll(search)

   return (
      <View className="w-full flex gap-3 flex-col">
         <View className="border border-primary rounded-lg px-3 py-1">
            <Text className="color-primary">Granulados</Text>
         </View>

         <View className="flex flex-wrap gap-3">
            {products.map(product => (
               <ProductCard product={product} key={product.id} />
            ))}
         </View>
      </View>
   )
}