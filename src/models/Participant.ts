import type Club from './Club'
import type WeightClass from './WeightClass'

export abstract class ParticipantBase {
  public Key: string
  public Name: string
  public SportClub: string | Club
  public type: Number = 0
  public numberOnList: number

  public constructor (name: string, sportClub: string | Club, numberOnList: number, type: number = 0, key?: string) {
    this.SportClub = sportClub
    this.Name = name
    this.numberOnList = numberOnList
    this.type = type
    this.Key = key ?? Date.now().toString(36) + Math.random().toString(36).substring(2)
  }
}

export class Participant extends ParticipantBase {
  public Weight: number | string | false = false
  public WeightClassReal: WeightClass | false = false
  public WeightClassEstimated: WeightClass | false = false

  public constructor (name: string, sportClub: string | Club, numberOnList: number, type: number = 0, key?: string) {
    super(name, sportClub, numberOnList, type, key)
  }
}

export class ParticipantTeam extends ParticipantBase {
  public Participants: Participant[] = []

  public constructor (name: string, sportClub: string | Club, numberOnList: number, type: number = 0, Participants: Participant[], key?: string) {
    super(name, sportClub, numberOnList, type, key)
    this.Participants = Participants
  }
}
