import dotenv from "dotenv";

dotenv.config();

const databaseUrl: string | undefined = process.env.DATABASE_URL;
const apiKey: string | undefined = process.env.API_KEY;
const port: string | undefined = process.env.PORT;

if (!databaseUrl) {
  throw new Error("DATABASE_URL não foi definida");
}

if (!apiKey) {
  throw new Error("API_KEY não foi definida");
}

if (!port) {
  throw new Error("PORT não foi definida");
}

console.log("Variáveis carregadas com sucesso!");

console.log({
  databaseUrl,
  apiKey,
  port,
});

import "./utils/problema1";
import "./utils/problema3";
import "./utils/problema5";

console.log("Aplicação iniciada");