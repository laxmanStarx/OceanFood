import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './global.css'
import {QueryClient, QueryClientProvider} from "react-query"

import {BrowserRouter as Router} from "react-router-dom"
import AppRoutes from './AppRoutes'
import Auth0ProviderWithNavigator from './auth/Auth0ProviderNavigator'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false,

    },
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <QueryClientProvider client={queryClient} >


      <Auth0ProviderWithNavigator>
      <AppRoutes />

      </Auth0ProviderWithNavigator>
      </QueryClientProvider>
      {/* <AppRoutes /> */}
    </Router>
  </React.StrictMode>,
)
