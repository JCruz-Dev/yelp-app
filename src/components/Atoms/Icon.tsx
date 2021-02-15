import dynamic from 'next/dynamic'
import { SvgProp } from '@PTypes'

const Icon: React.FC<SvgProp> = ({ svgIcon }): JSX.Element => {
  const DynamicIcon = dynamic(() => import(`@Assets/svg/${svgIcon}.svg`).catch(() => false))
  return <>{DynamicIcon ? <DynamicIcon /> : null}</>
}
export default Icon
