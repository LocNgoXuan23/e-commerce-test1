import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import { Home, Product, ProductBackend, SingleProduct, About, Readme, Cart, CartHistory, Error, Login, Checkout, Register, ChangePassword, AuthWrapper, PrivateRoute, AdminRoute, Admin, AdminUser, AdminProduct, AdminCart, AdminSingleCart } from './pages'

function App() {  
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/readme'>
            <Readme />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <PrivateRoute exact path='/cart/history'>
            <CartHistory />
          </PrivateRoute>
          <Route exact path='/products'>
            <Product />
          </Route>
          <Route exact path='/productsBackend'>
            <ProductBackend />
          </Route>
          <Route exact path="/products/:id" children={<SingleProduct />} />

          {/* Auth */}
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <PrivateRoute exact path='/changePassword'>
            <ChangePassword />
          </PrivateRoute>
          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>

          {/* admin */}
          <AdminRoute exact path='/admin'>
            <Admin />
          </AdminRoute>
          <AdminRoute exact path='/admin/user'>
            <AdminUser />
          </AdminRoute>
          <AdminRoute exact path='/admin/product'>
            <AdminProduct />
          </AdminRoute>
          <AdminRoute exact path='/admin/cart'>
            <AdminCart />
          </AdminRoute>
          <AdminRoute exact path="/carts/:id" children={<AdminSingleCart />} />


          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
