import express from "express";
import { router } from "./Routes/RouteRoleta.js";

const app = express();
app.use(express.json());

// Middleware CORS completo
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://www.userosacoral.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Responde a requisições preflight OPTIONS
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// Rotas
app.use("/registra-brinde", router);

app.listen(3000, () => console.log("API rodando na porta 3000"));
