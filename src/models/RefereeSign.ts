import type Score from './Score'

export default class RefereeSign {
  public Timestamp: string
  public RelativeTimestamp: number
  public Name: string

  public constructor (relativeTimestamp: number, name: string) {
    this.Timestamp = new Date().toISOString()
    this.RelativeTimestamp = relativeTimestamp
    this.Name = name
  }
}

export class ScoreSign extends RefereeSign {
  public Scoring: Score

  public constructor (relativeTimestamp: number, name: string, scoring: Score) {
    super(relativeTimestamp, name)
    this.Scoring = scoring
  }
}
