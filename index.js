import express from "express";
import cors from "cors";
import router from "./Routes/RouteRoleta"
const app = express();
app.use(express.json());


app.use(cors({
  origin: "https://www.userosacoral.com"
}));

app.use("/registra-brinde", router)

app.listen(3000, () => console.log("API rodando na porta 3000"));
