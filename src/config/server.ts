import cors from 'cors';
import express from 'express';
require('dotenv').config();
const dated = require('date-and-time')


const PORT: string | number = process.env.PORT || 5001;

const app = express();

app.use(cors());

app.use(express.json());



var memoria = 0;

app.get("/hello-world", async (req, res) => {
    if (memoria > 0) {
        return res.status(200).json({ "retorno": memoria });
    } else {
        return res.status(200).json({ "retorno": "0" });
    }
});


app.post("/inclusao-valor", async (req, res) => {
    try {
        console.log("Novo valor detectado:");
        console.log(req.body);

        console.log("valor:");
        memoria = req.body.valor;
        console.log(req.body.valor);
    } catch (error) {
        console.error(error);
        return res.status(402).json({ "error": "error: " + error });
    }
    return res.status(200).json({ "mensagem": "valor registrado" });
});



//código escrito por Lucas Carvalho em meados de Junho de 2023...
//git push heroku main
app.listen(PORT, () => console.log(`localhost:${PORT}`)); 