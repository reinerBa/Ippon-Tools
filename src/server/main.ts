import express from 'express'
import ViteExpress from 'vite-express'
import swaggerUi from 'swagger-ui-express'
import { routes } from './routes'
import swaggerOutput from './swagger_output.json'

const app = express()

app.use('/', routes)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerOutput))

app.get('/hello', (_, res) => {
  res.send('Hello Vite + Vue + TypeScript!')
})

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening on port 3000...')
)
