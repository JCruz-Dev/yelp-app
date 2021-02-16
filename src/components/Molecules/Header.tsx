import Icon from '@Atoms/Icon'
import LogoImage from '@Atoms/Logo'
const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header__content">
      <LogoImage />
      <Icon svgIcon="menu-icon" />
    </header>
  )
}
export default Header
