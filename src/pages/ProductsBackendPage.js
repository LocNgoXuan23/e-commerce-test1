import React from 'react'
import styled from 'styled-components'
import { BackendFilters, ProductBackendList, BackendSort, PageHero } from '../components'

const ProductsBackendPage = () => {

  return <main>
    <PageHero title="productsBackend" />
    <Wrapper className="page">
      <div className="section-center products">
        <BackendFilters />
        <div>
          <BackendSort />
          <ProductBackendList />
        </div>
      </div>
    </Wrapper>
  </main>
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsBackendPage
