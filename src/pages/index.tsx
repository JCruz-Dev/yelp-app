import { useState, useRef } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { useLazyQuery } from '@apollo/client'
import { SEARCH_QUERY } from 'queries'
import Link from 'next/link'
import { EventForm, AppDispatch, businessState, userSearch } from '../typescript/types'
import { useDispatch, useSelector } from 'react-redux'
import { saveData } from '../redux/slices/userDataReducer'
const Home: NextPage = () => {
  //dispatch action
  const dispatch = useDispatch<AppDispatch>()
  //Get state from store
  const state: Array<businessState> = useSelector((state: userSearch) => state.userData.queryData)
  //Use Ref to get input value
  const inputRef = useRef(null)
  //State foe store user input
  const [search, setSearch] = useState('')
  //Query Data
  const [loadInput, { loading, data }] = useLazyQuery(SEARCH_QUERY, {
    variables: {
      term: search,
    },
    //When success, save in the store
    onCompleted: (data) => {
      dispatch(saveData(data.search.business))
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
        state &&
        state.map((d) => (
          <Link href={`/business/${d.id}`} key={d.id}>
            <a>
              <p>
                {d.name} {d.viewed && <span>[visto]</span>}
              </p>
            </a>
          </Link>
        ))
      )}
      {data && data.length <= 0 && <p>We could not find anything related to your search :(</p>}
    </div>
  )
}
export default Home
