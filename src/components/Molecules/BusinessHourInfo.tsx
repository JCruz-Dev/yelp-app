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
      {hours[0].open.map((h, index) => (
        <div key={index} className="business__secondary__card__hour__item">
          <h3>{days[index]}</h3>
          <p>
            {convertToHour(h.start)} AM - {convertToHour(h.end)} PM
          </p>
        </div>
      ))}
    </div>
  )
}
export default BusinessHourInfo
