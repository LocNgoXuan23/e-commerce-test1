import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'
// will remove later
import { useUserContext } from '../context/user_context'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading, error } = useUserContext()

  if (isLoading) {
    return <Wrapper>
      <h1>Loading...</h1>
    </Wrapper>
  }

  if (error) {
    return <Wrapper>
      <h1>{error.message}</h1>
    </Wrapper> 
  }

  return <Route 
    { ...rest } 
    render={() => {
      return user ? children : <Redirect to="/"></Redirect>
  }}></Route>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default PrivateRoute
