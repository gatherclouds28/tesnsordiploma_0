import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { QueryClient, QueryClientProvider } from 'react-query'

import { rootRoutes } from 'root-router'
import { ThemeProvider, theme, GlobalStyles } from 'ui/styles'

import { AppBar } from 'app/features/AppBar'
import { PlayerProvider } from 'shared/context/context'

const history = createBrowserHistory()

const queryClient = new QueryClient()

const Root: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <PlayerProvider>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <GlobalStyles />
          <AppBar />
          <Switch>{rootRoutes()}</Switch>
        </Router>
      </ThemeProvider>
    </PlayerProvider>
  </QueryClientProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
