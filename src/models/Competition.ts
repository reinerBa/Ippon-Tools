import { UUID } from 'crypto'
import type CompetitionList from './CompetitionList'
import { Participant, ParticipantTeam, type ParticipantBase } from './Participant'
import WeightClass from './WeightClass'
import WeightClassSettings from './WeightClassSettings'

export default class Competition {
  public Key: UUID
  public Name: string
  public EventDate: Date
  public WeightClasses: WeightClass[] = []
  public Participants: ParticipantBase[] = []
  public CompetitionLists: CompetitionList[] = []
  public MatchSettings: WeightClassSettings

  public constructor (name: string, eventDate: Date, matchSettings: WeightClassSettings) {
    this.Name = name
    this.Key = crypto.randomUUID()
    this.EventDate = eventDate
    this.MatchSettings = matchSettings
  }
}

export class CompetitionDto {
  public Key: UUID
  public Name!: string
  public EventDate!: Date
  public WeightClasses: string[] = []
  public ParticipantsCount: number = 0

  public constructor (competition: Competition) {
    this.Key = competition.Key
    this.Name = competition.Name
    this.EventDate = competition.EventDate
    this.WeightClasses = competition.WeightClasses.flatMap(w => w.Name)

    competition.Participants.forEach((p: ParticipantBase) => {
      if ('Weight' in p) { this.ParticipantsCount++ } else if ('Participants' in p) { this.ParticipantsCount += (p as ParticipantTeam).Participants.length }
    })
  }
}
