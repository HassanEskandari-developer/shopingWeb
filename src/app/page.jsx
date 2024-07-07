'use client'

import Instagram from "./Component/Instagram"
import Slider from "./Component/Slider"
import Category from "./category/page"
import Product from "./Component/Product"

export default function Page() {
  return (
    <main>
      <Slider />
      <Category />
      <Product />
      <Instagram />
    </main >
  )
}