import path from "path";

export const openApiSpec = {
    definition: {
        openapi: '3.0.0',

        info: {
            title: 'API Destellos de Tinta',
            version: '1.0.0',
            description: 'Documentación de los endpoints de mi librería inteligente'
        },

        servers: [
            {
                url: 'http://localhost:3000/api/v1',
                description: 'Servidor Local de Desarrollo'
            },
            {
                url: 'https://backend-libros-vdpv.onrender.com/api/v1',
                description: 'Servidor de Producción (Render)'
            }
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
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
                            description: 'Tipo de publicación'
                        },

                        TituloIngles: {
                            type: 'string'
                        },

                        Autor: {
                            type: 'string'
                        },

                        Descripcion: {
                            type: 'string'
                        },

                        FechaPublicacion: {
                            type: 'string'
                        },

                        Paginas: {
                            type: 'number'
                        },

                        ISBN: {
                            type: 'string'
                        },

                        Tapa: {
                            type: 'string',
                            enum: ['Dura', 'Blanda']
                        },

                        Formato: {
                            type: 'string',
                            enum: ['Fisico', 'Virtual']
                        },

                        ImagenUrl: {
                            type: 'string'
                        },

                        Genero: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },

                        Rating: {
                            type: 'number'
                        },

                        Estado: {
                            type: 'string',
                            enum: ['Pendiente', 'Leyendo', 'Terminado']
                        },

                        Idioma: {
                            type: 'string'
                        }
                    }
                },

                AuthResponse: {
                    type: 'object',

                    properties: {

                        ok: {
                            type: 'boolean'
                        },

                        token: {
                            type: 'string'
                        },

                        user: {
                            type: 'object'
                        }
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

    apis: [
    './src/modules/auth/*.ts',
    './src/modules/reviews/*.ts',
    './src/modules/books/*.ts',
    './src/modules/users/*.ts',
    './src/modules/progress/*.ts',
    './src/modules/wishlist/*.ts',

    './build/modules/auth/*.js',
    './build/modules/reviews/*.js',
    './build/modules/books/*.js',
    './build/modules/users/*.js',
    './build/modules/progress/*.js',
    './build/modules/wishlist/*.js'
]
};