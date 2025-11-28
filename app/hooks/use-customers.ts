import { db } from "@/db/connect"

type Customer = {
   id: number,
   name: string,
   phone: string,
   email: string,
   password: string,
}

export function useCustomers() {
   async function createCustomer(name: string, email: string, phone: string, password: string) {
      const result = await db.runAsync(
         "INSERT INTO customers (name, email, phone, password) VALUES (?, ?, ?, ?);",
         [name, email, phone, password]
      )

      return result.lastInsertRowId
   }

   async function getCustomer(id?: string, email?: string) {
      if (!id && !email) throw new Error("getCustomer: Incorrect usage")
      
      const param = id ?? email
      const query = id 
         ? "SELECT * FROM customers WHERE id = ?"
         : "SELECT * FROM customers WHERE email = ?"

      const customer = await db.getFirstAsync(query, [param as string]) ?? null
      return customer as Customer | null
   }

   return { createCustomer, getCustomer }
}