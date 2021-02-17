const CardLoader: React.FC = () => {
  return (
    <>
      {[...Array(3)].map((value: undefined, index: number) => (
        <div className="loader" key={index}>
          <div className="loader__content">
            <div className="loader__img"></div>
            <div className="loader__title"></div>
            <div className="loader__comments"></div>
            <div className="loader__direction"></div>
            <div className="loader__phone"></div>
          </div>
        </div>
      ))}
    </>
  )
}
export default CardLoader
