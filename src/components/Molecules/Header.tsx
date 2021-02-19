import Icon from '@Atoms/Icon'
import LogoImage from '@Atoms/Logo'
import { useMemo } from 'react'
import Link from 'next/link'
const Header: React.FC = (): JSX.Element => {
  return (
    <>
      {useMemo(
        () => (
          <header className={`header__content`}>
            <div className="container header__content__items">
              <Link href="/">
                <a>
                  <LogoImage />
                </a>
              </Link>
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
