import Header from '@Molecules/Header'
import { useMemo } from 'react'

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      {useMemo(
        () => (
          <div className="layout__container">
            <div className="container layout__content">
              <Header />
              <div className="layout__items">{children}</div>
            </div>
          </div>
        ),
        [children]
      )}
    </>
  )
}
export default Layout
