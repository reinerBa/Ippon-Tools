import swaggerAutogen from 'swagger-autogen'

import fs from 'fs'

const doc = {
  info: {
    version: 'v1.0.0',
    title: 'Ippon-Tools Project',
    description: 'Implementation of APIS to consume with Ipponboard and web apps'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: ''
    }
  ],
  components: {
  }
}

const outputFile = './server/swagger_output.json'
const endpointsFiles = ['./src/server/routes/index.ts']

// @ts-expect-error
const { data: swaggerJSON } = await swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc)

fs.rmSync('src/client/apis', { recursive: true, force: true })
await import('openapi-typescript-codegen').then(async (OpenAPI) =>
  await OpenAPI.generate({
    input: swaggerJSON,
    output: './src/client/apis',
    httpClient: 'fetch'
  })
)
