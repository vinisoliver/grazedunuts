import { Image } from "react-native"

import logo from "@/assets/logo.png"

export const Logo = () => {
   return (
      <Image source={logo} className="w-[180px] h-[51px]" resizeMode="contain" />
   )
} 