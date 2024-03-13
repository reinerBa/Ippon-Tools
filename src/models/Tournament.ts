import type Competition from './Competition'

export default class Tournament {
  public Name: string
  public Url: string = ''
  public ContactEmail: string = ''
  public Competitions: Competition[] = []
  public registrationDeadline: string

  public constructor (name: string, regDeadline: string) {
    this.Name = name
    this.registrationDeadline = regDeadline
  }
}
