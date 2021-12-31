import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import { Link } from 'react-router-dom'

const AdminPage = () => {
  return <main>
    <PageHero title="admin" />
    <Wrapper className="section section-center">
      <Link to="/admin/user" type='submit' className='btn btn-block submit-btn'>
        Go to admin user
      </Link>
      <Link to="/admin/product" type='submit' className='btn btn-block submit-btn'>
        Go to admin product
      </Link>
      <Link to="/admin/cart" type='submit' className='btn btn-block submit-btn'>
        Go to admin cart
      </Link>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: flex;
  width: 400px;
  flex-direction: column;
  .btn {
    display: block;
    text-align: center;
  }
`
export default AdminPage
