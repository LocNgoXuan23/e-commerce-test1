import React from 'react'
import { useFilterBackendContext } from '../context/filter_backend_context'
import GridView from './GridView'
import ListView from './ListView'
import Error from './Error'
import Loading from './Loading'

const ProductBackendList = () => {
  const { filtered_products: products, grid_view, filter_loading, filter_error } = useFilterBackendContext()

  if (filter_loading) {
    return <Loading />
  }


  if (filter_error) {
    return <Error />
  }

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        sorry, no products matched your search
      </h5>
    )
  }


  if (grid_view === false) {
    return <ListView products={products} />
  }

  return <GridView products={products} />
}

export default ProductBackendList
