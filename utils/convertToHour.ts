export function convertToHour(item: string): string {
  const hour = item.substring(0, 2)
  const minutes = item.substring(2, item.length)
  const convertedHours = parseInt(hour) % 12 || 12
  const amOrPm = parseInt(hour) >= 12 ? 'pm' : 'am'
  return `${convertedHours}:${minutes} ${amOrPm}`
}
