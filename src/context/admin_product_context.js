import React, { useEffect, useContext, useReducer, useState } from 'react'
import axios from 'axios'
import { products_url } from '../utils/constants'
import reducer from '../reducers/admin_product_reducer'

import {
  SET_ALL_PRODUCTS_LOADING,
  SET_ALL_PRODUCTS_SUCCESS,
  SET_ALL_PRODUCTS_ERROR,
  UPDATE_FORM,
  SET_SUBMIT_SUCCESS,
  SET_ALERT,
  CLEAR_FORM,
  SET_FORM,
  SET_ACTION
} from '../actions'

const initialState = {
  all_products_loading: true,
  all_products_error: false,
  all_products: [],
  action_status: 'create',
  action_id: null,
  action_object: null,

  name: '',
  price: '',
  image: '', 
  colors: '',
  company: '',
  description: '',
  category: '',

  alert: { show: false, msg: '', type: '' },
  is_submit_success: true,
}

const AdminProductContext = React.createContext()
export const AdminProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.is_submit_success) {
      fetchAdminAllProducts()
    }
  }, [state.is_submit_success])


  useEffect(() => {
    if (state.action_object) {
      dispatch({ type: SET_FORM, payload: state.action_object })
    }
  }, [state.action_object])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.action_status === 'create') {
      createProduct()
    }
    if (state.action_status === 'edit') {
      editProduct()
    }
  }

  const fetchAdminAllProducts = async () => {
    dispatch({ type: SET_ALL_PRODUCTS_LOADING })
    try {
      const response = await axios.get(products_url)
      const allProducts = response.data.products
      dispatch({ type: SET_ALL_PRODUCTS_SUCCESS, payload: allProducts })
    } catch (error) {
      console.log(error)
      dispatch({ type: SET_ALL_PRODUCTS_ERROR})
    }
  }

  const createProduct = async () => {
    if ( !state.name || !state.price || !state.image || !state.colors || !state.company || !state.description || !state.category ) {
      showAlert(true, 'danger', 'please provide all of info !!!')
      return 
    }
    const newProduct = { name: state.name, price: parseInt(state.price), image: state.image, colors: state.colors.split(','), company: state.company, description: state.description, category: state.category }
    dispatch({ type: SET_SUBMIT_SUCCESS, payload: false })
    try {
      await axios.post(products_url, newProduct)
      showAlert(true, 'success', 'create successfully !!!')
      dispatch({ type: SET_SUBMIT_SUCCESS, payload: true })
      dispatch({ type: CLEAR_FORM })
    } catch (error) {
      console.log(error)
      dispatch({ type: SET_SUBMIT_SUCCESS, payload: true })
    }
  }

  const editProduct = async () => {
    if ( !state.name || !state.price || !state.image || !state.colors || !state.company || !state.description || !state.category ) {
      showAlert(true, 'danger', 'please provide all of info !!!')
      return 
    }
    const editedProduct = { name: state.name, price: state.price, image: state.image, colors: state.colors.split(','), company: state.company, description: state.description, category: state.category }
    dispatch({ type: SET_SUBMIT_SUCCESS, payload: false })
    try {
      await axios.patch(`${products_url}/${state.action_id}`, editedProduct)
      showAlert(true, 'success', `Success! product edited !!!`)
      dispatch({ type: SET_SUBMIT_SUCCESS, payload: true })
      dispatch({ type: CLEAR_FORM })
    } catch (error) {
      showAlert(true, 'danger', `There are something wrong !!!`)
      dispatch({ type: SET_SUBMIT_SUCCESS, payload: true })
    }
  } 

  const removeAllUsers = () => {
    state.all_products.forEach(product => {
      removeProduct(product.id)
    })
  }

  const removeProduct = async (productId) => {
    dispatch({ type: SET_SUBMIT_SUCCESS, payload: false })
    try {
      await axios.delete(`${products_url}/${productId}`)
      showAlert(true, 'danger', `Success! product removed`)
      dispatch({ type: SET_SUBMIT_SUCCESS, payload: true })
    } catch (error) {
      if (error.response.status === 404) {
        showAlert(true, 'danger', `No product with id : ${productId}`)
        dispatch({ type: SET_SUBMIT_SUCCESS, payload: true })
      }
    }
  }

  const fetchSingleProduct = async (productId) => {
    try {
      const response = await axios.get(`${products_url}/${productId}`)
      const newProduct = response.data.product
      dispatch({ type: SET_ACTION, payload: { 
        object: newProduct,
        id: productId,
        status: 'edit',
      } })
    } catch (error) {
      console.log(error)
    }
  }

  const updateProductForm = (e) => {
    let name = e.target.name
    let value = e.target.value
    dispatch({ type: UPDATE_FORM, payload: { name, value } })
  }

  const updateEdit = (productId) => {
    fetchSingleProduct(productId)
  }

  const showAlert = (show = false, type = '', msg = '') => {
    dispatch({ type: SET_ALERT, payload: { show, type, msg } })
  }

  const clearForm = () => {
    dispatch({ type: CLEAR_FORM })
  }

  return (
    <AdminProductContext.Provider value={{
      ...state,
      fetchAdminAllProducts,
      updateProductForm,
      updateEdit,
      removeProduct,
      createProduct,
      handleSubmit,
      showAlert,
      removeAllUsers,
      clearForm
    }}>{children}</AdminProductContext.Provider>
  )
}
// make sure use
export const useAdminProductContext = () => {
  return useContext(AdminProductContext)
}
