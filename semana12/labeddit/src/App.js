import React from 'react'
import Router from './Routes/Router'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Constants/theme'
import NavBar from './Components/NavBar/navbar'

const Container = styled.div`
  padding-top: 64px;
  width: 100vw;
  min-height: 100vh;
  background-color: #DAE0E6;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Router />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
