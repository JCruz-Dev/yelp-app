import Icon from '@Atoms/Icon'
type reviewsProps = {
  reviews: [
    {
      text: string
    }
  ]
}
const BusinesReviewInfo: React.FC<reviewsProps> = ({ reviews }) => {
  return (
    <div className="business__secondary__review">
      {reviews.map((review, index) => (
        <article key={index} className="business__secondary__card__review__item">
          <Icon svgIcon="chat" />
          <p>{review.text}</p>
        </article>
      ))}
    </div>
  )
}
export default BusinesReviewInfo
