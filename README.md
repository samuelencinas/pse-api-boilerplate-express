# Express REST API Boilerplate - PSE 2026

Este repositorio contiene un *boilerplate* o plantilla inicial para construir una API REST con Express. La plantilla contiene lo realizado a nivel *backend* durante el **Laboratorio 1** de la asignatura, es decir:

- Contiene un fichero `functions.js` con dos implementaciones del factorial recursivo, una como función *lambda* con condiciones ternarias y otra como función clásica.
- Expone **tres *endpoints**:
  - `GET /`, que devuelve un *"hola mundo"*
  - `GET /factorial/:num`, que devuelve el factorial del *num* pasado por parámetro de query.
  - `POST /factorial2`, que devuelve el factorial del *num* pasado como body en la propiedad **"numero"** y tiene manejo de errores.

## Uso

1. Clonar el repositorio y `npm install` para instalar las dependencias
2. `npm run start` para ejecutar el servidor