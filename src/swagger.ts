import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Swagger Demo Project',
        description: 'Implementation of Swagger with TypeScript'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: ''
        },
    ],
    components: {
    }
};

const outputFile = './server/swagger_output.json';
const endpointsFiles = ['./src/server/routes/index.ts'];

await swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc)