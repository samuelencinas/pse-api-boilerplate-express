import express from 'express';
import { prisma } from "./lib/db";
import { factorial } from './functions/factorial';
import cors from 'cors';
import type { Request, Response } from 'express';

// Instanciación del servidor
const app = express();

// Middleware de Express para el uo de JSON
app.use(express.json());

// Middleware de Express para el uso de CORS (orígenes cruzados)
app.use(cors());

// Definición de endpoint inicial
app.get('/', (req: Request, res: Response) => {
    res.send("Hola mundo");
});

// Definición de endpoint factorial
app.get('/factorial/:num', (req: Request, res: Response) => {
    const { num } = req.params;
    res.send(`El factorial de ${req.params.num} es ${factorial(Number(num))}`);
})

// Definición de endpoint factorial mejorado (con manejo de errores)
app.post('/factorial2', async (req: any, res: any) => {
    try {
        const { numero, nombreUsuario } = req.body;
        const numeroAsNumber: number = Number(numero);
        
        if (isNaN(numeroAsNumber) || numero < 0) {
            return res.status(400).send("El número debe ser un entero positivo");
        }

        const nuevoRegistro = await prisma.factorial.create({
            data: {
                base: numero,
                usuario: nombreUsuario || "Anónimo"
            }
        });

        res.status(200).json({
            mensaje: "Cálculo realizado y guardado",
            data: nuevoRegistro
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error interno del servidor");
    }
});

// Escuchar:
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
})