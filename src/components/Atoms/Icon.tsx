import dynamic from 'next/dynamic'
import { SvgProp } from '@PTypes'
import { useMemo } from 'react'

const Icon: React.FC<SvgProp> = ({ svgIcon }): JSX.Element => {
  const DynamicIcon = dynamic(() => import(`@Assets/svg/${svgIcon}.svg`).catch(() => false))
  return <>{useMemo(() => (DynamicIcon ? <DynamicIcon /> : null), [DynamicIcon])}</>
}
export default Icon
