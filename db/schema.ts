export const dbSchema = {
   createCustomerTable: `
      CREATE TABLE IF NOT EXISTS customers (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT NOT NULL,
         email TEXT NOT NULL,
         phone TEXT NOT NULL,
         password TEXT NOT NULL
      );
   `,
}