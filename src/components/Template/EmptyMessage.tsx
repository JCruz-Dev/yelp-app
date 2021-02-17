import Icon from '@Atoms/Icon'

const EmptyMessage = (): JSX.Element => {
  return (
    <div className="empty">
      <Icon svgIcon={'search-icon'} />
      <p>Wow, your have not search anything yet. Start now!</p>
    </div>
  )
}
export default EmptyMessage
