import { Router } from 'express'
import { GetTournaments, db } from '../../database'
import { TournamentDto } from '../../models/Tournament'

export const tournamentRouter = Router()

tournamentRouter.get('/getTournament/:Key', (req, res) => {
  //  #swagger.parameters['Key'] = { type: 'UUID' }
  const t = db.data.find(t => t.Key === req.params.Key)
  if (t === undefined) {
    res.status(204)
  } else {
    res.status(200).json(t)
  }
})

tournamentRouter.get('/getTournaments', (req, res) => {
  res.status(200).json(GetTournaments())
})

tournamentRouter.get('/getTournamentsShort', (req, res) => {
  const tournaments = GetTournaments()
  const dtos = tournaments.map(t => new TournamentDto(t))
  res.status(200).json(dtos)
})
