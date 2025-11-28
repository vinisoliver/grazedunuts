import { Link as ExpoLink, Href } from "expo-router"
import { forwardRef } from "react"
import { Text, TouchableOpacity, type TouchableOpacityProps } from "react-native"

type Props = {
   href: Href,
   children: React.ReactNode,
   linkClassName?: string,
   containerClassName?: string,
} & TouchableOpacityProps

export const Link = forwardRef<React.ComponentRef<typeof TouchableOpacity>, Props>((
   { href, children, linkClassName, containerClassName, ...props }, ref
) => {
   return (
      <ExpoLink href={href} asChild>
         <TouchableOpacity ref={ref} className={containerClassName} {...props}>
            <Text className={`font-paragraph text-primary ${linkClassName}`}>
               {children}
            </Text>
         </TouchableOpacity>
      </ExpoLink>
   )
})