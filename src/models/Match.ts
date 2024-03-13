import MatchHistory from './MatchHistorie'
import type { Participant, ParticipantTeam } from './Participant'
import type RefereeSign from './RefereeSign'
import type Score from './Score'

export type MatchStatus = 'open' | 'winWhite' | 'winRed' | 'undecided'

export abstract class MatchBase {
  public Position: Number = 0
  public Key: string
  public WeightClassKey: string
  public ScoreRed: Score | undefined
  public ScoreWhite: Score | undefined
  public Status: MatchStatus = 'open'

  public constructor (weightClassKey: string, Status: MatchStatus, key?: string) {
    this.Key = key ?? Date.now().toString(36) + Math.random().toString(36).substring(2)
    this.WeightClassKey = weightClassKey
  }
}

export class MatchSingle extends MatchBase {
  public Winner: Participant | undefined
  public ParticipantWhite: Participant
  public ParticipantRed: Participant
  public MatchHistory: MatchHistory

  public constructor (weightClassKey: string, Status: MatchStatus, white: Participant, red: Participant, key?: string, matchHistory?: MatchHistory) {
    super(weightClassKey, Status, key)
    this.ParticipantRed = red
    this.ParticipantWhite = white
    this.MatchHistory = matchHistory ?? new MatchHistory()
  }
}

export class MatchTeam extends MatchBase {
  public Winner: ParticipantTeam | undefined
  public TeamRed: ParticipantTeam
  public TeamWhite: ParticipantTeam
  public Matches: MatchSingle[] = []

  public constructor (weightClassKey: string, Status: MatchStatus, teamWhite: ParticipantTeam, teamRed: ParticipantTeam, key?: string) {
    super(weightClassKey, Status, key)
    this.TeamRed = teamRed
    this.TeamWhite = teamWhite
  }
}
