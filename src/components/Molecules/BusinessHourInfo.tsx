import { convertToHour } from 'utils/convertToHour'
import { days } from '../../../utils/days'

type BusinessHour = {
  hours: [
    {
      open: [{ start: string; end: string }]
    }
  ]
}
const BusinessHourInfo: React.FC<BusinessHour> = ({ hours }): JSX.Element => {
  return (
    <div className="business__secondary__card__hour">
      {/* Because of the Backend API does not specify when a business has two hours of service in a same day, I just select the first 6 schedules when fails in this error*/}
      {hours[0].open.slice(0, 6).map((h, index) => (
        <div key={index} className="business__secondary__card__hour__item">
          <h3>{days[index]}</h3>
          <p>
            {convertToHour(h.start)} - {convertToHour(h.end)}
          </p>
        </div>
      ))}
    </div>
  )
}
export default BusinessHourInfo
