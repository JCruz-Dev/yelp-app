import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { SEARCH_BUSINESS } from '../../queries/index'
export const Business = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query
  const { data, loading, error } = useQuery(SEARCH_BUSINESS, {
    variables: {
      id: id,
    },
  })
  console.log(data)
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
