import { ImageSourcePropType } from "react-native"

export type Product = {
   id: number,
   title: string,
   price: number,
   image: ImageSourcePropType,
}