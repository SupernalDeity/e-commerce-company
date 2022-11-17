import React from 'react'
import Overview from '../../components/Overview'

const name = 'React.js Tutorial For Beginners: Learn React in 1 Hour'
const price = '$25'
const description = `
<p>A comprehensive guide to React.js aimed at beginners. Learn all you need to know in just an hour!</p>
`
const imgSrc = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
const imgAlt = 'Angled front view with bag zipped and handles upright.'
const features = [
  'Issa video',
]

const R60 = () => {
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

export default R60