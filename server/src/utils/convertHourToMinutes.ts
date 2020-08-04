export default function convertHourToMinutes(time: string) {
  // Split the hour written as a string and convert it to number
  const [ hour, minutes ] = time.split(':').map(Number)

  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes;
}