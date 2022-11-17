import React from 'react'
import Overview from '../../components/Overview'

const name = 'Node.js The Complete Guide'
const price = '$25'
const description = `
<p>A comprehensive guide to Node.js.</p>
`
const imgSrc = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
const imgAlt = 'Angled front view with bag zipped and handles upright.'
const features = [
  'Issa video',
]

const Nfull = () => {
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

export default Nfull