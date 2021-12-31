import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
  {
    id: 4,
    text: 'productsBackend',
    url: '/productsBackend',
  },
  {
    id: 5,
    text: 'about',
    url: '/about',
  },
  {
    id: 6,
    text: 'readme',
    url: '/readme',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
  },
]

// product
export const products_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/products'
export const single_product_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/products/'
// room
export const rooms_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/rooms/'
// booking
export const bookings_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/bookings'
export const get_current_user_bookings_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/bookings/showAllMyBookings'
// auth
export const login_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/auth/login'
export const logout_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/auth/logout'
export const register_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/auth/register'
// user
export const use_showMe_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/users/showMe'
export const update_password_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/users/updateUserPassword'
// Cart
export const create_cart_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/carts'
export const get_current_user_carts_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/carts/showAllMyOrders'
export const carts_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/carts'

// Admin User
export const get_all_users_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/users'
export const create_user_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/users'
export const users_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/users'
export const edit_user_url = 'https://hotel-ecommerce-xuanloc-api.herokuapp.com/api/v1/users'
