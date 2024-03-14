export function useDateFormat (): { formatDate: Function } {
  // a composable can update its managed state over time.
  function formatDate (d: Date | string): string {
    if (typeof d === 'string') d = new Date(d)
    const parts = d.toISOString().split(/T|-|:/g)
    return `${parts[2]}.${parts[1]}.${parts[0]}`
  }
  return { formatDate }
}
