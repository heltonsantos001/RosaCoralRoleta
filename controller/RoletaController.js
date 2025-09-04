export const RoletaControllerPost = async (req, res)=>{
    const { codigo, brinde } = req.body;
    if(!codigo || !brinde ){
        return {message:"Dados Null"}
    }

const response = await fetch("https://script.google.com/macros/s/AKfycbyhBQnWv7CNDHv9udx6H7dJuRQm8lD2GNGNEK__HloYqEi4UZbc-MOC-jEyAUq30oH4_Q/exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    codigo: codigo,
    brinde: brinde
  })
});


let data;
try {
  data = await response.json();
} catch {
  const text = await response.text();
  console.error("Resposta não era JSON:", text);
  return res.status(500).json({ sucesso: false, mensagem: "Erro no Apps Script", detalhe: text });
}

res.json(data);

}