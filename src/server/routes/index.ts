import express from 'express'
import { matchRouter } from './match-route'

export const routes = express.Router()

routes.use('/api/match', matchRouter)