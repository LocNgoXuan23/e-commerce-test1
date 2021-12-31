import React from 'react'
import { FeaturedProducts, FeaturedProductsBackend, Hero, Services, Contact } from '../components'
const HomePage = () => {
  return <main>
    <Hero />
    <FeaturedProducts />
    <FeaturedProductsBackend />
    <Services />
    <Contact />
  </main>
}

export default HomePage
