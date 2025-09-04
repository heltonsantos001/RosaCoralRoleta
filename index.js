import express from "express";
import cors from "cors";
import { router } from "./Routes/RouteRoleta.js";

const app = express();
app.use(express.json());

// Permitir apenas o domínio específico
app.use(cors({
  origin: "https://www.userosacoral.com",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// Rotas
app.use("/registra-brinde", router);

app.listen(3000, () => console.log("API rodando na porta 3000"));
