export function convertITimeStringToMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(':').map(Number);
  const timeInMinutes = hours * 60 + minutes;
  return timeInMinutes;
}
