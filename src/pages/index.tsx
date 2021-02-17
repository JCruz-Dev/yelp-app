import { useState, useCallback } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { useLazyQuery } from '@apollo/client'
import { AppDispatch, businessState, userSearch } from '@PTypes'
import { useDispatch, useSelector } from 'react-redux'
import { saveData } from '@ReduxSlices/userDataReducer'
import { SEARCH_QUERY } from '@Queries'
import Layout from '@Templates/Layout'
import Title from '@Atoms/Title'
import Paragraph from '@Atoms/Paragraph'
import CardLoader from '@Templates/CardLoader'
import EmptyMessage from '@Templates/EmptyMessage'
import SearchForm from '@Molecules/SearchForm'
import BusinessContainer from '@Organisms/BusinessContainer'
import ErrorMessage from '@Templates/ErrorMessage'

const Home: NextPage = () => {
  //dispatch action
  const dispatch = useDispatch<AppDispatch>()
  //State foe store user input
  const [search, setSearch] = useState('')
  //Get state from store
  const state: Array<businessState> = useSelector((state: userSearch) => state.userData.queryData)
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
  const handleSubmit = useCallback(
    (search: string): void => {
      setSearch(search)
    },
    [setSearch]
  )
  return (
    <div>
      <Head>
        <title>Yelp App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Title titleName="Welcome to Yelpi App" Tag="h1" />
        <Paragraph name="The best place to search for a business" classes="search__paragram" />
        <SearchForm callLazyQuery={loadInput} onSubmit={handleSubmit} />
      </Layout>
      <div className="container">
        {state.length === 0 && !loading && !data && <EmptyMessage />}
        <div className="card-grid">{loading ? <CardLoader /> : <BusinessContainer />}</div>
        {data && data.search.business.length <= 0 && <ErrorMessage />}
      </div>
    </div>
  )
}
export default Home
