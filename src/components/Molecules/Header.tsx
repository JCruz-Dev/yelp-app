import Icon from '@Atoms/Icon'
import LogoImage from '@Atoms/Logo'
import { useMemo } from 'react'
const Header: React.FC = (): JSX.Element => {
  return (
    <>
      {useMemo(
        () => (
          <header className="header__content">
            <LogoImage />
            <Icon svgIcon="menu-icon" />
          </header>
        ),
        []
      )}
    </>
  )
}
export default Header
