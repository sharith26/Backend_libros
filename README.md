#  Destellos de Tinta: La Esencia de tu Biblioteca Inteligente

**Destellos de Tinta** Es una plataforma backend diseñada para la gestión inteligente de bibliotecas personales. Este proyecto permite organizar catálogos de libros, realizar seguimientos de lectura y gestionar listas de deseos (Wishlists) de manera segura.

## Tecnologías Utilizadas
 **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Tipado fuerte para mayor seguridad)
 **Entorno de ejecución:** [Node.js](https://nodejs.org/) con Express.js
 **Base de Datos:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Base de datos NoSQL en la nube)
 **Modelado de datos:** [Mongoose](https://mongoosejs.com/)
 **Seguridad:** [JSON Web Tokens (JWT)](https://jwt.io/) para autenticación y [Bcrypt](https://www.npmjs.com/package/bcrypt) para encriptación de contraseñas.
 **Documentación:** [Swagger UI](https://swagger.io/tools/swagger-ui/) (OpenAPI 3.0).
 **Pruebas de API:** [Postman](https://www.postman.com/)
 **Despliegue:** [Render](https://render.com/)

## Arquitectura
El proyecto utiliza una estructura modular:
 `src/modules`: Lógica de negocio (auth, books, wishlist).
 `src/middlewares`: Seguridad y validaciones.
 `src/config`: Conexiones y variables de entorno.

## Instalación Local
1. Instalar dependencias: `npm install`
2. Configurar el archivo `.env` con `PORT`, `MONGO_URI` y `JWT_SECRET`.
3. Ejecutar: `npm run dev`

## Documentación de la API  
Puedes acceder a la documentación interactiva en:
 'http://localhost:3000/api/v1/docs/'
 'https://backend-libros-vdpv.onrender.com/api/v1/docs/'


Desarrollado por **Sharith**.