const BusinessLoader: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="business__loader__container">
        <div className="container">
          <div className="business__loader">
            <div className="business__loader__info">
              <div className="business__loader__info__title"></div>
              <div className="business__loader__info__reviews"></div>
              <div className="business__loader__info__location"></div>
              <div className="business__loader__info__phone"></div>
              <div className="business__loader__info__price"></div>
              <div className="business__loader__info__button"></div>
            </div>
            <div className="business__loader__image"></div>
          </div>
        </div>
      </div>
      <div className="container business__secondary">
        <article>
          <h2 className="business__secondary__card__title">Hours</h2>
          <div className="loader__item__hour"></div>
        </article>
        <article>
          <h2 className="business__secondary__card__title">User Reviews</h2>
          <div className="loader__item__review"></div>
        </article>
      </div>
    </>
  )
}
export default BusinessLoader
