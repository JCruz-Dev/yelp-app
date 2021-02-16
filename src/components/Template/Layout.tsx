import Header from '@Molecules/Header'

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <div className="layout__container">
      <div className="layout__content container">
        <Header />
        <div className="layout__items">{children}</div>
      </div>
    </div>
  )
}
export default Layout
