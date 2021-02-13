import { useState, useRef } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { useLazyQuery } from '@apollo/client'
import { SEARCH_QUERY } from 'queries'
import Link from 'next/link'
import { EventForm } from '../types/index'

const Home: NextPage = () => {
  //Use Ref to get input value
  const inputRef = useRef(null)
  //State fo store user input
  const [search, setSearch] = useState('')
  const [loadInput, { loading, data, error }] = useLazyQuery(SEARCH_QUERY, {
    variables: {
      term: search,
    },
  })
  const handleSubmit = (e: EventForm): void => {
    e.preventDefault()
    if (inputRef.current.value !== '') {
      setSearch(inputRef.current.value)
      loadInput()
    }
  }
  return (
    <div>
      <Head>
        <title>Yelp App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" id="search" placeholder="search for food" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
      {loading ? (
        <p>Loading....</p>
      ) : (
        data &&
        data.search.business.map((d) => (
          <Link href={`/business/${d.id}`} key={d.id}>
            <p>{d.name}</p>
          </Link>
        ))
      )}
      {data && data.search.business.length <= 0 && (
        <p>We could not find anything related to your search :(</p>
      )}
    </div>
  )
}
export default Home
