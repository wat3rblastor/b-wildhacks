
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const getDatabase = async () => {
      return await open({
        filename: "./collection.db",
        driver: sqlite3.Database,
      });
}
