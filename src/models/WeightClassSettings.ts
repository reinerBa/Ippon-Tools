export default class WeightClassSettings {
  public Name!: string
  public MatchTime: number
  public Further: string

  public constructor (Name: string, MatchTime: number, Further: string) {
    this.Name = Name
    this.MatchTime = MatchTime
    this.Further = Further
  }
}
