import { JSONFilePreset } from 'lowdb/node'
import Tournament from '../models/Tournament'
import defaultData from './SampleData'
import { MatchBase, MatchSingle } from '../models/Match'
import { UUID } from 'crypto'

export const db = await JSONFilePreset<Tournament[]>('db.json', defaultData)

export function GetMatches (): MatchBase[] {
  return db.data.flatMap(t => t.Competitions).flatMap(c => c.CompetitionLists.flatMap(cl => cl.Matches))
}

export function GetTournaments (): Tournament[] {
  return db.data
}

export async function UpdateMatchSingle (competitionListKey: UUID, match: MatchSingle): Promise<void> {
  const competitionList = db.data.flatMap(t => t.Competitions).flatMap(c => c.CompetitionLists).find(cl => cl.Key === competitionListKey)
  const idx = competitionList?.Matches.findIndex(m => m.Key === match.Key)
  if (idx === undefined) return
  competitionList?.Matches.splice(idx, 1, match)
  await db.write()
}
