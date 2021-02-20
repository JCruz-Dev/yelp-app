import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { SEARCH_BUSINESS } from '../../queries/index'
import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@PTypes'
import { setViewed } from '@ReduxSlices/userDataReducer'
import Header from '@Molecules/Header'
import BusinessInfo from '@Molecules/BusinessInfo'
import BusinessLoader from '@Templates/BusinessLoader'
export const Business = (): JSX.Element => {
  //dispatch action
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const { id } = router.query
  const { data, loading } = useQuery(SEARCH_BUSINESS, {
    variables: {
      id: id,
    },
  })
  useEffect(() => {
    dispatch(setViewed(`${id}`))
  })
  return (
    <>
      {useMemo(
        () => (
          <>
            <Header />

            {loading ? <BusinessLoader /> : <BusinessInfo {...data} />}
          </>
        ),
        [data, loading]
      )}
    </>
  )
}
export default Business
