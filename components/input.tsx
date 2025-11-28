import React, { forwardRef } from "react"
import { TextInput, TextInputProps, Text, View } from "react-native"

type Props = {
  label?: string,
  error?: string,
  required?: boolean,
  containerClassName?: string,
  inputClassName?: string,
} & TextInputProps

export const Input = forwardRef<TextInput, Props>(({ 
   label, required = true, error, containerClassName = "", inputClassName = "", ...textInputProps 
}, ref) => {
   return (
   <View className={`w-full flex-col gap-[6px] ${containerClassName}`}>
      {label && (
         <Text className="font-label text-foreground">
            {label}
            {required && (<Text className="font-label text-primary">*</Text>)}
         </Text>
      )}

      <View
         className={`
            flex-row items-center rounded-lg border px-3 h-[36px]
            ${error ? "border-unavailable" : "border-secondary"}
         `}
      >
         <TextInput
            ref={ref}
            className={`flex-1 font-paragraph p-0 ${inputClassName}`}
            placeholderTextColor="#E5E7EB"
            {...textInputProps}
         />
      </View>

      {error && (
         <Text className="text-unavailable font-label">{error}</Text>
      )}
   </View>
   )
})