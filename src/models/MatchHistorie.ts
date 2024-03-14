import type RefereeSign from './RefereeSign'
import type Score from './Score'

export default class MatchHistory {
  public Start: string | false
  public End: string | false
  public DurationSec: number
  public RefereeSigns: RefereeSign[] | Score[] = [] // ScoreSign[]

  public constructor (start?: string, end?: string, duration?: number) {
    this.Start = start ?? false
    this.End = end ?? false
    this.DurationSec = 0
    this.RefereeSigns = []
  }
}
