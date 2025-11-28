import { forwardRef } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'

type Props = {
  children: string,
  type: "destructive" | "primary" | "secondary" | "light",
} & TouchableOpacityProps 

export const Button = forwardRef<View, Props>(({ children, type, ...touchableProps }, ref) => {
  let styles
  switch (type) {
    case "destructive": styles = variants.destructive 
    break;
    case "primary": styles = variants.primary 
    break;
    case "secondary": styles = variants.secondary
    break;
    case "light": styles = variants.light
    break;
  }

  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`
        h-[36px] w-full items-center justify-center rounded-lg
        ${styles.button} ${touchableProps.className}
      `}>
      <Text className={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
})

Button.displayName = 'Button'

const variants = {
  destructive: {
    button: 'bg-unavailable-light',
    text: 'text-unavailable font-paragraph',
  },
  primary: {
    button: 'bg-primary',
    text: 'text-background font-paragraph',
  },
  secondary: {
    button: 'bg-secondary-primary',
    text: 'text-background font-paragraph',
  },
  light: {
    button: 'bg-secondary-background',
    text: 'text-primary font-paragraph',
  },
}
