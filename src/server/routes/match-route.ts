import { Router, Request } from 'express'
import { GetMatches, GetTournaments, UpdateMatchSingle, db } from '../../database'
import { TournamentDto } from '../../models/Tournament'
import { UUID } from 'crypto'
import { MatchSingle } from '../../models/Match'

export const matchRouter = Router()

/* interface UpdateEmployeeRequest extends Request {
    id: number;
    name: string;
}
*/

interface UpdateMatchSingleRequst extends Request {
  CompetitionListKey: UUID
  Match: MatchSingle
}

matchRouter.get('/getMatches', (req, res) => {
  res.status(200).json(GetMatches())
})

matchRouter.get('/getTournament/:Key', (req, res) => {
  //  #swagger.parameters['Key'] = { type: 'UUID' }
  const t = db.data.find(t => t.Key === req.params.Key)
  if (t === undefined) {
    res.status(204)
  } else {
    res.status(200).json(t)
  }
})

matchRouter.get('/getTournaments', (req, res) => {
  res.status(200).json(GetTournaments())
})

matchRouter.get('/getTournamentsShort', (req, res) => {
  const tournaments = GetTournaments()
  const dtos = tournaments.map(t => new TournamentDto(t))
  res.status(200).json(dtos)
})

// @ts-expect-error
matchRouter.post('/matchSingle', async function (req: UpdateMatchSingleRequst, res, next) {
  await UpdateMatchSingle(req.CompetitionListKey, req.Match)
  res.status(200)
})

/* matchRouter.get('/getEmployee/:id', (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id));
    if (!employee) res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
});

matchRouter.patch('/updateEmployee', (req: UpdateEmployeeRequest, res) => {
   const employee = employees.find(e => e.id === req.body.id);
    if (!employee) res.status(404).json({ message: 'Employee not found' });

    // if employee is found, update the employee name
    employee.name = req.body.name;
    res.status(200).json(employee);
});
*/
