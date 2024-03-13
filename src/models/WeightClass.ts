import type { Participant, ParticipantBase } from './Participant'

export default class WeightClass {
  public Key: string
  public Name: string

  public minWeight: number
  public maxWeight: number
  public Participants: ParticipantBase[] = []

  public constructor (name: string, minWeight: number, maxWeight: number, key?: string) {
    this.Name = name
    this.minWeight = minWeight
    this.maxWeight = maxWeight
    this.Key = key ?? Date.now().toString(36) + Math.random().toString(36).substring(2)
  }
}

export class ListSystem {
  public Name: string
  public constructor (name: string) {
    this.Name = name
  }
}
