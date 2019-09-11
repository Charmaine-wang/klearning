import React, { Component } from 'react'
import GridLayout from './components/GridLayout'
import styled from 'styled-components'
import SearchField from './components/SearchField'

const StyledApp = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:100vw;
  height: ${props => (props.expandHeight ? 'auto' : '100vh')};
`

const App = () => {
  return (
      <StyledApp>
                <GridLayout bgColor='grey' colLayout='1fr'>
              <p>HEJ</p>
            </GridLayout>
            <SearchField />
          </StyledApp>
  )
}

export default App

