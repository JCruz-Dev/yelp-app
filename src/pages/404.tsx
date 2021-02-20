import Link from 'next/link'
import Image from '@Atoms/Image'

export default function FourOhFour(): JSX.Element {
  return (
    <div className="container notfound__page">
      <Image imgAlt="sorry" imgSource={'/images/notfound.gif'} classes="page__gif" />
      <h1 className="page__title">Ups, seems you are lost in a rare universe</h1>
      <p className="page__description">
        You have to come back to keep searching you favorite stuff.
      </p>
      <Link href="/">
        <a className="business__main__info__button button--close">Go back home</a>
      </Link>
    </div>
  )
}
