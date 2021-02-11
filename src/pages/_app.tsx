import { AppProps } from 'next/app'
import { useApollo } from '../lib/apollo'
import { ApolloProvider } from '@apollo/client'
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = useApollo(pageProps)
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
