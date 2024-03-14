type ListSystemId = 0 | 1 | 2 | 3
export class ListSystem {
  /**
   * 0 = Everyone vs everyone
   * 1 = Double Ko
   * 2 = Pre pooled
   * 3 = Best of three
   */
  public Id!: ListSystemId
}
