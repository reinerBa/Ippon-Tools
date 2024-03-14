import { UUID } from 'crypto'
import { MatchBase } from './Match'
import WeightClass from './WeightClass'
import WeightClassSettings from './WeightClassSettings'
import { ListSystem } from './ListSystem'

export default class CompetitionList {
  public Name!: string
  public Key: UUID
  public ListSystem!: ListSystem
  public WeightClass!: WeightClass
  public Settings: WeightClassSettings
  public ParticipantKeys: UUID[] = []
  public Matches: MatchBase[] = []
  public IsDone = false

  public constructor (name: string, listSystem: ListSystem, weightClass: WeightClass, settings: WeightClassSettings, participantKeys?: UUID[]) {
    this.Name = name
    this.ListSystem = listSystem
    this.WeightClass = weightClass
    this.Settings = settings
    this.Key = crypto.randomUUID()
  }
}
