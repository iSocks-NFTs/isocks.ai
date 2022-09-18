import '../styles/globals.css'
import React from 'react'
import GlobalContextProvider from '../context/globalContext'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default MyApp