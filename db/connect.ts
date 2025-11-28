import * as SQLite from "expo-sqlite"

import { dbSchema } from "./schema"

export const db = SQLite.openDatabaseSync("app.db")

export function connectToDb() {
   db.execSync(dbSchema.createCustomerTable)
}