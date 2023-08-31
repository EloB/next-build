import '@/styles/globals.css'
import App, { AppContext, AppProps, AppInitialProps } from 'next/app'

type AppOwnProps = { example: string }

export default function MyApp({ Component, pageProps }: AppProps & AppOwnProps) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}