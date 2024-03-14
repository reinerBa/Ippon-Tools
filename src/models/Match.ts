import { UUID } from 'crypto'
import MatchHistory from './MatchHistorie'
import type { Participant, ParticipantTeam } from './Participant'
import type Score from './Score'

export type MatchStatus = 'open' | 'winWhite' | 'winRed' | 'undecided' | 'omitted'

export abstract class MatchBase {
  public Position: Number = 0
  public Key: UUID
  public WeightClassKey: UUID
  public ScoreRed: Score | undefined
  public ScoreWhite: Score | undefined
  public Status: MatchStatus = 'open'

  public constructor (weightClassKey: UUID, Status: MatchStatus, position: number, key?: UUID) {
    this.Key = key ?? crypto.randomUUID()
    this.WeightClassKey = weightClassKey
    this.Position = position
  }
}

export class MatchSingle extends MatchBase {
  public Winner: Participant | undefined
  public ParticipantWhite: Participant
  public ParticipantRed: Participant
  public MatchHistory: MatchHistory

  public constructor (weightClassKey: UUID, white: Participant, red: Participant, position: number, Status?: MatchStatus, matchHistory?: MatchHistory) {
    super(weightClassKey, Status ?? 'open', position)
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

  public constructor (weightClassKey: UUID, Status: MatchStatus, teamWhite: ParticipantTeam, teamRed: ParticipantTeam, position: number, key?: UUID) {
    super(weightClassKey, Status, position, key)
    this.TeamRed = teamRed
    this.TeamWhite = teamWhite
  }
}
