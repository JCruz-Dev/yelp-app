import { AppProps } from 'next/app'
import { useApollo } from '../lib/apollo'
import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/main.scss'
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const client = useApollo(pageProps)
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}

export default MyApp
