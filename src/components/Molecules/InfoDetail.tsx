import Icon from '@Atoms/Icon'
import { infoDetailProps } from '@PTypes'

const InfoDetail: React.FC<infoDetailProps> = ({ icon, infoName }) => {
  return (
    <div className="info__details">
      <Icon svgIcon={icon} />
      <p>{infoName}</p>
    </div>
  )
}
export default InfoDetail
