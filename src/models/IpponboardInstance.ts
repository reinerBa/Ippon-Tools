import { UUID } from 'crypto'
import CompetitionList from './CompetitionList'

export default class {
  public Key: UUID
  public Name!: string
  public CompetitionLists: CompetitionList[] = []
  public Ip: string | false
  public CurrentBanner: string

  public constructor (name: string, ip?: string) {
    this.Key = crypto.randomUUID()
    this.Ip = ip ?? false
    this.CurrentBanner = ''
  }
}
