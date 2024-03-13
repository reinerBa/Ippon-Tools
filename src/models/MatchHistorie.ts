import type RefereeSign from './RefereeSign'
import type Score from './Score'

export default class MatchHistory {
  public Start: string
  public End: string | false
  public DurationSec: number
  public RefereeSigns: RefereeSign[] | Score[] = [] // ScoreSign[]

  public constructor (end?: string, duration?: number) {
    this.Start = new Date().toISOString()
    this.End = end ?? false
    this.DurationSec = 0
    this.RefereeSigns = []
  }
}
