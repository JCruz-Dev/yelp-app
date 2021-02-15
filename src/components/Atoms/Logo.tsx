import Image from 'next/image'
const LogoImage: React.FC = (): JSX.Element => {
  return <Image src={'/images/logo.png'} width={71} height={35} />
}
export default LogoImage
