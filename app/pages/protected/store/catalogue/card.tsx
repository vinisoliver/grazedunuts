import { Product } from "@/app/types/product"
import { PlusIcon } from "lucide-react-native"
import { Image, Text, View } from "react-native"

type ProductCardProps = {
   product: Product,
}

export function ProductCard({ product }: ProductCardProps) {
   return (
      <View className="flex flex-col rounded-lg overflow-hidden">
         <View className="flex gap-[2px]">
            <Image 
               source={product.image} 
               resizeMode="contain"
               className="w-[156px] rounded-lg"
               />
         </View>

         <View className="flex flex-col p-3 gap-2">
            <Text className="font-semibold color-foreground text-[14px] w-full">
               {product.title}
            </Text>
            <View className="w-full justify-between">
               <Text className="color-foreground text-[14px]">
                  {product.price}
               </Text>
               <PlusIcon fontWeight={1.5} />
            </View>
         </View>
      </View>
   )
}