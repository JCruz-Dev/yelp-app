import { useState, useRef } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { useLazyQuery } from '@apollo/client'
import Link from 'next/link'
import { EventForm, AppDispatch, businessState, userSearch } from '@PTypes'
import { useDispatch, useSelector } from 'react-redux'
import { saveData } from '@ReduxSlices/userDataReducer'
import { SEARCH_QUERY } from '@Queries'
import Layout from '@Templates/Layout'
import Title from '@Atoms/Title'
import Paragraph from '@Atoms/Paragraph'
import CardLoader from '@Templates/CardLoader'
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
      <Layout>
        <Title titleName="Welcome to Yelpi App" Tag="h1" />
        <Paragraph name="The best place to search for a business" classes="search__paragram" />
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for food, drinks and much more."
            ref={inputRef}
            className="form__input"
            required
          />
          <button type="submit" className="form__button">
            Search
          </button>
        </form>
      </Layout>
      <div className="container">
        <CardLoader />
        {/* {loading ? (
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
        {data && data.search.business.length <= 0 && (
          <p>We could not find anything related to your search :(</p>
        )} */}
      </div>
    </div>
  )
}
export default Home
