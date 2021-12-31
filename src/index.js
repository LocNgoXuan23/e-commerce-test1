import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { ProductsBackendProvider } from './context/products_backend_context'
import { FilterProvider } from './context/filter_context'
import { FilterBackendProvider } from './context/filter_backend_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { AdminUserProvider } from './context/admin_user_context'
import { AdminProductProvider } from './context/admin_product_context'
import { AdminCartProvider } from './context/admin_cart_context'

ReactDOM.render(
    <UserProvider>
        <AdminCartProvider>
            <AdminProductProvider>
                <AdminUserProvider>
                    <ProductsBackendProvider>
                        <ProductsProvider>
                            <FilterBackendProvider>
                                <FilterProvider>
                                    <CartProvider>
                                        <App />
                                    </CartProvider>
                                </FilterProvider>
                            </FilterBackendProvider>
                        </ProductsProvider>
                    </ProductsBackendProvider>
                </AdminUserProvider>
            </AdminProductProvider>
        </AdminCartProvider>
    </UserProvider>,
    document.getElementById('root')
)
