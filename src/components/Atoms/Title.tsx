import { TitleProps } from '@PTypes'

const Title: React.FC<TitleProps> = ({ titleName, Tag, classes }): React.ReactElement => {
  return <Tag className={`title ${classes}`}>{titleName}</Tag>
}
export default Title
