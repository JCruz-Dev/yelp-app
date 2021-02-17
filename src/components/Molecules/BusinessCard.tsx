import Icon from '@Atoms/Icon'
import Image from '@Atoms/Image'
import InfoDetail from '@Molecules/InfoDetail'
import Link from 'next/link'
import { businessState } from '../../typescript/types/index'

const BusinessCard: React.FC<businessState> = (props: businessState): JSX.Element => {
  const { id, name, photos, viewed, rating, review_count, location, phone } = props
  return (
    <Link href={`/business/${id}`}>
      <article className="card">
        <div className="card__image">
          <Image imgSource={photos[0]} imgAlt={name} classes="" />
        </div>
        <div className="card__head">
          <h2 className="card__head__title">{name}</h2>
          {viewed && <Icon svgIcon="viewed-icon" />}
        </div>
        <div className="card__main__details">
          <InfoDetail icon={'star'} infoName={rating} />
          <InfoDetail icon={'list-reviews'} infoName={review_count} />
        </div>
        <InfoDetail icon="pin" infoName={`${location.address1},${location.city}`} />
        <InfoDetail icon="phone" infoName={phone ? phone : 'N/A'} />
      </article>
    </Link>
  )
}
export default BusinessCard
