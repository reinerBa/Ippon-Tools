import type WeightClassList from './WeightClassList'
import type { ParticipantBase } from './Participant'
import WeightClass from './WeightClass'

export default class Competition {
  public Name: string
  public EventDate: Date
  public Participants: ParticipantBase[] = []
  public CompetitionLists: WeightClassList[] = []
  public WeightClasses: WeightClass[] = []

  public constructor (name: string, eventDate: Date) {
    this.Name = name
    this.EventDate = eventDate
  }
}
