import express from 'express';
import factorial from './functions.js';

// Instanciación del servidor
const app = express();

// Uso de JSON
app.use(express.json());

// Definición de endpoint inicial
app.get('/', (req, res) => {
    res.send("Hola mundo");
});

// Definición de endpoint factorial
app.get('/factorial/:num', (req, res) => {
    res.send(`El factorial de ${req.params.num} es ${factorial(req.params.num)}`);
})

// Definición de endpoint factorial mejorado (con manejo de errores)
app.post('/factorial2', (req, res) => {
    try {
        const { numero } = req.body;
        const resultado = factorial(numero);
        res.status(200).send(`El factorial de ${numero} es ${resultado}`);
    } catch (err) {
        res.status(500).send("No es un número");
    }
})

// Escuchar:
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
})