const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const nombre = req.query.nombre || "Mundo";

  res.json({
    mensaje: `¡Hola ${nombre}, soy Deyanira Josselin!`,
    status: "success"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

