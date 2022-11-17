import React from 'react'
import Overview from '../../components/Overview'

const name = 'Zip Tote Basket'
const price = '$140'
const description = `
<p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
`
const imgSrc = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
const imgAlt = 'Angled front view with bag zipped and handles upright.'
const features = [
  'Multiple strap configurations',
  'Spacious interior with top zip',
  'Leather handle and tabs',
  'Interior dividers',
  'Stainless strap loops',
  'Double stitched construction',
  'Water-resistant',
]

const Css = () => {
  return (
    <Overview
      name={name}
      price={price}
      description={description}
      imageSrc={imgSrc}
      imageAlt={imgAlt}
      features={features} />
  )
}

export default Css