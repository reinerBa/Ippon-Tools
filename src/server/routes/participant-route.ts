import { Router } from 'express'
import { GetMatches, db } from '../../database'
import { Participant } from '../../models/Participant'

export const participantRouter = Router()

participantRouter.get('/getMatches', (req, res) => {
  res.status(200).json(GetMatches())
})

participantRouter.get('/getParticipant/:Key', (req, res) => {
  //  #swagger.parameters['Key'] = { type: 'UUID' }
  const t = db.data.flatMap(t => t.Competitions).flatMap(c => c.Participants).find(p => p.Key === req.params.Key)
  if (t === undefined) {
    res.status(204)
  } else {
    res.status(200).json(t)
  }
})

participantRouter.post('/setParticipantWeight/:Key/:Weight', (req, res) => {
  const p = db.data.flatMap(t => t.Competitions).flatMap(c => c.Participants).find(p => p.Key === req.params.Key)
  const weight = Number.parseFloat(req.params.Weight)

  if (p === undefined || isNaN(weight)) {
    res.status(204)
  } else {
    const participant = p as Participant
    participant.Weight = Number.parseFloat(req.params.Weight)
    db.write().then(() =>
      res.status(200)
    ).catch(() => {
      res.status(501)
    })
  }
})
