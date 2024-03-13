import { JSONFilePreset } from 'lowdb/node'
import Tournament from '../models/Tournament'
import defaultData from './SampleData'
import { MatchBase } from '../models/Match'
type Data = {
    messages: string[]
  }
  
export const db = await JSONFilePreset<Tournament>('db.json', defaultData)
 
export function GetMatches(): MatchBase[] {
    return db.data.Competitions.flatMap(c => c.CompetitionLists.flatMap(cl => cl.Matches))
}