import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

export const openApiSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Destellos de Tinta', 
            version: '1.0.0',
            description: "Documentación de los endpoints de mi biblioteca inteligente"
        },
        servers: [
            {
                url: 'http://localhost:3000/api/v1',
                description: "Servidor Local de Desarrollo"
            },
            {
                url: 'https://backend-libros-vdpv.onrender.com/api/v1',
                description: "Servidor de Producción (Render)"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            },
            schemas: {
                Book: {
                    type: 'object',
                    required: [
                        'Nombre', 
                        'Tipo', 
                        'TituloIngles', 
                        'Autor', 
                        'Descripcion', 
                        'FechaPublicacion', 
                        'Paginas', 
                        'ISBN', 
                        'Tapa', 
                        'Formato'
                    ],
                    properties: {
                        Nombre: { 
                            type: 'string', 
                            description: 'Nombre del libro' 
                        },
                        Tipo: { 
                            type: 'string', 
                            description: 'Tipo de publicación (ej. Novela, Ensayo)' 
                        },
                        TituloIngles: { 
                            type: 'string', 
                            description: 'Título original en inglés' 
                        },
                        Autor: { 
                            type: 'string', 
                            description: 'Nombre del autor o autora' 
                        },
                        Descripcion: { 
                            type: 'string', 
                            description: 'Resumen o sinopsis de la obra' 
                        },
                        FechaPublicacion: { 
                            type: 'string', 
                            description: 'Fecha en la que fue publicado' 
                        },
                        Paginas: { 
                            type: 'number', 
                            description: 'Número total de páginas' 
                        },
                        ISBN: { 
                            type: 'string', 
                            description: 'Identificador internacional del libro' 
                        },
                        Tapa: { 
                            type: 'string', 
                            enum: ['Dura', 'Blanda'],
                            description: 'Tipo de encuadernación física' 
                        },
                        Formato: { 
                            type: 'string', 
                            enum: ['Fisico', 'Virtual'],
                            description: 'Formato en el que se posee el libro' 
                        },
                        ImagenUrl: { 
                            type: 'string', 
                            description: 'URL de la imagen de portada' 
                        },
                        Genero: { 
                            type: 'array', 
                            items: { type: 'string' },
                            description: 'Géneros literarios asociados' 
                        },
                        Rating: { 
                            type: 'number', 
                            description: 'Calificación de 0 a 5' 
                        },
                        Estado: { 
                            type: 'string', 
                            enum: ['Pendiente', 'Leyendo', 'Terminado'],
                            description: 'Estado de lectura actual' 
                        },
                        Idioma: { 
                            type: 'string', 
                            description: 'Idioma en el que está escrito el libro' 
                        }
                    }
                },
                AuthResponse: {
                    type: 'object',
                    properties: {
                        ok: { type: 'boolean' },
                        token: { type: 'string' },
                        user: { type: 'object' }
                    }
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    apis: [path.join(__dirname, '../modules/**/*.routes.{ts,js}')],
};