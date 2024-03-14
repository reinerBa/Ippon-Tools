import { UUID } from 'crypto'

export default class WeightClass {
  public Key: UUID
  public Name: string

  public minWeight: number
  public maxWeight: number
  public ParticipantKeys: UUID[] = []

  public constructor (name: string, minWeight: number, maxWeight: number, key?: UUID) {
    this.Name = name
    this.minWeight = minWeight
    this.maxWeight = maxWeight
    this.Key = key ?? crypto.randomUUID()
  }
}
