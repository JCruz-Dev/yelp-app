import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { SEARCH_BUSINESS } from '../../queries/index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'typescript/types'
import { setViewed } from 'redux/slices/userDataReducer'
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )}
    </>
  )
}
export default Business
