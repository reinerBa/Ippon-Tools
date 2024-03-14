import Tournament from '../models/Tournament'
import { Participant, ParticipantBase } from '../models/Participant'
import CompetitionList from '../models/CompetitionList'
import WeightClass from '../models/WeightClass'
import Competition from '../models/Competition'
import WeightClassSettings from '../models/WeightClassSettings'
import { MatchSingle } from '../models/Match'
import MatchHistory from '../models/MatchHistorie'
import RefereeSign, { ScoreSign } from '../models/RefereeSign'
import Score from '../models/Score'

function createT0 (): Tournament {
  const CompetitionName = 'U11m'
  const matchSettings: WeightClassSettings = new WeightClassSettings('U11 rules', 2)
  const Participants: ParticipantBase[] = [
    new Participant('Paul Müller', 'JC München', 1, 0, undefined, 31),
    new Participant('Hans Schmidt', 'SV Berlin', 2, 0, undefined, 32)
  ]

  const weightClass: WeightClass = {
    Name: '-35m',
    Key: crypto.randomUUID(),
    maxWeight: 35,
    minWeight: 30,
    ParticipantKeys: [...Participants.flatMap(p => p.Key)]
  }

  const competitionList0 = new CompetitionList(CompetitionName + '' + weightClass.Name, { Id: 3 }, weightClass, matchSettings, Participants.flatMap(p => p.Key))
  competitionList0.Matches = [
    new MatchSingle(weightClass.Key, Participants[0] as Participant, Participants[1] as Participant, 0)
  ]
  const CompetitionLists: CompetitionList[] = [
    competitionList0
  ]

  const C: Competition = new Competition(CompetitionName, new Date(), matchSettings)
  C.Participants = Participants
  C.CompetitionLists = CompetitionLists
  C.WeightClasses = [weightClass]

  const t = new Tournament('Bezirksmeisterschaft 2001', new Date().toISOString())
  t.ContactEmail = 'contact@mail.de'
  t.Url = 'www.de'
  t.Competitions = [C]

  return t
}

// done tournament //
function createT1 (): Tournament {
  const CompetitionName = 'U11w'
  const matchSettings: WeightClassSettings = new WeightClassSettings('U11 rules', 2)
  const Participants: ParticipantBase[] = [
    new Participant('Anna Müller', 'JC Westerwald', 1, 0, undefined, 31),
    new Participant('Jenny Schmidt', 'SV Eifel', 2, 0, undefined, 32)
  ]

  const weightClass: WeightClass = {
    Name: '-35w',
    Key: crypto.randomUUID(),
    maxWeight: 35,
    minWeight: 30,
    ParticipantKeys: [...Participants.flatMap(p => p.Key)]
  }

  const competitionList0 = new CompetitionList(CompetitionName + '' + weightClass.Name, { Id: 3 }, weightClass, matchSettings, Participants.flatMap(p => p.Key))

  let now = new Date('2000-02-05T12:13:00').getTime()
  const ms = new MatchSingle(weightClass.Key, Participants[0] as Participant, Participants[1] as Participant, 1)
  ms.Status = 'winRed'
  ms.Winner = Participants[1] as Participant
  const mHistory = new MatchHistory(new Date().toISOString(), new Date().toISOString(), 59)
  mHistory.RefereeSigns = [
    new RefereeSign(now - 60e3, 'Matte'),
    new ScoreSign(now - 30e3, 'Wazari', Score.GetWazaAri()),
    new RefereeSign(now - 48e3, 'Osaikomi'),
    new ScoreSign(now - 58e3, 'Wazari', Score.GetWazaAri()),
    new RefereeSign(now - 59e3, 'Sore Matte')
  ]

  ms.MatchHistory = mHistory
  ms.ScoreRed = Score.GetIppon()
  ms.ScoreWhite = new Score()

  now = now + 600e3
  const ms2 = new MatchSingle(weightClass.Key, Participants[0] as Participant, Participants[1] as Participant, 2)
  ms2.Status = 'winRed'
  ms2.Winner = Participants[1] as Participant
  const mHistory2 = new MatchHistory(new Date().toISOString(), new Date().toISOString(), 9)
  mHistory2.RefereeSigns = [
    new RefereeSign(now - 10e3, 'Matte'),
    new ScoreSign(now - 8e3, 'Ippon', Score.GetIppon()),
    new RefereeSign(now - 59e3, 'Sore Matte')
  ]

  ms2.MatchHistory = mHistory2
  ms2.ScoreRed = Score.GetIppon()
  ms2.ScoreWhite = new Score()

  const ms3 = new MatchSingle(weightClass.Key, Participants[0] as Participant, Participants[1] as Participant, 2, 'omitted')

  competitionList0.Matches = [ms, ms2, ms3]
  competitionList0.IsDone = true

  const CompetitionLists: CompetitionList[] = [
    competitionList0
  ]

  const C: Competition = new Competition(CompetitionName, new Date(), matchSettings)
  C.Participants = Participants
  C.CompetitionLists = CompetitionLists
  C.WeightClasses = [weightClass]

  const C1: Competition = new Competition('U11m', new Date(Date.now() + 86.4e6), matchSettings)
  C1.Participants = []
  C1.CompetitionLists = []
  // @ts-expect-error
  const weightClass40m: WeightClass = {}
  Object.assign(weightClass40m, weightClass, { Name: '-40m' })
  C1.WeightClasses = [weightClass40m]

  const t = new Tournament('Bezirksmeisterschaft 2000', new Date().toISOString())
  t.ContactEmail = 'contact@mail.de'
  t.Url = 'www.de'
  t.Competitions = [C, C1]

  return t
}

const t0: Tournament = createT0()
const t1: Tournament = createT1()
export default [t0, t1]
