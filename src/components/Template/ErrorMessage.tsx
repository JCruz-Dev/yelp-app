import Image from '@Atoms/Image'

const ErrorMessage: React.FC = () => {
  return (
    <div className={'error-message'}>
      <Image imgAlt="sorry" imgSource={'/images/sorry.gif'} />
      <p>So sorry, We could not find anything related to your search. Try somehting else.</p>
    </div>
  )
}
export default ErrorMessage
