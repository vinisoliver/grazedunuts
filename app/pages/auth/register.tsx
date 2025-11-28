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

export default function RegisterPage() {
   const router = useRouter()
   const { register } = useAuth()

   const [name, setName] = useState<Field>({ value: "" })
   const [email, setEmail] = useState<Field>({ value: "" })
   const [phone, setPhone] = useState<Field>({ value: "" })
   const [password, setPassword] = useState<Field>({ value: "" })
   const [confirmPassword, setConfirmPassword] = useState<Field>({ value: "" })

   async function handleRegister() {
      const missingFieldMsg = "Este campo precisa ser preenchido."

      if (!name.value) 
         return setName({ value: name.value, error: missingFieldMsg })
      if (!email.value) 
         return setEmail({ value: email.value, error: missingFieldMsg })
      if (!phone.value) 
         return setPhone({ value: phone.value, error: missingFieldMsg })
      if (!password.value) 
         return setPassword({ value: password.value, error: missingFieldMsg })
      if (!confirmPassword.value) 
         return setConfirmPassword({ value: confirmPassword.value, error: missingFieldMsg })

      if (password.value !== confirmPassword.value)
         return setConfirmPassword({ value: confirmPassword.value, error: "As senhas devem ser iguais." })

      const result = await register({ 
         name: name.value,
         email: email.value, 
         phone: phone.value, 
         password: password.value
      })

      if (!result.success) {
         return setEmail({ value: email.value, error: "Já existe um cliente com este email" })
      }

      router.push("/pages/store/catalogue")
   }
   
   return (
      <Container className="justify-center items-center">
         <Logo />

         <Text className="font-title text-foreground">Cadastrar uma conta</Text>

         <View className="w-full items-center gap-6">
            <View className="w-full items-center gap-5">
               <Input 
                  label="Nome" 
                  placeholder="João da Silva"
                  value={name.value}
                  onChangeText={(value) => setName({ value })}
                  error={name.error}
               />
               <Input 
                  label="E-mail" 
                  placeholder="joaosilva@exemplo.com" 
                  value={email.value}
                  keyboardType="email-address"
                  onChangeText={(value) => setEmail({ value })}
                  error={email.error}
               />
               <Input 
                  label="Telefone" 
                  placeholder="99 99999-9999" 
                  value={phone.value}
                  keyboardType="phone-pad"
                  onChangeText={(value) => setPhone({ value })}
                  error={phone.error}
               />
               <Input 
                  label="Senha" 
                  placeholder="Uma senha forte"
                  secureTextEntry
                  value={password.value}
                  onChangeText={(value) => setPassword({ value })}
                  error={password.error}
               />
               <Input 
                  label="Confirme a senha" 
                  placeholder="A mesma senha forte" 
                  secureTextEntry
                  value={confirmPassword.value}
                  onChangeText={(value) => setConfirmPassword({ value })}
                  error={confirmPassword.error}
               />
            </View>

            <Button 
               type="primary"
               onPress={handleRegister}
            >
               Criar conta
            </Button>

            <Link href="/pages/auth/login">
               Já tem uma conta? Clique aqui
            </Link>
         </View>
      </Container>
   )
}