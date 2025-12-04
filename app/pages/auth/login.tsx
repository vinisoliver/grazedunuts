import { Text, View } from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"

import { useAuth } from "@/app/hooks/use-auth"

import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Container } from "@/components/container"
import { Link } from "@/components/link"
import { Logo } from "@/components/logo"

type Field = {
   value: any,
   error?: string,
}

export default function LoginPage() {
   const router = useRouter()
   const { login } = useAuth()

   const [email, setEmail] = useState<Field>({ value: "" })
   const [password, setPassword] = useState<Field>({ value: "" })

   async function handleLogin() {
      const missingFieldMsg = "Este campo precisa ser preenchido."

      if (!email.value) 
         return setEmail({ value: email.value, error: missingFieldMsg })
      if (!password.value) 
         return setPassword({ value: password.value, error: missingFieldMsg })

      const result = await login({ 
         email: email.value, 
         password: password.value
      })

      if (!result.success) {
         return setPassword({ value: password.value, error: "E-mail ou senha incorretos." })
      }

      router.push("/pages/protected/store/catalogue")
   }
   
   return (
      <Container className="justify-center items-center">
         <Logo />

         <Text className="font-title text-foreground">Entrar em uma conta</Text>

         <View className="w-full items-center gap-6">
            <View className="w-full items-center gap-5">
               <Input 
                  label="E-mail" 
                  placeholder="joaosilva@exemplo.com" 
                  value={email.value}
                  keyboardType="email-address"
                  onChangeText={(value) => setEmail({ value })}
                  error={email.error}
               />
               <Input 
                  label="Senha" 
                  placeholder="Digite sua senha"
                  secureTextEntry
                  value={password.value}
                  onChangeText={(value) => setPassword({ value })}
                  error={password.error}
               />
            </View>

            <Button 
               type="primary"
               onPress={handleLogin}
            >
               Entrar
            </Button>

            <Link href="/pages/auth/register">
               Não tem uma conta? Clique aqui
            </Link>
         </View>
      </Container>
   )
}