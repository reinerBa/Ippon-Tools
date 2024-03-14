import type Club from './Club'
import type WeightClass from './WeightClass'
import { UUID } from 'crypto'

export abstract class ParticipantBase {
  public Key: UUID
  public Name: string
  public SportClub: string | Club
  public type: Number = 0
  public numberOnList: number

  public constructor (name: string, sportClub: string | Club, numberOnList: number, type: number = 0, key?: UUID) {
    this.SportClub = sportClub
    this.Name = name
    this.numberOnList = numberOnList
    this.type = type
    this.Key = key ?? crypto.randomUUID() // Date.now().toString(36) + Math.random().toString(36).substring(2)
  }
}

export class Participant extends ParticipantBase {
  public Weight: number | string | false = false
  //  public WeightClassReal: WeightClass | false = false
  public WeightClassEstimated: WeightClass | false = false

  public constructor (name: string, sportClub: string | Club, numberOnList: number, type: number = 0, key?: UUID, weight?: number | string) {
    super(name, sportClub, numberOnList, type, key)
    this.Weight = weight ?? false
  }
}

export class ParticipantTeam extends ParticipantBase {
  public Participants: Participant[] = []

  public constructor (name: string, sportClub: string | Club, numberOnList: number, type: number = 0, Participants: Participant[], key?: UUID) {
    super(name, sportClub, numberOnList, type, key)
    this.Participants = Participants
  }
}
