import express from "express";
import cors from "cors";
import {router} from "./Routes/RouteRoleta.js"
const app = express();
app.use(express.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://www.userosacoral.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});


app.use("/registra-brinde", router)

app.listen(3000, () => console.log("API rodando na porta 3000"));
