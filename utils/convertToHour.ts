export function convertToHour(item: string): string {
  return `${item.substring(0, 2)}:${item.substring(2, item.length)}`
}
