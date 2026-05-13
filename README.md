# 📚 Destellos de Tinta — Biblioteca Inteligente Backend

**Destellos de Tinta** es una API REST desarrollada para gestionar bibliotecas personales de forma inteligente y organizada.  
La plataforma permite administrar libros, usuarios, progreso de lectura, reseñas y listas de deseos mediante una arquitectura modular, segura y escalable.

---

# ✨ Características Principales

- 🔐 Autenticación y autorización con JWT
- 👤 Gestión de usuarios
- 📖 CRUD completo de libros
- ⭐ Sistema de reseñas
- ❤️ Wishlist o lista de deseos
- 📈 Seguimiento de progreso de lectura
- 🛡️ Middleware de seguridad y validaciones
- 📑 Documentación interactiva con Swagger
- ☁️ Despliegue en Render
- 🗄️ Base de datos en MongoDB Atlas

---

# 🚀 Tecnologías Utilizadas

- TypeScript  
  Tipado fuerte para mejorar mantenibilidad y seguridad.

- Node.js + Express.js  
  Backend rápido y escalable.

- MongoDB Atlas  
  Base de datos NoSQL en la nube.

- Mongoose  
  Modelado y manejo de datos en MongoDB.

- JWT (JSON Web Tokens)  
  Autenticación segura basada en tokens.

- Bcrypt  
  Encriptación de contraseñas.

- Swagger UI  
  Documentación interactiva de la API.

- Postman  
  Pruebas y consumo de endpoints.

- Render  
  Hosting y despliegue del backend.

---

# 🏗️ Arquitectura del Proyecto

```bash
src/
│
├── api/
├── config/
├── middlewares/
├── modules/
│   ├── auth/
│   ├── books/
│   ├── users/
│   ├── reviews/
│   ├── wishlist/
│   └── progress/
│
├── utils/
└── server.ts
```

---

# 📂 Descripción de Carpetas

| Carpeta | Función |
|----------|----------|
| `modules/` | Lógica de negocio organizada por módulos |
| `middlewares/` | Seguridad, validaciones y manejo de errores |
| `config/` | Configuración global y conexión a MongoDB |
| `api/` | Versionado y agrupación de rutas |
| `utils/` | Funciones auxiliares reutilizables |

---

# ⚙️ Instalación Local

## 1️⃣ Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

## 2️⃣ Instalar dependencias

```bash
npm install
```

## 3️⃣ Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
MONGO_URI=tu_uri_mongodb
MONGO_DB_NAME=nombre_db
JWT_SECRET=tu_clave_secreta
```

## 4️⃣ Ejecutar el proyecto

### Desarrollo

```bash
npm run dev
```

### Producción

```bash
npm run build
npm start
```

---

# 📚 Documentación de la API

## Swagger Local
http://localhost:3000/api/v1/docs/

## Swagger Producción
https://backend-libros-vdpv.onrender.com/api/v1/docs/

---

# ☁️ Despliegue

La API se encuentra desplegada en:
https://backend-libros-vdpv.onrender.com

---

# 🔑 Módulos Disponibles

| Módulo | Función |
|--------|----------|
| Auth | Registro, login y autenticación |
| Users | Gestión de usuarios |
| Books | CRUD de libros |
| Reviews | Reseñas y puntuaciones |
| Wishlist | Lista de deseos |
| Progress | Seguimiento de lectura |

---

# 🔒 Seguridad Implementada

- JWT Authentication
- Bcrypt Password Hashing
- Helmet Security
- Middleware de autenticación
- Validaciones personalizadas
- Protección de rutas privadas

---

# 👩‍💻 Desarrollado por

**Sharith Vasquez** 