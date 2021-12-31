import React, { useEffect, useContext, useReducer, useState } from 'react'
import axios from 'axios'
import { carts_url } from '../utils/constants'
import reducer from '../reducers/admin_cart_reducer'
import { useUserContext } from './user_context'

import {
  SET_LOADING, 
  SET_SUCCESS, 
  SET_ERROR,
  SET_ALERT,
  UPDATE_FORM,
  SET_SUBMIT_SUCCESS,
  CLEAR_FORM,
  SET_ACTION,
  SET_FORM,
  GET_SINGLE_OBJECT,
  GET_SINGLE_OBJECT_LOADING,
  GET_SINGLE_OBJECT_ERROR
} from '../actions'

const initialState = {
  all_carts_loading: true,
  all_carts_error: false,
  all_carts: [],
  action_status: 'create',
  action_id: null,
  action_object: null,

  alert: { show: false, msg: '', type: '' },
  is_submit_success: true,
  single_cart: null,
  single_cart_loading: true,
  single_cart_error: false,
}

const AdminCartContext = React.createContext()
export const AdminCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { admin } = useUserContext()

  useEffect(() => {
    if (state.is_submit_success) {
      fetchAllCarts()
    }
  }, [state.is_submit_success])

  const fetchSingleCart = async (cartId) => {
    dispatch({ type: GET_SINGLE_OBJECT_LOADING })
    try {
      const response = await axios.get(`${carts_url}/${cartId}`)
      const newCart = response.data.cart
      dispatch({ type: GET_SINGLE_OBJECT, payload: newCart })
    } catch (error) {
      console.log(error)
      dispatch({ type: GET_SINGLE_OBJECT_ERROR })
    }
  }

  const removeAllCarts = () => {
    state.all_carts.forEach(cart => {
      removeCart(cart._id)
    })
  }

  const removeCart = async (cartId) => {
    dispatch({ type: SET_SUBMIT_SUCCESS, payload: false })
    try {
      await axios.delete(`${carts_url}/${cartId}`)
      showAlert(true, 'danger', `Success! cart removed`)
      dispatch({ type: SET_SUBMIT_SUCCESS, payload: true })
    } catch (error) {
      showAlert(true, 'danger', `No room with id : ${cartId}`)
        dispatch({ type: SET_SUBMIT_SUCCESS, payload: true })
    }
  }

  const fetchAllCarts = async () => {
    if (admin) {
      dispatch({ type: SET_LOADING })
      try {
        const response = await axios.get(carts_url)
        const allCarts = response.data.carts
        dispatch({ type: SET_SUCCESS, payload: allCarts })
      } catch (error) {
        console.log(error)
        dispatch({ type: SET_ERROR })
      }
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    dispatch({ type: SET_ALERT, payload: { show, type, msg } })
  }

  return (
    <AdminCartContext.Provider value={{
      ...state,
      fetchAllCarts,
      removeCart,
      showAlert,
      removeAllCarts,
      fetchSingleCart,
    }}>{children}</AdminCartContext.Provider>
  )
}
// make sure use
export const useAdminCartContext = () => {
  return useContext(AdminCartContext)
}
