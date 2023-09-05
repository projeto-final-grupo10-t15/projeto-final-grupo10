import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {Express} from 'express'

const options: swaggerJsdoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.0', // Versão do Swagger
    info: {
      title: 'API Documentation', // Título da documentação
      version: '1.0.0', // Versão da API
      description: 'Documentação da API RESTful', // Descrição da API
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL da sua API
        description: 'Local Development Server',
      },
    ],
  },
  apis: ['**/*.ts'], // Especifique os arquivos onde suas anotações JSDoc estão localizadas
};

const specs = swaggerJsdoc(options);

export default (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
