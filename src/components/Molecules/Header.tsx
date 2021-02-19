import Icon from '@Atoms/Icon'
import LogoImage from '@Atoms/Logo'
import { useMemo } from 'react'
const Header: React.FC = (): JSX.Element => {
  return (
    <>
      {useMemo(
        () => (
          <header className={`header__content`}>
            <div className="container header__content__items">
              <LogoImage />
              <Icon svgIcon="menu-icon" />
            </div>
          </header>
        ),
        []
      )}
    </>
  )
}
export default Header
