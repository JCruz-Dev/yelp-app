import { ParagraphProps } from '@PTypes'

const Paragraph: React.FC<ParagraphProps> = ({ name, classes }) => {
  return <p className={`paragraph ${classes}`}>{name}</p>
}
export default Paragraph
