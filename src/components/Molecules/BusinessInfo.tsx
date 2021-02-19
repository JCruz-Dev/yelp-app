import Icon from '@Atoms/Icon'
import { businessInfoProps } from '@PTypes'
import BusinessHourInfo from './BusinessHourInfo'
import BusinesReviewInfo from './BusinessReviewInfo'

const BusinessInfo: React.FC<businessInfoProps> = (props: businessInfoProps): JSX.Element => {
  const { business } = props
  const {
    businessname,
    rating,
    review_count,
    location,
    phone,
    price,
    hours,
    photos,
    reviews,
  } = business
  return (
    <>
      <div className="business">
        <div className="container">
          <div className="business__content">
            <div className="business__main__info">
              <h1 className="business__main__info__title">{business && businessname}</h1>
              <div className="business__main__info__details">
                <div className="details__item" title="rating">
                  <Icon svgIcon="star-big" />
                  <span title="rating">{business && rating}</span>
                </div>
                <div className="details__item" title="reviews count">
                  <Icon svgIcon="list-reviews-big" />
                  <span>{business && review_count} </span>
                </div>
              </div>
              <div className="business__main__info__location d-grid-2--cols ">
                <Icon svgIcon="pin-big" />
                <div className="business__main__location__content">
                  <span className="business__main__info__location__address" title="address">
                    {business && location.address1},
                  </span>
                  <span className="business__main__info__location_city" title="city">
                    {business && location.city}
                  </span>
                </div>
              </div>
              <div className="business__main__info__phone d-grid-2--cols  ">
                <Icon svgIcon="phone-big" />
                <span>{business && phone}</span>
              </div>
              <div className="business__main__info__price">{business && price}</div>
              {hours[0].is_open_now ? (
                <button className="business__main__info__button button--open">
                  Open right now
                </button>
              ) : (
                <button className="business__main__info__button button--close">
                  Closed right now
                </button>
              )}
            </div>
            <div className="business__main__info__image">
              <img src={business && photos[0]} alt="Business" />
            </div>
          </div>
        </div>
      </div>
      <section className="container business__secondary">
        <article>
          <h2 className="business__secondary__card__title">Hours</h2>
          <BusinessHourInfo hours={hours} />
        </article>
        <article className="business__secondary__card">
          <h2 className="business__secondary__card__title">Reviews</h2>
          <BusinesReviewInfo reviews={reviews} />
        </article>
      </section>
    </>
  )
}
export default BusinessInfo
