import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

// ✅ Libera apenas sua loja Shopify (sem barra no final)
app.use(cors({
  origin: "https://www.userosacoral.com"
}));

app.post("/registra-brinde", async (req, res) => {
  const { codigo, brinde } = req.body;

const response = await fetch("https://script.google.com/macros/s/AKfycbyhBQnWv7CNDHv9udx6H7dJuRQm8lD2GNGNEK__HloYqEi4UZbc-MOC-jEyAUq30oH4_Q/exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    codigo: req.body.codigo,
    brinde: req.body.brinde
  })
});

// tenta ler como JSON, mas se não for, mostra o texto bruto
let data;
try {
  data = await response.json();
} catch {
  const text = await response.text();
  console.error("Resposta não era JSON:", text);
  return res.status(500).json({ sucesso: false, mensagem: "Erro no Apps Script", detalhe: text });
}

res.json(data);

});

app.listen(3000, () => console.log("API rodando na porta 3000"));
