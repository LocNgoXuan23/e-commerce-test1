import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAdminCartContext } from '../context/admin_cart_context'
import { Link, useParams, useHistory } from 'react-router-dom'
import { PageHero, Loading, Error } from '../components'
import { formatPrice } from '../utils/helpers'

const AdminSingleCartPage = () => {
  const { id } = useParams()
  const { fetchSingleCart, single_cart: cart, single_cart_loading: loading, single_cart_error: error } = useAdminCartContext()

  useEffect(() => {
    fetchSingleCart(id)
  }, [id])


  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const { cartItems, createdAt, _id, shippingFee, totalAmount, totalItems } = cart

  return <main>
    <PageHero title="admin" subtitle="cart" subtitle2={id} />
    <Wrapper className="section section-center">
      <div className="cart-content">
        <h3>cart id : {id}</h3>
        <h5>shippingFee : {shippingFee}</h5>
        <h5>totalAmount : {totalAmount}</h5>
        <h5>totalItems : {totalItems}</h5>
        <h5>createdAt : {createdAt}</h5>
        <h5>Cart Items:
          {cartItems.map((item) => {
            const { amount, color, id, image, max, name, price, product } = item
            return <article key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <h5 className="price">{formatPrice(price)}</h5>
                <p>color : <button style={{ background: color }} className="color-btn"></button> </p>
                <p>amount : {amount}</p>
                <p>product id : {product}</p>
                <Link to={`/products/${id}`} className="btn">
                  Details
                </Link>
              </div>
            </article>
          })}
        </h5>
        <hr></hr>
      </div>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  p {
    display: flex;
  }
  h3 {
    color: var(--clr-primary-5);
  }
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
`

export default AdminSingleCartPage
