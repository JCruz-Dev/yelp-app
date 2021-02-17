import { businessState, userSearch } from '@PTypes'
import BusinessCard from '@Molecules/BusinessCard'
import { useSelector } from 'react-redux'
const BusinessContainer: React.FC = (): JSX.Element => {
  //Get state from store
  const state: Array<businessState> = useSelector((state: userSearch) => state.userData.queryData)
  return <>{state && state.map((business) => <BusinessCard {...business} key={business.id} />)}</>
}
export default BusinessContainer
