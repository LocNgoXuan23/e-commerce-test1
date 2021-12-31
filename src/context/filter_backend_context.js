import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_backend_reducer'
import {
  GET_FILTER_BEGIN,
  GET_FILTER_SUCCESS,
  GET_FILTER_ERROR,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsBackendContext } from './products_backend_context'
import { products_url as url } from '../utils/constants'
import axios from 'axios'

const initialState = {
  filter_loading: true,
  filter_error: false,
  filtered_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 400000,
    price: 400000,
    shipping: true,    
  }
}

const FilterBackendContext = React.createContext()

export const FilterBackendProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetchFilterSortProducts()
  }, [state.sort, state.filters])

  const fetchFilterSortProducts = async () => {
    dispatch({ type: GET_FILTER_BEGIN })
    const sortUrl = `sort=${state.sort}`
    const { text, category, company, color, price, shipping } = state.filters
    const filterUrl = `&name=${text}&company=${company === 'all' ? '' : company}&category=${category === 'all' ? '' : category}&numericFilters=price<=${price}&shipping=${shipping === true ? '' : false}&colors=${color === 'all' ? '' : '%23' + color.slice(1)}`
    
    const newUrl = `${url}?${sortUrl}${filterUrl}`
    try {
      const response = await axios.get(newUrl)
      const filteredProducts = response.data.products
      dispatch({ type: GET_FILTER_SUCCESS, payload: filteredProducts})
    } catch (error) {
      console.log(error)
      dispatch({ type: GET_FILTER_ERROR })
    }
  }

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }

  const updateSort = (e) => {
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'color') {
      value = e.target.dataset.color
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'shipping') {
      value = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  return (
    <FilterBackendContext.Provider value={{
      ...state,
      setGridView,
      setListView,
      updateSort,
      updateFilters,
      clearFilters
    }}>
      {children}
    </FilterBackendContext.Provider>
  )
}
// make sure use
export const useFilterBackendContext = () => {
  return useContext(FilterBackendContext)
}
