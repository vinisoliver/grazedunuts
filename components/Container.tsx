import { ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
  children: React.ReactNode,
  className?: string,
} & ViewProps

export const Container = ({ children, className, ...props }: Props) => {
  return (
    <SafeAreaView className={`flex flex-1 px-6 mt-12 mb-6 gap-9 ${className}`} {...props}>
      {children}
    </SafeAreaView>
  )
}