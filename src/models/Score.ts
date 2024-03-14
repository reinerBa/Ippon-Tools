export default class Score {
  public Ippon: number = 0
  public WazaAri: number = 0
  public Shido: number = 0
  public Hansokumake: number = 0
  public SumPoints: number = 0
  public RefereeDecision: number = 0

  public static GetWazaAri (): Score {
    const a = new Score()
    a.WazaAri = 1
    return a
  }

  public static GetIppon (): Score {
    const a = new Score()
    a.Ippon = 1
    return a
  }
}
