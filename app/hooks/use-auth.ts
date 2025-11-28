import * as SecureStore from "expo-secure-store"

import { useCustomers } from "./use-customers"

type RegisterDTO = {
   name: string,
   email: string,
   phone: string,
   password: string,
}

type LoginDTO = {
   email: string,
   password: string,
}

const TOKEN_KEY = "auth_token"

const generateToken = (customerId: string) => {
   return `token-${customerId}-${Date.now()}`
}

export function useAuth() {
   const { createCustomer, getCustomer } = useCustomers()

   async function register({ name, email, phone, password }: RegisterDTO) {
      const customer = await getCustomer(undefined, email)
      if (customer) return { success: false }

      const customerId = await createCustomer(name, email, phone, password)
      if (!customerId) throw new Error("createCustomer: An internal error occoured.")

      const token = generateToken(String(customerId))
      await SecureStore.setItemAsync(TOKEN_KEY, token)

      return { success: true }
   }

   async function login({ email, password }: LoginDTO) {
      const customer = await getCustomer(undefined, email)
      if (!customer || customer.password !== password) return { success: false }

      const token = generateToken(String(customer.id))
      await SecureStore.setItemAsync(TOKEN_KEY, token)

      return { success: true }
   }

   async function logout() {
      await SecureStore.deleteItemAsync(TOKEN_KEY)
   }

   async function authorize() {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)
      if (!token) return { authorized: false }
      
      const [_, customerId, timestampStr] = token.split("-")

      const timestamp = parseInt(timestampStr, 10)
      const now = Date.now()
      const TOKEN_EXPIRATION_MS = 1000 * 60 * 60
      
      if ((now - timestamp) > TOKEN_EXPIRATION_MS) {
         await logout()
         return { authorized: false }
      }

      return { authorized: true, customerId }
   }

   return { register, login, logout, authorize }
}