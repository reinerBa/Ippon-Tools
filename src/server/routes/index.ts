import express from 'express'
import { matchRouter } from './match-route'
import { participantRouter } from './participant-route'
import { tournamentRouter } from './tournament-route'

export const routes = express.Router()

routes.use('/api/match', matchRouter)
routes.use('/api/match', participantRouter)
routes.use('/api/match', tournamentRouter)
