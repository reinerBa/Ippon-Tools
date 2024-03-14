import { UUID } from 'crypto'
import type Competition from './Competition'
import { CompetitionDto } from './Competition'

export default class Tournament {
  public Name: string
  public Url: string = ''
  public ContactEmail: string = ''
  public Competitions: Competition[] = []
  public registrationDeadline: string
  public Key: UUID

  public constructor (name: string, regDeadline: string) {
    this.Name = name
    this.Key = crypto.randomUUID()
    this.registrationDeadline = regDeadline
  }
}

export class TournamentDto {
  public Name!: string
  public Competitions: CompetitionDto[] = []
  public Key: UUID

  public constructor (tournament: Tournament) {
    this.Name = tournament.Name
    this.Key = tournament.Key
    this.Competitions = tournament.Competitions.flatMap(c => new CompetitionDto(c))
  }
}
