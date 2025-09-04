import express from "express";
import cors from "cors";
import serverless from "serverless-http";

const app = express();
app.use(express.json());

// Permitir apenas seu domínio
app.use(cors({
  origin: "https://www.userosacoral.com",
  methods: ["GET","POST","OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// Rota POST /registra-brinde
app.post("/registra-brinde", async (req, res) => {
  const { codigo, brinde } = req.body;

  if (!codigo || !brinde) {
    return res.status(400).json({ message: "Dados Null" });
  }

  try {
    // fetch nativo do Node.js 18+ no Vercel
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyhBQnWv7CNDHv9udx6H7dJuRQm8lD2GNGNEK__HloYqEi4UZbc-MOC-jEyAUq30oH4_Q/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo, brinde })
      }
    );

    let data;
    try { 
      data = await response.json(); 
    } catch {
      const text = await response.text();
      console.error("Resposta não era JSON:", text);
      return res.status(500).json({ sucesso: false, mensagem: "Erro no Apps Script", detalhe: text });
    }

    res.json(data);

  } catch (err) {
    console.error("Erro interno:", err);
    res.status(500).json({ sucesso: false, mensagem: "Erro interno" });
  }
});

// Exporta como função serverless
export default serverless(app);
